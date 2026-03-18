# C Binary Example

Minimal C program packaged as a macOS `.app` bundle for testing `apple-codesign-action`.

## Build

```sh
make
```

This produces `out/CExample.app` — a universal (arm64 + x86_64) binary wrapped in a minimal app bundle.

## Structure

The `.app` bundle is assembled manually with just the required pieces:

- `Contents/MacOS/c-example` — the compiled universal binary
- `Contents/Info.plist` — bundle metadata
