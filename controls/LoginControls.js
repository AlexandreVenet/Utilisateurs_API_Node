// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

const {readFileSync} = require('fs'); // filesystem, librairie native

const DataOK = require('../helpers/DataOK.js'); 

// //////////////////////////////////////////////////////
// FONCTIONS Routes
// //////////////////////////////////////////////////////

function Login(path, request)
{
    // A FAIRE : tester les entrées utilisateur

    let email = request.query.email;
    let passe = request.query.passe;

    const listeUsers = UsersLoad(path);

    let user = listeUsers.find(el => el.email == email && el.passe == passe);

    if(user == null)
    {
        return DataOK("Pas d'utilisateur", null);
    }
    else
    {
        return DataOK("Utilisateur connecté", {nom:user.nom, prenom:user.prenom});
    }
}


// //////////////////////////////////////////////////////
// FONCTIONS File system
// //////////////////////////////////////////////////////

function UsersLoad(path)
{
    return JSON.parse(readFileSync(path, 'utf-8'))
};

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = { 
    Login
};