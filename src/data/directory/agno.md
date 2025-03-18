---
link: 'https://github.com/agno-agi/agno'
image: ../images/agno.png
title: Agno
tags:
  - py
  - agnostic
  - tool
  - collaboration
description: >-
  a lightweight library for building Multimodal Agents with memory, knowledge
  and tools.
---

## Weather Agent Example.

```py
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.openweather import OpenWeatherTools

agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    tools=[OpenWeatherTools()],
    markdown=True
)
agent.print_response("What is the weather in Amsterdam?", stream=True)
```


## Included Tools

