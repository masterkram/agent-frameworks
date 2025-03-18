---
title: Cloudflare Agents
description: Build and deploy AI-powered Agents on Cloudflare that can autonomously perform tasks, communicate with clients in real time, persist state, execute long-running and repeat tasks on a schedule, send emails,
link: https://developers.cloudflare.com/agents/
image: ../images/cloudflare.png
tags:
  - js
  - agnostic
---


```js
import { Agent, AgentNamespace } from "agents";

export class MyAgent extends Agent {
  // Define methods on the Agent:
  // https://developers.cloudflare.com/agents/api-reference/agents-api/
  //
  // Every Agent has built in state via this.setState and this.sql
  // Built-in scheduling via this.schedule
  // Agents support WebSockets, HTTP requests, state synchronization and
  // can run for seconds, minutes or hours: as long as the tasks need.
}
```
