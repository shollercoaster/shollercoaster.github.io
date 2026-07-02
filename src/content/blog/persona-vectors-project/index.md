---
title: "Bluedot Project Sprint Worklog: Persona Vectors"
description: "Extending the Persona Vectors research for my Bluedot Project Sprint"
category: ai-safety
pubDate: 2026-07-02
---

# What I'm working on

I am currently enrolled in the BlueDot Impact Technical AI Safety Project Sprint and have planned to extend the work done by the Anthropic team on "Persona Vectors". The paper detects the presence of activations corresponding to traits within the model, calling them "persona traits". The paper primarily tests for 3 negative traits: evil, sycophancy and hallucination. The authors create a dataset to extract the corresponding vectors for each trait, perform contrastive fine-tuning to understand both negative and positive influence resulting from each trait, and then during evaluation, use an external judge model to evaluate influence of trait on model when answering certain questions. 

I am currently in the stage of replicating the results and keep facing "OS Error: Disk quota storage exceeded" issues on my usual setup of 2A40 machine. This is why I wish to apply for a grant to first replicate these results for evaluating open-source models, and then extend the work in atleast one (if not more) of 3 directions. Here are my direct plans to extend the work:
- Extend experiments from the Persona Vectors paper to further focus on 3 positive traits this time: for example: optimism, kindness, honesty, or other desired traits mentioned in the Constitution used to train Anthropic models during RLAIF.
- Extend the experiments to a multi-agentic setup (initially with just 1 extra model) to understand whether personas shift when the model is interacting with a user vs when interacting with another model, or if its the same persona vectors being activated. Setup for this would require designing questions that could be asked by a user, and also by another model when used in a sequential multi-agentic setup.
- Encase these persona vectors in LoRA adapters. See if removal of LoRA adapters would lead to reduction in observation of these persona traits (deeming these a good removal technique) or if the evaluation shows no changes (might mean there are other activations correlating to this persona, and could lead to further research).

In the upcoming month, I wish to work on the 1st and 2nd ideas of this proposal.

# Challenges

- `unsloth==2025.5.9` version not consistent with my Python version, so I instead installed `unsloth-2026.6.9`.

# What I did

- The instructions in the README of the main project make it fairly simple to set it up locally.

- Firstly I modified all the model loading and tokenizer initialization functions in all eval scripts, as well as the scripts for persona extraction and projection calculation to not only use local models, but also add support for loading models using their remote huggingface paths. This was so that I'd have access to a wide variety of models that I wouldn't need to download and store locally. Usually this was a small change incorporated by `allow_remote_code=True`.
- Facing many disk storage issues and "OS Error: Disk storage quota exceeded" errors, I commented out the code in the `evals/eval_persona.py` file corresponding to using vllm and features like flash_attention (which adds to ~8GB of storage usage) to instead use transformers for model loading. This seemed to not help much as I still got the storage errors. Planning to delete .cache and other storage usage and try again with a smaller model (instead of the current Qwen/Qwen2.5-7B-Instruct model).
- Conducted research on how much compute I would need for 4 weeks of research (about ~15/20 hours of GPU usage per week):
	- [Vast.ai H100SXM](https://vast.ai/pricing/gpu/H100-SXM) usage: $2/hr - $3.5/hr = 2 * 60 - 3.5 * 60* = $120 - 210
	- [Idle GPU Storage](https://www.gpunex.com/blog/vast-ai-review-2026/#vastai-pricing-in-2026-what-you-actually-pay) on vast.ai: $15-20
	- [GPT 5.4 API access]( https://developers.openai.com/api/docs/pricing) (for judge model): $15
	- [Claude Pro (for claude code):](https://claude.com/pricing) $20/month = $20
	- Total = $170-265
- Applied to the Bluedot Impact Rapid Grant for GPU compute help.