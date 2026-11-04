flowchart LR
    U([Utilisateur])

    subgraph Application["Application Gestion de Panier"]
        A([Consulter les produits])
        B([Ajouter un produit au panier])
        C([Consulter le panier])
        D([Modifier la quantité])
        E([Supprimer un produit])
        F([Vider le panier])
        G([Calculer le total])
    end

    U --- A
    U --- B
    U --- C
    U --- D
    U --- E
    U --- F

    B --> G
    D --> G
    E --> G
    F --> G
    