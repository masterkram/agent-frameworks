---
link: https://www.archgw.com/
github: https://github.com/katanemo/archgw
title: archgw
tags:
  - agnostic
description: The intelligent (edge and LLM) proxy server for agentic applications.
---

## Install

```sh
pip install archgw==0.2.4
```

## Weather

```py
import requests

def get_weather(location: str, unit: str = "fahrenheit"):
    if unit not in ["celsius", "fahrenheit"]:
        raise ValueError("Invalid unit. Choose either 'celsius' or 'fahrenheit'.")

    api_server = "https://api.yourweatherapp.com"
    endpoint = f"{api_server}/weather"

    params = {
        "location": location,
        "unit": unit
    }

    response = requests.get(endpoint, params=params)
    return response.json()

# Example usage
weather_info = get_weather("Seattle, WA", "celsius")
print(weather_info)
```

```
prompt_targets:
  - name: get_weather
    description: Get the current weather for a location
    parameters:
      - name: location
        description: The city and state, e.g. San Francisco, New York
        type: str
        required: true
      - name: unit
        description: The unit of temperature to return
        type: str
        enum: ["celsius", "fahrenheit"]
    endpoint:
      name: api_server
      path: /weather
```