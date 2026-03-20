APP_NAME := DMGExample
BUNDLE := out/$(APP_NAME).app
DMG := out/$(APP_NAME).dmg

.PHONY: build clean

build: $(DMG)

$(BUNDLE): main.c Info.plist
	mkdir -p $(BUNDLE)/Contents/MacOS
	clang -target arm64-apple-macos13 -target x86_64-apple-macos13 -arch arm64 -arch x86_64 -o $(BUNDLE)/Contents/MacOS/dmg-example main.c
	cp Info.plist $(BUNDLE)/Contents/Info.plist

$(DMG): $(BUNDLE)
	mkdir -p out/dmg-staging
	cp -R $(BUNDLE) out/dmg-staging/
	ln -sf /Applications out/dmg-staging/Applications
	hdiutil create -volname "$(APP_NAME)" -srcfolder out/dmg-staging -ov -format UDZO $(DMG)
	rm -rf out/dmg-staging

clean:
	rm -rf out
