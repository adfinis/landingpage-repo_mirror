prod: clean
	BROCCOLI_ENV=production node_modules/broccoli-cli/bin/broccoli build dist

dev:
	BROCCOLI_ENV=development node_modules/broccoli-cli/bin/broccoli serve

clean:
	rm -rf dist tmp


deploy: prod
	rsync -avz dist/ pkg.adfinis.com:/var/www/
