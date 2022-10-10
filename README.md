# Construção de Software - Grupo 5 - 2022

## Requisitos:
- Docker
- Node 16+

## Como Executar:

Clone o repositório, abra um terminal no diretório raiz do projeto e execute o comando a seguir para instalar as dependências:

```sh
npm install
```

Após a instalação das dependências, execute o comando a seguir para subir todos os serviços:

```sh
docker compose up
```

Esse comando irá subir dois containers:
- Keycloak na porta `8080`
- API Backend porta `3000`

Para encerrar a execução dos serviços, utilize o comando a seguir:

```sh
docker-compose down
```

## Documentação da API
Link para documentação das rotas com Swagger: [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)
