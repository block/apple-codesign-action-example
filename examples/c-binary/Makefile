APP_NAME := CExample
BUNDLE := out/$(APP_NAME).app

.PHONY: build clean

build: $(BUNDLE)

$(BUNDLE): main.c Info.plist
	mkdir -p $(BUNDLE)/Contents/MacOS
	clang -target arm64-apple-macos13 -target x86_64-apple-macos13 -arch arm64 -arch x86_64 -o $(BUNDLE)/Contents/MacOS/c-example main.c
	cp Info.plist $(BUNDLE)/Contents/Info.plist

clean:
	rm -rf out
