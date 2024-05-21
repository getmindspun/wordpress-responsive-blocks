VERSION := $(shell node scripts/version)

all: clean-dist packages lint coverage dist
.PHONY: all

mrblx:
	mkdir -p dist
	npm run build -w packages/mrblx
.PHONY: mrblx

block-library:
	mkdir -p dist
	npm run build -w packages/block-library
.PHONY: mrblx

packages: mrblx block-library
.PHONY: packages

clean-dist:
	rm -rf dist/*
.PHONY: clean-dist

lint:
	npm run lint
	php vendor/bin/phpcbf || [ $$? -eq 1 ]
	php vendor/bin/phpcs
.PHONY: lint

test:
	./vendor/bin/phpunit --no-coverage --stderr --testdox --stop-on-failure
.PHONY: test

coverage:
	XDEBUG_MODE=coverage ./vendor/bin/phpunit --coverage-text --testdox --stop-on-failure
.PHONY: coverage

dist:
	rm -rf build/mindspun-responsive-blocks && mkdir -p build/mindspun-responsive-blocks/dist
	cp -a dist/* build/mindspun-responsive-blocks/dist
	cp -a *.php includes vendor-prefixed build/mindspun-responsive-blocks/
	cp -a readme.txt build/mindspun-responsive-blocks
.PHONY: dist

bundle-only:
	rm -rf build/mindspun-responsive-blocks.$(VERSION).zip
	cd build && zip -r mindspun-responsive-blocks.$(VERSION).zip mindspun-responsive-blocks
.PHONY: bundle-only

bundle: all bundle-only
.PHONY: bundle

release: bundle
.PHONY: release

version:
	@echo $(VERSION)
.PHONY: version

clean:
	rm -rf build dist
.PHONY: clean

svn: bundle
	cp -a build/mindspun-responsive-blocks/* wordpress-org/trunk/
.PHONY: svn

svn-tag:
	cp -a wordpress-org/trunk/ wordpress-org/tags/$(VERSION)
	cd wordpress-org/tags/ && svn add $(VERSION)
.PHONY: svn-tag
