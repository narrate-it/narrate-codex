#!/bin/sh
set -eu

target="${HOME}/plugins/narrate-codex"
mkdir -p "$target"
cp -R . "$target"/
