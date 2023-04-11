install:
	npm
	docker volume create --name=task_manager_mongodb_data
	docker-compose up -d

up:
	docker-compose up -d

logs:
	docker-compose logs -f