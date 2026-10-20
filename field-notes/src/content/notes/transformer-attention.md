---
title: Attention in transformers
description: Scaled dot-product attention, step by step.
date: 2026-10-14
degree: ai
course: Deep Learning
tags: [attention, neural networks]
related: [notes/selective-attention]
---

> ✏️ *Example note — replace it with your own, or delete it.*

Each token produces a **query** $Q$, a **key** $K$ and a **value** $V$. Attention weighs every value by how well its key matches the query:

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

Dividing by $\sqrt{d_k}$ keeps the dot products from growing with dimension, which would push the softmax into regions with tiny gradients.

```python
import numpy as np

def attention(Q, K, V):
    scores = Q @ K.T / np.sqrt(K.shape[-1])
    weights = np.exp(scores - scores.max(-1, keepdims=True))
    weights /= weights.sum(-1, keepdims=True)
    return weights @ V
```
