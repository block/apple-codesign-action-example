# DMG Example

Minimal C program packaged as a macOS `.app` inside a `.dmg` for testing `apple-codesign-action`'s DMG support.

## Build

```sh
make
```

This produces `out/DMGExample.dmg` — a DMG containing a universal (arm64 + x86_64) `.app` bundle with an Applications symlink.

## How it works

The action receives the `.dmg`, extracts the `.app` inside, signs and notarizes it, then rebuilds the DMG with the signed `.app` swapped in. Both the signed DMG and the signed `.app` (as a zip) are available as outputs.
