# Electron Example

Minimal Electron app that produces an unsigned `.app` bundle via [Electron Forge](https://www.electronforge.io/).

## Local development

```sh
npm install
npm start
```

## Build

```sh
npm run make
```

This produces `out/ElectronExample-darwin-*/ElectronExample.app`.

## Entitlements

The [`entitlements.plist`](./entitlements.plist) includes the standard entitlements required for Electron apps to run on macOS after signing and notarization:

- `com.apple.security.cs.allow-jit` — V8 JIT
- `com.apple.security.cs.allow-unsigned-executable-memory` — V8 requirement
- `com.apple.security.cs.allow-dyld-environment-variables` — Electron runtime
- `com.apple.security.cs.disable-library-validation` — load Electron framework bundles
