# Notes

## A FAIRE

Pour les **routes** : 
- tests sur les entrées utilisateur (url de requête, corps de requête),
- passer en HTTP**S**.

## Requêtes Postman

Dans Postman, les requêtes qui envoient un corps sont paramétrées ainsi :
- **header** : ajouter l'entrée suivante. Clé `Content-Type`, valeur `application/json`,
- **body** :  sélectionner `raw`, vérifier qu'on est en `JSON`, puis entrer par exemple :
```
{
    "nom": "Nom",
    "prenom": "Prénom",
    "email": "nom@prenom.xxx",
    "passe": "1234",
    "banni": false
}
```

Voici les *code snippets* au format **cURL** (panneau de code de droite dans Postman).

GET tous les *users* :
```
curl --location --request GET 'http://localhost:3000/users'
```

POST un *user* :
```
curl --location --request POST 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
	"nom": "Nom",
	"prenom": "Prénom",
	"email": "nom@prenom.xxx",
	"passe": "1234",
	"banni": false
}'
```

GET un *user* à tel id :
```
curl --location --request GET 'http://localhost:3000/users/1'
```

GET un *user* avec son email et son passe :
```
curl --location --request GET 'http://localhost:3000/login/?email=nom@prenom.xxx&passe=1234'
```

PUT un *user* à tel id :
```
curl --location --request PUT 'http://localhost:3000/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
	"nom": "attt",
	"prenom": "ttt",
	"email": "tttc@dttt.ettt",
	"passe": "ttttt",
	"banni": false
}'
```

DELETE un *user* à tel id : 
```
curl --location --request DELETE 'http://localhost:3000/users/1'
```
