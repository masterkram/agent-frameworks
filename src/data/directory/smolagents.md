---
title: Smolagents
description: Creates agents that run python code to acomplish tasks
tags:
  - code
  - agnostic
  - py
  - tool
  - collaboration
link: https://github.com/huggingface/smolagents
image: ../images/smolagents.png
featured: true
---


## Weather Agent Example
```py
from smolagents import tool

@tool
def sql_engine(query: str) -> str:
    output = ""
    with engine.connect() as con:
        rows = con.execute(text(query))
        for row in rows:
            output += "\n" + str(row)
    return output
```
