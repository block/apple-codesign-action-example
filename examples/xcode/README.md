# Xcode Example

Minimal SwiftUI macOS app built with `xcodebuild` for testing `apple-codesign-action`.

## Build

```sh
xcodebuild -project SwiftUIExample.xcodeproj \
    -scheme SwiftUIExample \
    -configuration Release \
    -derivedDataPath out \
    -arch arm64 -arch x86_64 \
    ONLY_ACTIVE_ARCH=NO
```

This produces `out/Build/Products/Release/SwiftUIExample.app` — a universal (arm64 + x86_64) app bundle.

## Notes

- `CODE_SIGNING_ALLOWED = NO` is set in the project so Xcode doesn't attempt local signing. The action handles signing separately.
- `GENERATE_INFOPLIST_FILE = YES` lets Xcode generate the Info.plist from build settings, keeping the project minimal.
