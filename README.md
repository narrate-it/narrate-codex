# Narrate for Codex

A Codex plugin for concise progress narration. Use it to explain the current
phase, why it matters, and what consequential step comes next. Streaming
updates stay brief and surface phase changes, retries, blockers, and completion.

## Install

From this repository, run:

```sh
./install.sh
```

The installer adds the Narrate marketplace and installs the plugin.

## Prompts

- `narrate`: summarize the current phase and next step.
- `stream`: report meaningful progress changes without repeating every tool
  call or exposing secrets and raw diffs.

See the [Narrate CLI](https://github.com/narrate-it/narrate) for audio output,
installation options, and configuration.
