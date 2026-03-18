# apple-codesign-action-example

End-to-end examples for [`block/apple-codesign-action`](https://github.com/block/apple-codesign-action), used to validate the action against real build artifacts in CI.

> [!NOTE]
> This repository is intended for use by [Block](https://github.com/block) repositories only. The codesigning service requires internal AWS credentials and infrastructure.

## Examples

| Example | Description |
|---------|-------------|
| [Electron](./examples/electron/) | Minimal Electron app built with Electron Forge |
| [C Binary](./examples/c-binary/) | Minimal C program in a hand-assembled `.app` bundle |
| [Xcode](./examples/xcode/) | Minimal SwiftUI app built with `xcodebuild` |

Each example produces an unsigned `.app` bundle that is then signed and notarized via `block/apple-codesign-action` in CI.

## CI

The [CI workflow](./.github/workflows/ci.yml) runs on pushes to `main` and on pull requests. Fork PRs are ignored since they cannot access the required secrets.

Each example is built and signed as a separate job, so failures are isolated and easy to triage.

## Project Resources

| Resource | Description |
|---|---|
| [CODEOWNERS](./CODEOWNERS) | Outlines the project lead(s) |
| [GOVERNANCE.md](./GOVERNANCE.md) | Project governance |
| [LICENSE](./LICENSE) | Apache License, Version 2.0 |
