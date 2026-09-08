# narrate-codex

Codex plugin for consequential narration.

This plugin gives Codex two prompts:

- `narrate` for a single status update
- `stream` for ongoing narration during long-running work

## Install

Run `./install.sh` from this repo.

The script copies the plugin into `~/plugins/narrate-codex`, which is the
location Codex expects for local plugins in this setup.

## Prompt behavior

`narrate` should:

- mention the current phase
- explain why the phase matters
- state the next consequential step

`stream` should:

- keep updates brief
- report phase changes, retries, blockers, and completions
- avoid secrets, raw diffs, and noisy implementation detail

## Design goal

The plugin is meant to make narration available on demand without turning the
agent into a constant chatterbox. Use it when the work has consequence and the
user benefits from being kept in the loop.
