// Renvoyer l'ID le plus grand dans les données passées en paramètre
function NextMaxID(obj)
{
    // Tableau des identifiants
    const IDs = obj.map(el => el.id); 
    // console.log(IDs);

    // Obtenir l'identifiant le plus grand
    const maxID = IDs.reduce((prev,current) => Math.max(prev,current)); 
    // console.log(Math.max(...IDs));

    // Ajouter 1 (le prochain identifiant le plus grand)
    const nextID = maxID +1;

    // Renvoyer 
    return nextID;
}

module.exports = NextMaxID;