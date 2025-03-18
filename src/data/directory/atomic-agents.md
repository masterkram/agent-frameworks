---
title: Atomic Agents
description: The Atomic Agents framework is designed around the concept of atomicity to be an extremely lightweight and modular framework for building Agentic AI pipelines and applications
link: https://github.com/BrainBlend-AI/atomic-agents
image: ../images/atomic.png
tags:
  - py
  - agnostic
---

## By Example


```py
# Define a custom output schema
class CustomOutputSchema(BaseIOSchema):
    """
    docstring for the custom output schema
    """
    chat_message: str = Field(..., description="The chat message from the agent.")
    suggested_questions: List[str] = Field(..., description="Suggested follow-up questions.")

# Set up the system prompt
system_prompt_generator = SystemPromptGenerator(
    background=["This assistant is knowledgeable, helpful, and suggests follow-up questions."],
    steps=[
        "Analyze the user's input to understand the context and intent.",
        "Formulate a relevant and informative response.",
        "Generate 3 suggested follow-up questions for the user."
    ],
    output_instructions=[
        "Provide clear and concise information in response to user queries.",
        "Conclude each response with 3 relevant suggested questions for the user."
    ]
)

# Initialize the agent
agent = BaseAgent(
    config=BaseAgentConfig(
        client=your_openai_client,  # Replace with your actual client
        model="gpt-4o-mini",
        system_prompt_generator=system_prompt_generator,
        memory=AgentMemory(),
        output_schema=CustomOutputSchema
    )
)

# Use the agent
response = agent.run(user_input)
print(f"Agent: {response.chat_message}")
print("Suggested questions:")
for question in response.suggested_questions:
    print(f"- {question}")
```