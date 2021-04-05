<h1 align="center">Products CRUD - Backend</h1>



Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express-4.17.1-brightgreen)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node%20Js-14.15.4-orange)](https://nodejs.org/)
[![Sequelize ORM](https://img.shields.io/badge/Sequelize-6.0.0-red)](https://sequelize.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. <a href="https://www.getpostman.com/">Postman</a>
3. [Xampp](https://www.apachefriends.org/download.html)

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type 
```npm install```
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Apache and MYSQL Server using xampp, etc.
5. Create a database with the name **products** then  set config file [here](#set-config) in directory src/config/config.json
6. migration table with sequelize [here](#table-migratiton)
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.
8. You can see all the end point [here](#api-request-example)


### set config
```
src/config/config.json
    
"username": "your username",
"password": "your password",
"database": "name databases",
"host": "127.0.0.1",
"dialect": "mysql"

```

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
DB_PORT=3000
SECRET_KEY = bL9os1b52fcEaPlXKejUfVx0vWWcqrEP

```
### table migratiton
```
before doing the migration, please create a database in your local

cd src
Sequelize db:migrate

```
### fix problem Sequelize cannot run
```
on terminal or cmd
enter the src folder

npm install --save sequelize
npm install --save-dev sequelize-cli
```


### Compiles and hot-reloads for development
```
npm run dev
```

## API Request Example 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/958381bdb76ed04bd6e6?action=collection%2Fimport)

## Related Project

- [Frontend](https://github.com/FendiAnwarRifai/frontend-products)

<!-- CONTACT -->
## Contact

- Email - fendianwar36@gmail.com
- LinkedIn - [Fendi Anwar Rifa'i](https://www.linkedin.com/in/fendi-anwar-rifai/)



