---
title: LangGraph
description: LangGraph — used by Replit, Uber, LinkedIn, GitLab and more — is a low-level orchestration framework for building controllable agents.
link: https://github.com/langchain-ai/langgraph
github: https://github.com/langchain-ai/langgraph
image: ../images/langgraph.png
tags:
  - py
  - js
  - graph
  - visual
---

```py
# This code depends on pip install langchain[anthropic]
from langgraph.prebuilt import create_react_agent

def search(query: str):
    """Call to surf the web."""
    if "sf" in query.lower() or "san francisco" in query.lower():
        return "It's 60 degrees and foggy."
    return "It's 90 degrees and sunny."

agent = create_react_agent("anthropic:claude-3-7-sonnet-latest", tools=[search])
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```