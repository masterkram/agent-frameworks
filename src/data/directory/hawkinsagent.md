---
title: Hawkins Agent
description: A Python SDK for building AI agents with minimal code using This framework integrates key tools and services for building functional AI agents.
link: https://github.com/harishsg993010/HawkinsAgent
github: https://github.com/harishsg993010/HawkinsAgent
tags:
  - py
  - agnostic
  - tool
---

```py
from hawkins_agent import AgentBuilder
from hawkins_agent.tools import WebSearchTool
from hawkins_agent.mock import KnowledgeBase

 search_tool = WebSearchTool(api_key=os.environ.get("TAVILY_API_KEY"))

async def main():
    # Create a knowledge base
    kb = KnowledgeBase()
    
    # Create agent with web search capabilities
    agent = (AgentBuilder("researcher")
            .with_model("gpt-4o")
            .with_knowledge_base(kb)
            .with_tool(search_tool)
            .build())
    
    # Process a query
    response = await agent.process("What are the latest developments in AI?")
    print(response.message)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```