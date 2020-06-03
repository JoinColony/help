---
id: que-sont-les-autorisations
title: Que sont les autorisations ?
sidebar_label: Que sont les autorisations ?
---

Colony a six classes d'autorisations qui peuvent être assignées à n'importe quelle adresse Ethereum : Financement ("Funding"), Administration, Arbitrage ("Arbitration"), Architecture, Racine ("Root") et Récupération ("Recovery").

Les permissions sont attribuées au niveau du domaine. Si un compte se voit accorder une permission dans un domaine, il a également la même permission dans tous ses sous-domaines.

Il est à noter que ces autorisations peuvent être attribuées directement à un compte utilisateur, donnant unilatéralement l'autorisation au compte, ou à un contrat intelligent qui implémente une autre logique autour des autorisations (vote pondéré par la réputation par exemple).



# Autorisations
## Financement 💰
* Permet de déplacer des fonds dans des pots arbitraires dans le domaine


## Administration 👔
* Permet de manipuler les paiements (tâches) dans leur domaine
* Permet déclencher des litiges


## Arbitrage 🔨
* Permet de résoudre les litiges dans leur domaine (changer l'état d'arbitrage)
* Permet de définir la période de dépôt de valeur


## Architecture 💪🏽
* Permet de créer des sous-domaines
* Permet de gérer les autorisations dans les sous-domaines (mais pas le domaine lui-même) *Note : vous trouverez le sous-domaine Architecture ("Architecture Subdomain") dans certaines instances. Cette autorisation permet au titulaire de gérer les autorisation dans le domaine où la permission est accordée, plutôt que dans les sous-domaines.*


## Racine ⚡
* Modifier les paramètres globaux de la colonie
* Mettre à jour la colonie
* Gérer les permissions dans le domaine racine ("Root Domain")


## Récupération 🚑
* Activer et désactiver le mode de récupération (qui bloque toutes les autres actions de la colonie). *Si plusieurs adresses ont cette autorisation, la désactivation du mode de récupération se fait à la majorité.*
