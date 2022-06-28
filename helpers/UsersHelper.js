const {readFileSync, writeFileSync} = require('fs'); // filesystem, librairie native


function UsersLoad(path)
{
    return JSON.parse(readFileSync(path, 'utf-8'))
};

function UsersSave(path, liste)
{
    const objJSON = JSON.stringify(liste);
    writeFileSync(path,objJSON);
    // console.log('Liste enregistrée');
}


module.exports = {
    UsersLoad,
    UsersSave
}