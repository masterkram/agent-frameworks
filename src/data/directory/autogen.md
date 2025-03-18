---
title: Autogen
description: A framework from microsoft for building agents.
link: https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/tutorial/agents.html
image: ../images/microsoft.png
tags:
  - py
  - agnostic
---


```py
from autogen_core.tools import FunctionTool


# Define a tool using a Python function.
async def web_search_func(query: str) -> str:
    """Find information on the web"""
    return "AutoGen is a programming framework for building multi-agent applications."


# This step is automatically performed inside the AssistantAgent if the tool is a Python function.
web_search_function_tool = FunctionTool(web_search_func, description="Find information on the web")
# The schema is provided to the model during AssistantAgent's on_messages call.
web_search_function_tool.schema
```