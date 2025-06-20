---
title: Client AI
description: ClientAI is a Python package that provides a unified framework for building AI applications, from direct provider interactions to transparent LLM-powered agents.
link: https://igorbenav.github.io/clientai/
github: https://github.com/igorbenav/clientai
tags:
  - py
  - agnostic
---

```py
from clientai import client
from clientai.agent import create_agent, tool

# creating a tool that uses the docstring as description
@tool(name="multiply")
def multiply(x: int, y: int) -> int:
    """Multiply two numbers and return their product."""
    return x * y

calculator = create_agent(
    client=client("groq", api_key="your-groq-key"),
    role="calculator", 
    system_prompt="You are a helpful calculator assistant.",
    model="llama-3.2-3b-preview",
    tools=[add, multiply]
)

result = calculator.run("What is 5 plus 3, then multiplied by 2?")
print(result)
```