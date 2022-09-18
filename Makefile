dev-up:
	docker-compose -f docker-compose.local.yaml up --build -d
dev-down:
	docker-compose -f docker-compose.local.yaml down --volumes
prod-up:
	docker-compose up --build -d
prod-down:
	docker-compose down
