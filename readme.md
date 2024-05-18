
# E-Commerce API

## Descrição

E-Commerce API é um projeto desenvolvido com FastAPI e SQLAlchemy para gerenciar um sistema de e-commerce. Ele oferece recursos para gerenciar usuários, produtos, pedidos e muito mais. Este projeto utiliza Docker para facilitar o desenvolvimento e a implantação.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Comandos Úteis](#comandos-úteis)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Pré-requisitos

Certifique-se de ter os seguintes programas instalados em sua máquina:

- [Python 3.8+](https://www.python.org/downloads/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina local:

Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate 
   ```

Instale as dependências do projeto:
   ```bash
   pip install -r requirements.txt
   ```

## Configuração do Ambiente

1. Crie um arquivo `.env` baseado no exemplo `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` com as suas configurações:
   ```plaintext
   POSTGRES_USER=seu_usuario_postgres
   POSTGRES_PASSWORD=sua_senha_postgres
   POSTGRES_DB=seu_banco_de_dados
   DATABASE_URL=postgresql+asyncpg://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}
   ```

3. Inicie o banco de dados usando Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Uso

1. Execute a aplicação:
   ```bash
   make run
   ```

2. Acesse a aplicação no navegador:
   ```plaintext
   http://localhost:8000
   ```

3. Documentação da API:
   ```plaintext
   http://localhost:8000/docs
   ```
## Comandos Úteis


### Executar Testes

Execute os testes usando `pytest`:
   ```bash
   make test
   ```
