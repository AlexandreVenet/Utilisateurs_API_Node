// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan'); 
const favicon = require('serve-favicon'); 
const cors = require('cors');

// Middlewares
const {GetAllUsers, GetUser, PostUser, PutUser, DeleteUser} = require("./controls/UsersControls.js");
const {Login} = require('./controls/LoginControls.js');

// //////////////////////////////////////////////////////
// CHAMPS
// //////////////////////////////////////////////////////

const app = express();
const port = 3000;

const pathUsers = './data/Users.json';

// //////////////////////////////////////////////////////
// MIDDLEWARES Injection de dépendances
// //////////////////////////////////////////////////////

app
    .use(cors())
    .use(favicon(__dirname + '/favicon.ico')) 
    .use(morgan('dev'))
    .use(bodyParser.json());

// //////////////////////////////////////////////////////
// ROUTES
// //////////////////////////////////////////////////////

// -----------------------------------------------------
// Générales

app.get('/', (request, response)=>
{
    response.send('Racine de l\'API.');
});

// -----------------------------------------------------
// Users

app.get('/users',(request, response) =>
{
    response.json(GetAllUsers(pathUsers));
});

app.get('/users/:id',(request, response) =>
{
    response.json(GetUser(pathUsers, request.params.id));
});

app.post('/users',(request, response) =>
{
    response.json(PostUser(pathUsers, request));
});

app.put('/users/:id',(request, response) =>
{
    response.json(PutUser(pathUsers,request));
});

app.delete('/users/:id',(request,response) =>
{
    response.json(DeleteUser(pathUsers,request.params.id));
});

// -----------------------------------------------------
// Login

app.get('/login/',(request, response)=>
{
    response.json(Login(pathUsers,request));
});

// //////////////////////////////////////////////////////
// DEMARRAGE
// //////////////////////////////////////////////////////

app.listen(port, ()=>
{
    // PASSER EN HTTPS

    console.log(`API démarrée sur http://localhost:${port}`);
});
