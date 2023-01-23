<h1>✨ Asas na Estrada</h1> 

  <h3>Projeto de minha autoria para a conclusão do curso Vem Ser Dev.</h3> 

  <h3>Este projeto tem como proposta desenvolver um site voltado especificamente para motoqueiros(as).</h3> 

</br> 

> Status: Desenvolvimento... 

  <h2>✨ Tecnologias</h2> 

  ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white") 
  ![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) 
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
  ![JWT](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink) 
  ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) 


  <h2>✨ Inicialização do projeto</h2> 

  Para poder rodar o projeto é necessário criar uma instância no docker com postgres, para isso basta executar o comando abaixo: 

  <h4>LINUX:</h4> 

  ```bash 

  sudo docker start postgres 

  ``` 

  <h4>WINDOWS:</h4> 

  ```bash 

  docker start postgres 

  ``` 
  
  Este comando irá criar a instância do postgres com o usuário padrão (postgres) e a senha "123456", caso queira  

  alterar, deverá ir para o arquivo .env dentro da raiz do código. 

  <h3>❗O projeto é executado na porta 3333, portanto, verifique se ele está livre para uso.</h3> 

<h2>✨ Clonando</h2> 

Clone este respositório em seu terminal utilizando: 

```bash 

git clone https://github.com/IngridAltafini/Asas-na-Estrada.git 

``` 

<h2>✨ Instalação</h2> 

Instale as dependencias utilizando: 

```bash 

yarn 

``` 

<h2>✨ Migrations</h2> 

Rode as migrations utilizando: 

```bash 

yarn run:table

``` 

<h2>✨ Executando</h2> 

Ápos a instalação das dependemcias, execute o projeto utilizando: 

```bash 

yarn dev 

``` 
<h2>✨ Dependencias</h2> 

```
    "bcrypt": "^5.0.1", 
    "celebrate": "^15.0.1", 
    "cookie-session": "^2.0.0", 
    "cors": "^2.8.5", 
    "dotenv": "^16.0.1", 
    "express": "^4.18.1", 
    "express-async-errors": "^3.1.1",
    "install": "^0.13.0", 
    "jsonwebtoken": "^8.5.1", 
    "knex": "^2.1.0", 
    "nodemailer": "^6.8.0", 
    "pg": "^8.7.3", 
    "youch": "^3.2.0" 
``` 
###### Ingrid Isabela Altafini - Estudante de Desenvolvimento Full-Stack 

