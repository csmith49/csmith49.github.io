.phony: all
all: build

build:
	npx @11ty/eleventy --output=docs

local:
	npx @11ty/eleventy --serve
