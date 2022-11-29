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
- Keycloak API na porta `3000`
- Turmas API porta `8085`

Para encerrar a execução dos serviços, utilize o comando a seguir:

```sh
docker-compose down
```

## Documentação do Keycloak API
Link para documentação das rotas com Swagger: [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

## Documentação da Turmas API
Link para documentação das rotas com Swagger: [http://localhost:8085/api-docs/](http://localhost:3000/api-docs/)
