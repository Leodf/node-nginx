## Aplicação Nginx com NodeJS 🚀 

## 📝 Sobre o projeto

Desafio da Fullcycle para criar uma aplicação com docker a qual todas as requisições passe pelo servidor nginx antes do servidor da aplicação.

O objetivo principal foi utilizar o nginx com a função de proxy reverso para acessar o servidor de aplicação do NodeJs onde é utilizado o banco de dados Mysql para salvar o nome dos usuários e mostrar em uma tabela na pagina principal.

A aplicação conta com duas rotas do tipo GET sendo a primeira, a qual mostra os nomes em uma tabela que estão salvas no banco de dados. A segunda rota é para salvar o nome do usuário através do query params colocando o nome que quer salvar.

## 🔗 Tecnologias utilizadas

O presente projeto foi desenvolvido utilizando as seguintes tecnologias:
- [NodeJs](https://go.dev/)
- [Nginx](https://www.nginx.com/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

## 🎯 Principais funcionalidades

- [x] exibir via CLI a mensagem "Full Cycle Rocks!"
- [x] exibir uma lista de nomes salvos na aplicação do NodeJs
- [x] salvar um nome pelos parâmetros da aplicação

## 🎯 Como baixar o projeto

Atente-se aos passos a seguir para executar o projeto:

#### 📁 Clonar o repositório

```bash
# Clonar o repositório
git clone https://github.com/Leodf/node-nginx.git

# Entrar no diretório
cd node-nginx 
```

#### 🐳 Docker

```bash
# Criar os containers do nginx, nodejs e mysql
docker-compose up -d
```

## 📌 Endpoints

Após concluir as etapas anteriores, você poderá acessar a Aplicação no endereço http://localhost:8080.

Para salvar um nome no banco de dados, você precisará entrar com o nome que deseja salvar no parâmetro da url http://localhost:8080/:nome

ex: http://localhost:8080/leonardo

## 📚 Bibliotecas

- [expressjs](https://expressjs.com/pt-br/)
- [mysql](https://www.npmjs.com/package/mysql)

## 👨‍💻 Autor

- [Email](mailto:faver_i@hotmail.com)
- [Linkedin](https://www.linkedin.com/in/leonardo-de-faveri/)
- [Github](https://github.com/Leodf)
- [Portfolio](https://portifolio-react-drab.vercel.app/)