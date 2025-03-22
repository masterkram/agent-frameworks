---
title: LlamaIndex Agents
description: LlamaIndex is a simple, flexible framework for building agentic generative AI applications that allow large language models to work with your data in any format.
image: ../images/llama.png
link: https://www.llamaindex.ai/framework
tags:
  - py
  - js
---

## Installation
```sh
npm i llamaindex
```

## Example

```ts
import { agent, multiAgent } from "llamaindex";
import { openai } from "@llamaindex/openai";

const analyseAgent = agent({
  name: "AnalyseAgent",
  llm: openai({ model: "gpt-4o" }),
  tools: [analyseTools],
});
const reporterAgent = agent({
  name: "ReporterAgent",
  llm: openai({ model: "gpt-4o" }),
  tools: [reporterTools],
  canHandoffTo: [analyseAgent],
});

const agents = multiAgent({
  agents: [analyseAgent, reporterAgent],
  rootAgent: reporterAgent,
});

const response = await agents.run(`Analyse the given data:
${data}`);
```