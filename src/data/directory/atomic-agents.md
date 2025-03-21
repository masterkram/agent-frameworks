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
import os
import requests
from pydantic import BaseModel, Field
from typing import Optional
import instructor
from openai import OpenAI
from atomic_agents.agents.base_agent import BaseAgent, BaseAgentConfig
from atomic_agents.lib.components.agent_memory import AgentMemory

# Define input schema
class WeatherInputSchema(BaseModel):
    query: str = Field(..., description="User's weather-related query")

# Define output schema
class WeatherOutputSchema(BaseModel):
    response: str = Field(..., description="The agent's response with weather information")
    temperature: Optional[float] = Field(None, description="Current temperature in Celsius")
    condition: Optional[str] = Field(None, description="Current weather condition")

# Function to fetch weather data from OpenWeatherMap
def get_amsterdam_weather(api_key: str) -> dict:
    url = f"http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&appid={api_key}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return {
            "temperature": data["main"]["temp"],
            "condition": data["weather"][0]["description"]
        }
    else:
        raise Exception("Failed to fetch weather data")

# Set up the agent
def create_weather_agent():
    # Initialize OpenAI client with Instructor
    client = instructor.from_openai(OpenAI(api_key=os.getenv("OPENAI_API_KEY")))

    # Initialize memory
    memory = AgentMemory()
    memory.add_assistant_message("I'm here to help you with the weather in Amsterdam!")

    # System prompt for the agent
    system_prompt = (
        "You are a helpful weather assistant focused on providing weather information for Amsterdam. "
        "Use the provided weather data to respond to the user's query. Keep responses concise and friendly."
    )

    # Agent configuration
    config = BaseAgentConfig(
        client=client,
        model="gpt-4o-mini",  # Use a lightweight model
        memory=memory,
        system_prompt=system_prompt,
        input_schema=WeatherInputSchema,
        output_schema=WeatherOutputSchema
    )

    # Create and return the agent
    return BaseAgent(config)

# Main execution
if __name__ == "__main__":
    # Load environment variables (ensure OPENAI_API_KEY and OPENWEATHERMAP_API_KEY are set)
    openweather_api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    if not openweather_api_key:
        raise ValueError("Please set OPENWEATHERMAP_API_KEY in your environment variables")

    # Create the agent
    agent = create_weather_agent()

    # Fetch weather data
    try:
        weather_data = get_amsterdam_weather(openweather_api_key)
    except Exception as e:
        weather_data = {"temperature": None, "condition": "unknown"}
        print(f"Error fetching weather: {e}")

    # Simulate user input
    user_input = WeatherInputSchema(query="What's the weather like in Amsterdam right now?")

    # Add weather context to memory
    agent.config.memory.add_assistant_message(
        f"Current weather data: Temperature {weather_data['temperature']}°C, Condition: {weather_data['condition']}"
    )

    # Run the agent
    response = agent.run(user_input)

    # Print the response
    print(f"User: {user_input.query}")
    print(f"Agent: {response.response}")
    if response.temperature is not None:
        print(f"Temperature: {response.temperature}°C")
    if response.condition:
        print(f"Condition: {response.condition}")
```