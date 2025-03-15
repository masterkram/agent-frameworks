---
title: Smolagents
description: Creates agents that run python code to acomplish tasks
tags:
  - code
  - agnostic
link: https://github.com/huggingface/smolagents
image: ../images/smolagents.png
featured: true
---

## Overview
Smolagents is a lightweight, open-source AI agent framework developed by Hugging Face that enables developers to build and deploy robust AI agents with minimal code. The framework focuses on simplicity and efficiency, allowing Large Language Models (LLMs) to interact seamlessly with the real world through a code-first approach.

## Features
- **Minimalist Architecture**
  - Core logic in ~1,000 lines of code
  - Clean, minimal abstractions
  - Code-first approach for better efficiency

- **Agent Types**
  - CodeAgent: First-class support for agents that write actions in code
  - ToolCallingAgent: Standard agent that writes actions as JSON/text blobs

- **Model Support**
  - Hugging Face Hub models via transformers
  - Hugging Face Inference API integration
  - OpenAI models support
  - Anthropic models support
  - Multiple LLM providers via LiteLLM integration

- **Security & Integration**
  - Secure sandboxed code execution via E2B
  - Deep integration with Hugging Face Hub
  - Easy tool sharing and import capabilities

## Design Principles
1. **Simplicity First**
   - Minimal abstractions over raw code
   - Straightforward API design
   - Focus on essential functionality

2. **Flexibility**
   - Support for any LLM provider
   - Customizable tool creation
   - Adaptable workflow patterns

3. **Security**
   - Sandboxed execution environments
   - Safe code generation practices
   - Protected runtime environment

## Built with Smolagents
1. **Travel Planning Systems**
   - Custom travel itinerary generation
   - Integration with mapping services
   - Multi-step trip optimization

2. **Agentic Workflows**
   - Text-to-SQL systems
   - RAG (Retrieval-Augmented Generation) implementations
   - Multi-agent orchestration solutions

## Authors
- Hugging Face Team
  - Aymeric Roucher
  - Merve Noyan
  - Thomas Wolf

[Source 1](https://huggingface.co/blog/smolagents)
[Source 2](https://aiagentsdirectory.com/agent/smolagents-ai-agent)
[Source 3](https://medium.com/@mauryaanoop3/introduction-to-smolagents-a-hugging-face-agentic-framework-190169b424f4)

Note: Smolagents is the successor to transformers.agents and will eventually replace it as transformers.agents becomes deprecated.
