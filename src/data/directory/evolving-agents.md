---
title: Evolving Agents
description: A toolkit for agent autonomy, evolution, and governance. Create agents that can understand requirements, evolve through experience.
link: https://github.com/matiasmolinas/evolving-agents
github: https://github.com/matiasmolinas/evolving-agents
tags:
  - py
---

```py
# Initialize the SystemAgent
llm_service = LLMService(provider="openai", model="gpt-4o")
library = SmartLibrary("library.json")
agent_bus = SimpleAgentBus()

# Initialize provider registry with both BeeAI and OpenAI providers
provider_registry = ProviderRegistry()
provider_registry.register_provider(BeeAIProvider(llm_service))
provider_registry.register_provider(OpenAIAgentsProvider(llm_service))

# Create the SystemAgent
system_agent = await SystemAgentFactory.create_agent(
    llm_service=llm_service,
    smart_library=library,
    agent_bus=agent_bus,
    memory_type="token"
)
```