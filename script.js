const produits = [
    { id: 1, nom: "T-shirt", prix: 35 },
    { id: 2, nom: "Sac", prix: 60 },
    { id: 3, nom: "Chaussures", prix: 90 },
    { id: 4, nom: "Montre", prix: 75 },
    { id: 5, nom: "Écouteurs", prix: 45 },
    { id: 6, nom: "Parfum", prix: 55 }
];

let panier = [];

function afficherProduits() {
    const liste = document.getElementById("liste-produits");

    liste.innerHTML = "";

    produits.forEach(produit => {
        liste.innerHTML += `
            <div class="produit">
                <h3>${produit.nom}</h3>
                <p>Prix : ${produit.prix} DT</p>
                <button onclick="ajouterAuPanier(${produit.id})">
                    Ajouter au panier
                </button>
            </div>
        `;
    });
}

function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    const article = panier.find(p => p.id === id);

    if (article) {
        article.quantite++;
    } else {
        panier.push({
            ...produit,
            quantite: 1
        });
    }

    afficherPanier();
}

function afficherPanier() {
    const contenu = document.getElementById("contenu-panier");
    const totalElement = document.getElementById("total");

    contenu.innerHTML = "";
    let total = 0;

    panier.forEach(article => {
        total += article.prix * article.quantite;

        contenu.innerHTML += `
            <div>
                <p>
                    ${article.nom} -
                    ${article.prix} DT × ${article.quantite}
                    <button onclick="supprimerDuPanier(${article.id})">
                        Supprimer
                    </button>
                </p>
            </div>
        `;
    });

    totalElement.textContent = total;
}

function supprimerDuPanier(id) {
    panier = panier.filter(article => article.id !== id);
    afficherPanier();
}

document.getElementById("vider-panier").addEventListener("click", function() {
    panier = [];
    afficherPanier();
});

afficherProduits();
afficherPanier();