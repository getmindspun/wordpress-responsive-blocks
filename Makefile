VERSION := $(shell node scripts/version)

all: lint coverage
	cp -a packages/wpx/build/*.php dist/
.PHONY: all

wpx:
	mkdir -p dist
	npm run build -w packages/wpx
.PHONY: wpx

block-library:
	mkdir -p dist
	npm run build -w packages/block-library
.PHONY: wpx

packages: wpx block-library
.PHONY: packages

lint:
	php vendor/bin/phpcbf || [ $$? -eq 1 ]
	php vendor/bin/phpcs
.PHONY: lint

test:
	./vendor/bin/phpunit --no-coverage --stderr --testdox --stop-on-failure
.PHONY: test

coverage:
	XDEBUG_MODE=coverage ./vendor/bin/phpunit --coverage-text --testdox --stop-on-failure
.PHONY: coverage

bundle-only:
	rm -rf build/*.zip build/mindspun-responsive-blocks && mkdir -p build/mindspun-responsive-blocks/dist
	cp -a *.php includes vendor-prefixed build/mindspun-responsive-blocks/
	cp -a packages/wpx/build/* build/mindspun-responsive-blocks/dist/
	cp -a packages/block-library/build/* build/mindspun-responsive-blocks/dist/
	cd build && zip -r mindspun-responsive-blocks.$(VERSION).zip mindspun-responsive-blocks
.PHONY: bundle-only

bundle: packages all bundle-only
.PHONY: bundle

version:
	@echo $(VERSION)
.PHONY: version

