VERSION := $(shell node scripts/version)

all: packages lint coverage dist
	cp -a packages/mrblx/build/*.php dist/
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
	cp -a *.php includes vendor-prefixed build/mindspun-responsive-blocks/
	cp -a packages/mrblx/build/* build/mindspun-responsive-blocks/dist/
	cp -a packages/block-library/build/* build/mindspun-responsive-blocks/dist/
	cp -a readme.txt README.md build/mindspun-responsive-blocks
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

