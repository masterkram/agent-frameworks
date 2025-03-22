---
title: Praison
description: PraisonAI is a production-ready Multi-AI Agents framework with self-reflection, designed to create AI Agents to automate and solve problems ranging from simple tasks to complex challenges. By integrating PraisonAI Agents, AutoGen, and CrewAI into a low-code solution, it streamlines the building and management of multi-agent LLM systems, emphasising simplicity, customisation, and effective human-agent collaboration.
link: https://docs.praison.ai/
tags:
  - agnostic
  - tools
  - collaboration
---

```sh
pip install praisonaiagents
```

```py
    data_agent = Agent(
        name="DataCollector",
        role="Search Specialist",
        goal="Perform internet searches to collect relevant information.",
        backstory="Expert in finding and organising internet data.",
        tools=[internet_search_tool], ## Add the tool to the agent i.e the function name
    )
```