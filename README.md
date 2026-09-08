# narrate-codex

Codex plugin for consequential narration.

## Install

Run:

```sh
./install.sh
```

That adds the marketplace and installs the plugin.

## Prompt behavior

`narrate`:

- mention the current phase
- explain why the phase matters
- state the next consequential step

`stream`:

- keep updates brief
- report phase changes, retries, blockers, and completions
- avoid secrets, raw diffs, and noisy implementation detail
