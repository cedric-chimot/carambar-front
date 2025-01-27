// Écouteur d'événements pour le bouton avec l'ID 'blagueButton'
document.getElementById('blagueButton').addEventListener('click', function() {
    // Lorsqu'on clique sur le bouton, on lance la fonction qui suit

    // Appel à l'API backend pour récupérer une blague aléatoire
    fetch('http://localhost:8080/api/blagues/random')  // L'URL doit correspondre à l'endpoint de l'API backend
        .then(response => response.json())  // Convertir la réponse en JSON 
        .then(data => {
            // Une fois la réponse obtenue et transformée en JSON, on exécute cette fonction avec les données

            // Ici, on insère la blague dans la div avec l'ID 'blagueContainer'
            // On récupère l'élément HTML avec 'blagueContainer' et on met son contenu HTML à la blague récupérée
            // 'data.content' est l'endroit où la blague est stockée dans la réponse de l'API 
            document.getElementById('blagueContainer').innerHTML = data.content;
        })
        .catch(error => {
            // Affichage de l'erreur dans la console 
            console.error('Erreur:', error);
        });
});
