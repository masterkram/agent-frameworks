---
title: Vercel Agents
description: Building agents with Vercel AI SDK
link: https://sdk.vercel.ai/docs/foundations/agents
github: https://github.com/vercel/ai
tags:
  - js
  - collaboration
  - agnostic
  - tool
---

The way to build agents with Vercel AI SDK is to combine the use of `streamText` and `generateText`.
with tools that can be passed to these functions.

The vercel ai sdk does not provide tools itself, but in the documentation it lists options of compatible tools.


```ts
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const result = await generateText({
  model: openai("gpt-4o"),
  prompt: "What is the capital of France?",
  tools: [
    {
      type: "function",
      function: {
        name: "get_capital",
        description: "Get the capital of a country",
        parameters: z.object({
          country: z.string(),
        }),
      },
    },
  ],
});

console.log(result.text);
```

- [Agentic](https://github.com/transitive-bullshit/agentic)
- [Browserbase](https://docs.browserbase.com/integrations/vercel-ai/introduction)
- [Browserless](https://docs.browserless.io/ai-integrations/vercel-ai-sdk)
- [](https://smithery.ai/docs/use/connect)