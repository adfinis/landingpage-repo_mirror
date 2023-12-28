.DEFAULT_GOAL := help


.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -k 1,1 | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: prod
prod: ## prod build
	@cd solid && node_modules/vite/bin/vite.js build && cp ./dist .. -r

.PHONY: dev
dev: ## run dev server
	@./dev-server.sh

.PHONY: lint
lint: ## lint
	@cd solid && yarn lint

.PHONY: lint-fix
lint-fix: ## lint and fix
	@cd solid && yarn lint:fix