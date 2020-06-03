---
id: comment-annuler-le-mode-recuperation
title: Comment annuler le mode récupération
sidebar_label: Comment annuler le mode récupération
---

Vous avez appuyé sur le bouton "Mode récupération" ("Recovery mode") et maintenant votre colonie est gelée.

Et maintenant ?

Une fois que vous aurez la certitude que tout dans votre colonie est opérationnel comme il se doit, vous interagirez directement avec les contrats de colonie.

Allez sur https://mycrypto.com/contracts/interact

Dans l'adresse de contrat, indiquez l'adresse de votre colonie.

Dans le champ "ABI/JSON Interface", copiez et collez ceci :
```
[{"constant":false,"inputs":[],"name":"exitRecoveryMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approveExitRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
Sélectionnez **approveExitRecovery**

Connectez-vous à votre portefeuille, et effectuez cette transaction.

Sélectionnez **exitRecoveryMode** et effectuez cette transaction.

Votre colonie est désormais sortie du mode récupération.
