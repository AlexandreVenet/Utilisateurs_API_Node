// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

// const {readFileSync, writeFileSync} = require('fs'); // filesystem, librairie native

const DataOK = require('../helpers/DataOK.js'); 
const NextMaxID = require('../helpers/NextMaxID.js');
const {UsersLoad, UsersSave} = require('../helpers/UsersHelper.js');

// //////////////////////////////////////////////////////
// FONCTIONS Routes
// //////////////////////////////////////////////////////

function GetAllUsers(path)
{
    const listeUsers = UsersLoad(path);
    return DataOK(`${listeUsers.length} user(s)`, listeUsers);
}

function GetUser(path, id)
{
    // AJOUTER LES TESTS D'ENTREE

    const intID = parseInt(id);

    const listeUsers = UsersLoad(path);

    let user = listeUsers.find(el => el.id == intID);
    if(user == null)
    {
        return DataOK("Pas d'utilisateur à cet identifiant.",null);
    }
    else
    {
        return DataOK("Utilisateur trouvé", user);
    }
}

function PostUser(path, request)
{
    const listeUsers = UsersLoad(path);
    
    const nextId = NextMaxID(listeUsers);
    
    // On part du principe que la requête est correcte (non doublon d'un existant, id ok...).
    // AJOUTER LES TESTS D'ENTREE

    const nextUser = {...request.body, ...{id:nextId}}

    listeUsers.push(nextUser);

    UsersSave(path, listeUsers);

    return DataOK(`Utilisateur ajouté`,nextUser);
}

function PutUser(path, request)
{
    // AJOUTER LES TESTS D'ENTREE
    
    const id = parseInt(request.params.id);
    const userUpdated = {...request.body, ...{id:id}};

    let listeUsers = UsersLoad(path);

    listeUsers = listeUsers.map(item =>
        {
            if(item.id == id)
            {
                return userUpdated;
            }
            else
            {
                return item;
            }
        });

    UsersSave(path, listeUsers);

    return DataOK(`Utilisateur modifié`,userUpdated);
}

function DeleteUser(path,id)
{
    // AJOUTER LES TESTS D'ENTREE

    const idInt = parseInt(id);

    let listeUsers = UsersLoad(path);
    listeUsers = listeUsers.filter(item => item.id != idInt);

    const userDeleted = listeUsers.find(item => item.id == idInt);

    UsersSave(path,listeUsers);

    return DataOK('Utilisateur supprimé', userDeleted);
}

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = { 
    GetAllUsers,
    GetUser,
    PostUser,
    PutUser,
    DeleteUser
};