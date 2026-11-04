
const produits = [
    {
        id: 1,
        nom: "T-shirt",
        prix: 35,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        id: 2,
        nom: "Sac",
        prix: 60,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"
    },
    {
        id: 3,
        nom: "Chaussures",
        prix: 90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 4,
        nom: "Montre",
        prix: 75,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 5,
        nom: "Écouteurs",
        prix: 45,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 6,
        nom: "Parfum",
        prix: 55,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
    }
];

let panier = [];

function afficherProduits() {
    const liste = document.getElementById("liste-produits");
    liste.innerHTML = "";

    produits.forEach(produit => {
        liste.innerHTML += `
            <div class="produit">
                <img src="${produit.image}" alt="${produit.nom}">
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
