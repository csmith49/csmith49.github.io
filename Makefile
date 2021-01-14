.phony: all
all: build

build:
	eleventy --output=docs

local:
	eleventy --output=docs --serve
