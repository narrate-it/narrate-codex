# narrate-codex

Codex plugin for consequential narration.

## What it provides

- a `narrate` prompt for one concise update
- a `stream` prompt for long-running work
- a Codex plugin manifest and local MCP server wiring

## Install

Install the plugin into Codex, then use the MCP prompts when you want the
agent to narrate its work.

## Prompt behavior

- mention the current phase
- explain the next consequential step
- keep updates brief
- avoid secrets, raw diffs, and noisy low-level steps
