---
title: Control Flow
description: ControlFlow provides a structured, developer-focused framework for defining workflows and delegating work to LLMs, without sacrificing control or transparency
link: https://controlflow.ai/welcome
tags:
  - collaboration
  - py
  - tools
---

```sh
pip install controlflow
```

```py
import controlflow as cf

agent = cf.Agent(
    name="Data Analyst",
    description="An AI agent specialized in data analysis",
    instructions=(
        "Perform data analysis tasks efficiently and accurately. "
        "Browse the web for data and use Python to analyze it."
    ),
    tools=[cf.tools.web.get_url, cf.tools.code.python],
    model="openai/gpt-4o",
    interactive=True,
)
```