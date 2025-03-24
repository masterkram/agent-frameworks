---
link: 'https://arkalos.com/'
github: https://github.com/arkaloscom/arkalos/
title: Arkalos
tags:
  - py
  - agnostic
  - tool
  - collaboration
  - visual
description: >-
  Arkalos is an easy-to-use framework for data analysis, data science, building data apps, warehouses, AI agents, robots, ML, training LLMs with elegant syntax. It just works.
---


```py
from arkalos.ai import AIAgent
from app.ai.tasks.calc_action import CalcAction

class MyAgent(AIAgent):

    NAME = 'MyAgent'

    DESCRIPTION = 'A calculator agent.'

    GREETING = 'Hi, I am a calculator. What do you want to calculate?'

    ACTIONS = [
        CalcAction
    ]

    def processMessage(self, message):
        output = self.runAction(CalcAction, message)
        return output
```