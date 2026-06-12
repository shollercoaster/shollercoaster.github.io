---
title: "I let Gemini be my Personal Assistant for a month"
description: "A deep dive on my productivity system trifecta, anecdotes and reflections from when I let Gemini be my Personal Assistant for a month."
category: productivity
pubDate: 2025-09-05
---

Back in 2020, when self-improvement blogs, articles, podcasts were all the rage, I read a quote that went like this: "You don't rise to the level of your goals, you fall to the level of your systems". James Clear, Carol Dweck, many affluential writers and thinkers stress on the importance of building consistent systems, habits, and a discipline that paves the way for your sky-high aspirations to touchdown on reality. Learning from these parables of wisdom, I set out to design the all-accomplishing system that would finally calm all chaos for me. As a chronic planner, I tend to fret more about my systems, than the execution of my ideas. The ideation, planning, structure of my goals weighed heavier on my mind than the goals themselves. To do lists, brain dumping, daily journals: you name it, I've tried it. While oftentimes these were breeding grounds for a serious diagnosis of procrastination, it was also necessary to recognize the simplicity that complex tasks revealed once they were appropriately broken down. Kind of like uncovering a scary tall person in a long trench coat only to find 3 little kids stacked on top of each other inside. 

![Complex Tasks broken down](/images/blog/complex-task-vs-broken-down.svg)

Anyways, I used to have a long enmity with finding a consistent productivity system that worked for me, and made things easier for me instead of burdening me with maintaining rituals I couldn't keep up past Day 4. The simple qualities I was looking for in my system could be described below:
- Must allow for extensive note-taking. Sure there will be many times when the minutes of a meeting or thoughts I had today will cease to be wildly important a few months, even weeks down the line. But that golden moment of pulling up old notes that accurately solves a current problem, its worth the constant monitoring. 
- Division into diverse categories and different modalities of data/note storage. I've stopped taking notes on pen paper a long time back, so whichever ideas strike my head on whichever topic needed to go in a digital repository of knowledge.
- I wanted a free solution. I cannot excuse the ease and quality of many subscription-based models, however I'm also a big stickler for minimalism and saving money. Especially for early-career problems that are generalizable enough. So no need of a paywall _yet_.
- Some sort of a daily note that allows me to track the day-to-day. Even better if its version-controlled.
- Simplicity. Choices are devilish.
- Monitoring and measuring habits. Bonus if there was a definitive system to identify subconscious traits that either need to be boosted or avoided to pursue my goals. 

I will admit that this really long list owes a few points to retrospection, and qualities I didn't know I was looking for but cannot imagine living without now. The system that I have identified for myself now comes from a long history of trial and error, some consistency, and numerous attempts of personalization to formalize rules for what does and doesn't work for me. This is why I will not just explain the system I've derived, alternates I tried that did or didn't work, but also how I stumbled onto the current choice, starting from what I was even looking for in the first place!

The All-Knowing Productivity System Deity I describe in this article is threefold: Note Taker, Time Tracker and AI Personal Assistant. I imagine the materialization of this system to look like this: 

![Productivity System Trifecta](/images/blog/productivity-system-trifecta.svg)
## Obsidian Note Taker
I have been maintaining a dense note-taking system in Obsidian for the last 2-3 years now. Its a deeply effective tool, improves memory, retention and provides a central data aggregation platform for all possible information I need to keep. Obsidian provides me an amazing interface, replete with great features like added integrations for Excalidraw, Github, Calendar, and the central Graph Node linkage feature makes it easier to visualize the connections between my notes. Adding daily notes also helps me track to-do lists, monitoring progress and a version-controlled repository of what work I did when.
Maybe in the future, I'll write a detailed blog on how I maintain my Obsidian.
## Toggl: Time Tracking
I have been using Toggl to track my time across different projects, domains, and engagements. This gives me a clear picture of where my time went throughout the week. A puzzle to be pondered on previously, now boiled down to numbers. Distractions are tracked and removed, routines are optimized and things I used to complain about taking too long earlier are now simply accepted. Because what can you do about the general passage of time, but live it. Additionally, I've also identified 4-5 important avenues, or projects, against which I track time, so I can reliably track progress and efforts contributed towards those avenues, directly aligning my thoughts to my actions instead of having to resort to guesswork.## AI Personal Assistant

This is a decently new addition. Around the end of July, I decided to toy around with the new AI model I liked at that time: Gemini 2.5 Pro. More than anything, the interface provided by aistudio.google.com is extremely convenient, allowing you to maintain separate chats, tweak the System prompts, quickly see the number of tokens consumed and tokens remaining in the current chat window, and play around with the temperature, URL linking and other settings. Mostly monitoring the remaining tokens (with a generous token limit of a million tokens) helps figure out when the model is hallucinating after maxxing out the context window. I had tried delegating planning, time management and general habit tracking to LLMs before, but found that the overly pandering, uselessly optimistic tone LLMs employ when asked to provide criticism was just not for me. The recent GPT updates made the free tier model performance sub-optimal as well. For these reasons, my being timely accustomed to this model made it the best choice to try it for my Personal Assistant.
My main qualm was a month of "vacation" after my internship ended, where I had to finish a research paper 20% away from good results, and 100% away from a great paper, while simultaneously employing myself in 2-3 new projects (new domains, lots of exploration), taking a bunch of online courses to polish a few skills, and also giving gentle focus to relaxing after a long time, working out regularly and retaining some creative regularity. Basically, a lot times infinity on my plate.

I started the history with a long prompt that went like this: 
```
[31 july 2025, 8 pm]
act as my personal assistant, aiming to manage my time and efforts between my different projects to increase productivity, help me achieve numerous goals, and elevate my mental health. there's a lot of things i want to do, learn, deadlines i want to reach while balancing my mental load and making sure i don't feel overwhelmed, get enough rest, but also perform strongly and achieve my goals. help me manage my time, my expectations, controlling my focus and building an effective daily schedule for me. i will list all the different goals i have, deadlines to achieve them, my personality, procrastination/deflection habits i have, and my general goal that you will help me achieve.
goals:
1. project_name (similarly mentioned all other projects)
	- deadline: 
	- estimated time:
	- deliverables:
	- work done till now:

now about me:
- strengths:
- weaknesses:
- current life:
now that you know all this about me, answer the following:
- what are personality traits about me that you can pick off the bat, both habits that help me and dont help me. 
- tell me how you predict this month will go, what will be the portions of the plan that i will be able to achieve, and which ones will be my downfall.
- see if you find any over-ambition, faulty planning in any of these. 
- finally give me a bunch of questions that will help me analyze what works for me when doing such heavy projects, and how i can manage my time best. 
- also give me your plan on how we can achieve all this. go in a lot of detail
- make sure to be very encouraging and motivating!! we BOTH have to achieve all these goals!
```
I will link the exact 300-word prompt I used in the footnotes, but shedding light on some important ideas I incorporated to instruct my PA:
- Began every prompt with a timestamp. Essential to denote project and productivity status in a time-tracked manner, especially when a few of my projects involved deadlines.
- Gave a detailed description of each project, deadlines and urgency associated with them, deliverables and current status. Could have done a bit better if I consulted some prompt engineering blogs but this is what I came up with for now.
- The 'About Me' section included an honest portrayal of my strengths around productivity (ability to pull off work during last minute deadlines, strong motivation, general inclination to pick up multiple projects and prioritizing them appropriately), and the weaknesses (master procrastinator, a deep cloud of overwhelm rain that engulfs me some random times, general inclination to pick up multiple projects and then cursing it). Current life defined me as a student or employee, the goals I had and hours I could give to complete them, what is important to me - achieving efficiency yet not at the cost of my mental health, and other enlightenments.
- Instead of ending the prompt with a baseline "create a 30-day plan", "create a daily routine", "segregate my projects and the percentage efforts/tasks I should accomplish in the next X days", I ran diagnostics first and wanted to know any handicaps or loopholes in my planning. If I had to change something, I would probably end this information-heavy prompt with just 1, or maybe 2 questions to avoid overwhelming the context and losing essential information, while focusing on 1 core question at a time. 

I did not need to rely on the PA to devise a to-do list for me, manage my mood, or give me time-bound routine that I needed to follow to a TEE. I didn't even need to always listen to the model. This exercise served me best when I used the PA not for advice, but for analysis - reporting my daily tasks/blockers/contributions for each project, linking personal mood, motivation, feelings with my efficiency (or lack thereof) in completing a task, time expected vs time actually invested in accomplishing a task, general progress on the various habits I set out, and a lot more. While I have tried to use habit trackers or simple journaling to analyze the same metrics before, what Gemini gave me was a 2-way understanding and feedback mechanism - kind of like having a little buddy look over your shoulder. I was determined on not letting this little buddy become my little court jester or Minister, flattering and coaxing me with sugar-coated words to avoid any real-time accountability. This is what an overly praising LLM feels like to me:

![LLM as a Court Jester](/images/blog/court-jester-llm.png)

Safe to say, this is any sane king's worst nightmare. So I wanted my supporting counsel to be critical, a little suspicious and deeply productive for me, maybe even always on the verge of staging a coup to overthrow me lest I fall behind. This is where Gemini proved trustworthy, by observing patterns, analyzing my routines, habits and tendencies to find points of failure and subsequently, optimization, while managing my expectations astutely! Examples of some predictable, and some unexpected situations where my PA led me towards the light:
- Noticing my mood-based productivity hikes and falls.
- Suggesting diet based on productivity needs (no sugar or fat-heavy food if I wanted to sleep early for an early morning tomorrow).
- The 1-month review: picking up on the accuracy of my self assessment.
- Taking mammoth tasks and helping me break them down into doable mini-blocks and providing an accurate ETA instead of the unrealistic timelines I had in my head for them. (What do you mean washing utensils only took 2 minutes and most of the resistance I felt was just mental blocks?) 
### Meta reasons for why this works
- Writing detailed prompt makes you do detailed analysis too
- Sometimes having an external rational observer enlightens you to possibilities, observations and insights about yourself that your very biased mind simply doesn't have the capability to give  
### Meta Meta reasons
- Reporting wins makes me happy because then that will be data for LLM (and me) to rely on when I'm feeling a downer and doubting my abilities
- Reporting losses helps me re-calibrate for next time, and also to pick me out of a slump when I need it
### Reasons why It doesn't work
- Sycophancy is real - though much less of a problem for some models and providers - and needs to be uprooted every few prompts
- LLM based insights have the potential to paint a clear disillusioned reality of your circumstances that leads you to strange places if you keep believing it without putting it on the defensive even once.

At the end of the day, I completed the month with much more productivity than I was able to log earlier. As of present day, I still use Obsidian and Toggl daily, but rely on the PA much less. Maybe only in strategic, decision-making scenarios where I want a third-person(a) perspective. The Trifecta continues to guide me on my quests as I increase the difficulty of the adventures I choose.