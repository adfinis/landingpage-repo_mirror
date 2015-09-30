prod: clean
	BROCCOLI_ENV=production broccoli build dist

dev:
	BROCCOLI_ENV=development broccoli serve

clean:
	rm -rf dist tmp


deploy: prod
	rsync -avz dist/ pkg.adfinis-sygroup.ch:/var/www/mirror/ 
