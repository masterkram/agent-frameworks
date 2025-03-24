---
title: Phi Data
description: Phidata is a framework for building multi-modal agents and workflows. memory and tools supported.
link: https://docs.phidata.com/introduction
github: https://github.com/agno-agi/phidata
image: ../images/phidata.png
tags:
  - py
  - memory
  - tool
---

##

```py
from textwrap import dedent
from datetime import datetime

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.exa import ExaTools

agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    tools=[ExaTools(start_published_date=datetime.now().strftime("%Y-%m-%d"), type="keyword")],
    description="You are an advanced AI researcher writing a report on a topic.",
    instructions=[
        "For the provided topic, run 3 different searches.",
        "Read the results carefully and prepare a NYT worthy report.",
        "Focus on facts and make sure to provide references.",
    ],
    expected_output=dedent("""\
    An engaging, informative, and well-structured report in markdown format:

    ## Engaging Report Title

    ### Overview
    {give a brief introduction of the report and why the user should read this report}
    {make this section engaging and create a hook for the reader}

    ### Section 1
    {break the report into sections}
    {provide details/facts/processes in this section}

    ... more sections as necessary...

    ### Takeaways
    {provide key takeaways from the article}

    ### References
    - [Reference 1](link)
    - [Reference 2](link)
    - [Reference 3](link)

    - published on {date} in dd/mm/yyyy
    """),
    markdown=True,
    show_tool_calls=True,
    add_datetime_to_instructions=True,
    save_response_to_file="tmp/{message}.md",
)
agent.print_response("Simulation theory", stream=True)
```