---
title: Open AI SDK
description: New agent sdk from open ai including tools such as computer use, function calling, file search, web search
link: https://platform.openai.com/docs/guides/agents
---


## Overview
OpenAI Agent SDK is a lightweight yet powerful framework designed for building multi-agent workflows. The framework enables developers to create, coordinate, and monitor AI agents with a focus on simplicity and control. It's compatible with any model providers that support the OpenAI Chat Completions API format.

## Features
- **Core Agent Components**
  - Agent Configuration with Instructions
  - Tool Integration Support
  - Configurable Guardrails
  - Agent-to-Agent Handoffs
  
- **Tracing & Monitoring**
  - Built-in Run Tracking
  - Debugging Capabilities
  - Workflow Optimization Tools
  - Support for External Destinations
    - Logfire Integration
    - AgentOps Integration
    - Braintrust Integration

- **Safety & Control**
  - Input Validation
  - Output Validation
  - Configurable Safety Checks
  - Handoff Control Mechanisms

## Design Principles
1. **Lightweight Architecture**
   - Minimal dependencies
   - Simple API design
   - Focus on essential functionality

2. **Extensibility**
   - Custom span support
   - Pluggable tracing system
   - Flexible tool integration

3. **Developer Experience**
   - Easy setup process
   - Clear documentation
   - Comprehensive examples
   - Built-in debugging tools

4. **Interoperability**
   - Compatible with OpenAI Chat Completions API
   - Support for multiple model providers
   - Integration with existing tools and frameworks

## Built with OpenAI Agent SDK
Examples of applications and systems built using the framework:

1. **Multi-Agent Systems**
   - Coordinated agent workflows
   - Complex task delegation
   - Agent communication networks

2. **Monitored Applications**
   - Traced agent interactions
   - Debuggable workflows
   - Performance optimization systems

3. **Safety-First Applications**
   - Input/output validated systems
   - Controlled agent handoffs
   - Guardrail-protected workflows

## Authors
Core Contributors:
- @rm-openai
- @dmitry-openai
- @jhills20
- @stevenheidel
- @pierDipi
- @chuang-openai

[Source 1](https://github.com/openai/openai-agents-python)
[Source 2](https://github.com/openai/swarm)

Note: The OpenAI Agent SDK is actively maintained and developed as an open-source framework, encouraging community contributions while maintaining high standards for code quality and security.
