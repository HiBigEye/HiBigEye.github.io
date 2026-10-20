---
title: Q-learning
description: Learning the value of actions from trial and error.
date: 2026-10-10
degree: ai
course: Machine Learning
tags: [learning, reinforcement]
related: [notes/operant-conditioning]
---

> ✏️ *Example note — replace it with your own, or delete it.*

An agent estimates $Q(s, a)$, the expected future reward of taking action $a$ in state $s$, and updates it after each step:

$$
Q(s,a) \leftarrow Q(s,a) + \alpha \big[ r + \gamma \max_{a'} Q(s', a') - Q(s,a) \big]
$$

The term in brackets is the **prediction error** — the gap between what was expected and what happened.
