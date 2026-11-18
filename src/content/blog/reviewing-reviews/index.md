---
title: "Are AI Agents Sycophantic to each other?"
description: "-"
category: ai-safety
pubDate: 2026-11-18
tags: ["life", "multi agent", "swarm"]
---

Once again I am not writing much due to being preoccupied with ICLR Reviews. We did get the classic "My concerns are answered but I will keep my score of Weak Reject. Thanks" and also one review being the exact same but finishing with "Also the authors should improve their writing skills" while their 2 sentence review was drowning in typos and grammatical errors... So yeah that was not fun. But we anyways tread and keep moving.

I read a twitter thread just now about Herding in Agent Swarms. The authors test a multi-agentic searching pipeline by making agents hold clues to a puzzle-like question, that they can only answer by aggregating their information together. A Qwen model with all clues itself answered correctly 83% of the time, but with 1 clue each and allowed to communicate, its accuracy dropped to 29%! Which is just 4 point above the baseline score - 1 clue each but NOT allowed to message other ends - a mere 25% accuracy. It was shocking to learn that the models, when they were holding a clue that completely invalidated an option A from being correct, would agree with this option A being the answer only 6% of the time when answering by themselves, but after engaging in discussions with other agents (who would still claim A to be the correct answer), then also resort to compromising to answering option A about 39% of the time! Shocking how different model families all herded and fell to the sycophancy of their fellow agents, although with different propensities, but still did. All except Luna 6, whose herding accuracy they note to fall from 13% to 6% after discussing with other agents. 

While this is only an X article for now, I would love to extend this work for the future and possibly integrate this as an ablation for my multi-agent work, and see if I can steer along sycophancy vector to reduce this herding frequency.

This was the X thread: https://x.com/harishkrik/status/2122796234033299927.