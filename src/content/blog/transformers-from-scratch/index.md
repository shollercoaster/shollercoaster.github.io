---
title: "Transformers from Scratch"
description: "My working notes on Transformers from Scratch, part of my learnings from the ARENA course."
category: research
pubDate: 2026-06-01
---

Basic intuition behind Transformers: you feed in a sequence of length N, then sample from the probability distribution over the N+1-th word, use this to construct a new sequence of length N+1, then feed this new sequence into the model to get a probability distribution over the N+2-th word, and so on.
# Training
- Model is trained on next token prediction.
- For each 100 tokens given, it produces 100 probability distributions (1 for each), where each distribution p(i) has the probability distribution over i-1 tokens.
- For every sequence n, we have n different predictions in a transformer:$$p(x_1), \; p(x_2|x_1), \; p(x_3|x_1x_2), \; \ldots, \; p(x_n|x_1 \ldots x_{n-1})$$
![Autoregressive nature of Transformers](/images/blog/transformer-autoregressive.png)
- n input tokens, output of transformer is n vectors - ("the" distro, "the cat" distro, "the cat sat" distro and so on ...)
	- where X distro is the vector representing the probability distribution of what can come after X
# Transformer Inputs - Tokens
- to_tokens converts text to tokens, and prepends them with BOS (beginning of sequence), which can be removed with `prepend_BOS=false`  in `to_tokens`, `to_str_tokens`, `model.forward` and any other function that converts strings to multi-token tensors.
	- BOS useful to denote beginning of sentence, and to act as rest for attention heads.
	- BOS=EOS=pad tokens in GPT because they hold the same meaning since text is read left to right.
- Input to transformers is a sequence of tokens (integers), not vectors.
- These integers are converted to vectors via lookup table (eg, one hot encoding).
## Text Generation Steps
Refers to [cell](https://colab.research.google.com/github/callummcdougall/ARENA_3.0/blob/main/chapter1_transformer_interp/exercises/part1_transformer_from_scratch/1.1_Transformer_from_Scratch_exercises.ipynb#scrollTo=WiZ-Bm2QaGSd) in notebook.
- Input: One sequence with length seq_len would have this shape after tokenization: `(batch, seq_len) = (1, seq_len)`.
- Shape of output (logit): `(batch, seq_len, vocab_size)`. Vocab_size comes from transformer.
- The `[i, j, :]`<sup>th</sup> element of our output is a vector of logits represents the prediction for the `j+1`<sup>th</sup> token in the `i`<sup>th</sup> sequence.
#### Summary
- Transformers predict next token one by one in a causal left-to-right way.
- Tokenizers convert language to integers.
- Integers are converted to vectors using lookup table.
- Output is a vector of logits (one for each input token), we convert to a probability distn with a softmax, and can then convert this to a token (eg taking the largest logit, or sampling).
- Now this output is appended to input and sent as input again (i.e, autoregressive).
- Meta level point: Transformers are sequence operation models, they take in a sequence, do processing in parallel at each position, and use attention to move information between positions!
### Important Code Steps
```Python
tokens = reference_gpt2.to_tokens(reference_text).to(device)
logits, cache = reference_gpt2.run_with_cache(tokens)
probs = logits.softmax(dim=-1)
```
# Making Transformer
![Transformers - as explained by Neel Nanda](/images/blog/Transformer-Neel-Nanda-diagram.png)
## Transformer Glossary
![Internal Architecture of TransformerLens](/images/blog/TransformerLens-Internal-Architecture.png)
### Token Embedding
- lookup table to convert tokens to vectors, shown as matrix $W_E$, consisting of stack of token embedding vectors.
### Residual Stream
- sum of all previous outputs of layers of the model, also sent as input to each new layer. It has shape `[batch, seq_len, d_model]` (`d_model` is length of a single embedding vector).
- Initial value denoted as $x_0$, later as $x_i$ (after more MLP and attention layers applied).
- Fundamental concept of how transformers have memory, move info between layers, and store info that attention moves between positions.
- Residual Stream also used for output accumulation, as it contains collection of all inferences made by model upto a point when it is moving through layers. So taking this RS value midway through model and converting it to tokens gives coherent good predictions.
### Transformer Blocks
- `n_layers`, each block contains attention layer and MLP layer, but we say a transformer has k layers if it has k blocks (i.e. 2k total layers).
![Transformer Block](/images/blog/Transformer-Block.png)
### Attention
- move info from prior positions (vectors at diff positions in residual stream) to the current token
- move backwards only to avoid cheating, so later vectors have more seq as input.
- `n_heads` number of attention heads, each with own params, settings
- attention heads act individually and their outputs are added
- Only transformer part that moves info between positions
- What each head does:
	- creates **attention pattern** for each destination token, basically a probability distribution of all prior + current tokens (distro of how much info to copy)
	- moves this attention pattern (linear map) from each source to each destination token.
- Each head has 3 components:
	- **Query**: The question jiske liye info chaiye from all tokens
	- **Key**: Represents which token has info. Token with info to question will have highest dot product (called attention score)
	- **Value**: The actual value taken from token with info.
![Key Query Value](/images/blog/Key-Query-Value.png)
- Attention is a way of "generalized convolution". Normal convolution = locality based. But language context isn't always local and words can be important/connected even when they're not close together. So this helps attention figure out this algo per sentence instead of depending on locality/proximity.
![Attention inside Transformers](/images/blog/Attention-Transformer.png)
### MLP
- standard neural network with single hidden layer (`d_mlp = 4 * d_model`) and non-linear activation function (GELU)
- they don't move info within blocks they perform thinking/computation for each residual block based on all the info that attention tokens has collected for them from prior tokens.
- comprise 2/3rd of entire transformer components.
- *MLP can be re-imagined as key-value pairs*:  
	- MLP output can be written as  $f(x^T W^{in})W^{out}$, where $W^{in}$ and $W^{out}$ are the different weights of the MLP, $f$ is activation function, and $x$ is a vector in the residual stream. This can be rewritten as:
	- $f(x^T W^{in}) W^{out} = \sum_{i=1}^{d_{mlp}} f(x^T W^{in}_{[:, i]}) W^{out}_{[i, :]}$
	- Here $W_{in}$ are the input vectors which when activated, write in the direction of output vectors $W_{out}$. Similar to key value in attention layers, so they are also called that.
- MLP as a Knowledge Storage in Transformer:
	- Key value pairs also an intuition for memory storage in kv pairs.
	- Also found evidence for memory management, that each $i_{th}$ neuron satisfies:  $W^{in}_{[:, i]} \approx - W^{out}_{[i, :]} \approx \vec v$ for some unit vector $\vec v$. So it might mean that its clearing up positive component of vector $\vec x$ in the direction of $\vec v$. 
![MLP Transformer](/images/blog/MLP-Transformer.png)
### Unembedding
Apply linear map $W_U$ (unembedding matrix) that maps final residual stream to a vector of logits.
#### Tied Embeddings
- Sometimes models map $W_U$ and $W_E$ together. Meaning the embedding matrix $W_E$ (used to convert token IDs into initial `d_model` vectors) and the unembedding matrix $W_U$ (used to convert final `d_model` vectors back into logits) share the same weights. That is, `W_U` is often set to be the transpose of `W_E`. 
- This is good for training as there are lesser params to train on. 
- Con: assumes a symmetric relationship, that is not causal. Obama has a higher chance of prob after Barack, but not other way around. But single mapping assumes that since these tokens are probable together they can be substituted and also have back-probability. 
### LayerNorm
- Simple normalization function at start of each layer (attention head, MLP and before unembed) to convert input vector into vector with 0 mean and 1 variance.
- Applies elementwise scaling and translation.
- Hard for interpretability because dividing by variance makes it hard to separate contribution of each input to the output difficult.
![LayerNorm](/images/blog/LayerNorm.png)
### Positional Embeddings
- Problem: currently attention learns symmetric info - info of token 5 from token 1 is same weight as that from token 2, whereas closer tokens should have more importance. 
- Solution: Positional embeddings mapping the position of each token to its residual stream vector. This is added to the embed.
- We add and not concatenate inside transformers so that different info pieces can learn from each other instead of creating new entity with separate dimensions.
# Code (GPT2 specific)
Activations of first layer in GPT 2 model:
```Python
hook_embed                     (1, 35, 768)
hook_pos_embed                 (1, 35, 768)
blocks.0.hook_resid_pre        (1, 35, 768)
blocks.0.ln1.hook_scale        (1, 35, 1)
blocks.0.ln1.hook_normalized   (1, 35, 768)
blocks.0.attn.hook_q           (1, 35, 12, 64)
blocks.0.attn.hook_k           (1, 35, 12, 64)
blocks.0.attn.hook_v           (1, 35, 12, 64)
blocks.0.attn.hook_attn_scores (1, 12, 35, 35)
blocks.0.attn.hook_pattern     (1, 12, 35, 35)
blocks.0.attn.hook_z           (1, 35, 12, 64)
blocks.0.hook_attn_out         (1, 35, 768)
blocks.0.hook_resid_mid        (1, 35, 768)
blocks.0.ln2.hook_scale        (1, 35, 1)
blocks.0.ln2.hook_normalized   (1, 35, 768)
blocks.0.mlp.hook_pre          (1, 35, 3072)
blocks.0.mlp.hook_post         (1, 35, 3072)
blocks.0.hook_mlp_out          (1, 35, 768)
blocks.0.hook_resid_post       (1, 35, 768)
ln_final.hook_scale            (1, 35, 1)
ln_final.hook_normalized       (1, 35, 768)
```
- Has 12 blocks.
## LayerNorm Impl
```Python
...: class LayerNorm(nn.Module):
...:     def __init__(self, cfg: Config):
...:         super().__init__()
...:         self.cfg = cfg
...:         self.w = nn.Parameter(t.ones(cfg.d_model))
...:         self.b = nn.Parameter(t.zeros(cfg.d_model))
...:
...:     def forward(self, residual: Float[Tensor, "batch posn d_model"]) -> Float[Tensor, "batch posn d_model"]:
...:         mean = residual.mean(dim=-1, keepdim=True)
...:         variance = residual.var(unbiased=False, dim=-1, keepdim=True)
...:         z = (residual - mean) / (np.sqrt(variance + self.cfg.layer_norm_eps))
...:         return z*self.w + self.b
```
## Glossary
- *Logit* - vector x that can be represented by its probability distribution via softmax function:  $x_i \to \frac{e^{x_i}}{\sum e^{x_j}}$
- *Autoregressive* - model only predicts future tokens on basis of past tokens.
- *Casual Attention* - information moves forward (model only knows past x-1 tokens for each x<sup>th</sup> token.) 
- *Parameters*: weights and biases learnt during training (these values don't change).
- *Activations*: functions of the input, temporarily calculated numbers during forward pass, and disappear after forward run is completed. Eg, attention scores and patterns.
### Language -> sub-units
- *Byte Pair Encoding*: start with the 256 ASCII characters as our tokens, and then find the most common pair of tokens, and merge that into a new token. Space is also a token.
