all: lint coverage

wpx:
	mkdir -p dist
	cd packages/wpx && npm run build
.PHONY: wpx

packages: wpx
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
	cp -a *.php includes build/mindspun-responsive-blocks/
	cp -a packages/wpx/build/* build/mindspun-responsive-blocks/dist/
	cd build && zip -r mindspun-responsive-blocks.zip mindspun-responsive-blocks
.PHONY: bundle-only

bundle: packages all bundle-only
.PHONY: bundle

