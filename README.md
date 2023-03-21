# Setup - Bet Secret API

## Descrição

Task manager API with [Nest](https://github.com/nestjs/nest) framework repository.

## Pré requisitos

```bash
* docker
* node versão 16.14.0 ou superior
```

## Comandos iniciais

```bash
# normal
$ npm install
$ docker volume create --name=task_manager_mongodb_data
$ docker-compose up -d
```

Outra opção

```bash
# makefile (mac/linux)
$ make install
```

## Rodando a API

```bash
$ npm start
```

## License

Nest is [MIT licensed](LICENSE).
