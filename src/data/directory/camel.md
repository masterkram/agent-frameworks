---
title: Camel AI
description: Agents in CAMEL are autonomous entities capable of performing specific tasks through interaction with language models and other components. Each agent is designed with a particular role and capability, allowing them to work independently or collaboratively to achieve complex goals.
link: https://www.camel-ai.org/
github: https://github.com/camel-ai/camel
tags:
 - py
 - agnostic
---

## Installation
```sh
pip install camel-ai
```

## Example
```py
from camel.agents import ChatAgent
from camel.toolkits import FunctionTool

# Define a tool
def calculator(a: int, b: int) -> int:
    return a + b

# Create agent with tool
agent = ChatAgent(tools=[calculator])

# The agent can now use the calculator tool in conversations
response = agent.step("What is 5 + 3?")
```