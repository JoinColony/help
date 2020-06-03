---
id: echec-de-transaction
title: Une transaction a échoué pendant que je créais ma colonie. Et maintenant ?
sidebar_label: Échec de transaction. Et maintenant ?
---

Habituellement, lorsque vous créez une colonie, tout se passe sans problème et en un rien de temps. Malgré tout, de temps en temps, quelque chose se passe mal lors de la configuration (une transaction Metamask échoue, votre batterie est épuisée, votre navigateur s'arrête, etc.), et le processus est interrompu.

Si la création de la colonie est interrompue avant la confirmation de "Créer le nom de la colonie" ("Create Colony Name"), alors vous pouvez simplement recommencer (oui, cela signifie malheureusement que vous devrez repayer pour les transactions précédentes).

En revanche, si la création de la colonie est interrompue après la transaction "Créer un nom de colonie", alors vous pouvez utiliser ce guide pour terminer le processus et vous assurer que votre colonie fonctionne comme prévu.

*Note : Si la transaction "Deploy Token Authority" échoue, vous devrez contacter l'équipe Colony pour obtenir de l'aide. Les instructions dans ce cas ne peuvent pas être affichées ici pour des raisons de sécurité.*

Ce guide vous permettra de recommencer à l'une des étapes (transactions) suivantes :

1. Définir l'autorité de jeton ("Set Token Authority")
2. Ajouter une extension "OneTxPayment"
3. Donner l'autorisation à l'extension "OneTxPayment"

*Remarque : N’hésitez pas à contacter l’équipe Colony si vous souhaitez obtenir de l’aide pour ces transactions. Vous pouvez nous joindre à tout moment via Discord sur clny.io/discord.*

## Définir l'autorité de jeton
Allez sur https://mycrypto.com/contracts/interact.

**Contract Address :** Adresse du jeton déployée dans la transaction 1 **ABI :**
```
[{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**Read/Write Contract :** setAuthority **autority_address :** L'adresse du contrat d'autorité qui a été déployé dans la transaction quatre. **Value:** **Gas Limit:** `50,000`



## Ajouter une extension "OneTxPayment"
Allez sur https://mycrypto.com/contracts/interact.

**Contract address:** `0x6fb63009e3e03cbf6917647d64ad81939f267067` **ABI:**
```
[{"constant":false,"inputs":[{"name":"_colony","type":"address"}],"name":"deployExtension","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**Read/Write Contract:** deployExtension **_colony address:** Adresse de la colonie **Value:** **Gas Limit:** 1,300,000

Une fois la transaction confirmée, vous pouvez trouver l'adresse de votre extension OneTxPayment récemment déployée dans l'onglet "Event Logs" sur Etherscan.

Cliquez sur le bouton "Voir sur Etherscan" ("View on Etherscan") dans MyCrypto ou accédez à etherscan.io/tx/{transaction hash}

![etherscan](assets/failed-transaction/1.png)

## Donner l'autorisation à l'extension "OneTxPayment"
Accédez à l'onglet **Autorisations** ("Permissions") dans les paramètres de votre colonie.

Cliquez sur **Ajouter un rôle** ("Add Role")

Entrez l'adresse du contrat OneTxPayment que vous avez déployé.

Vérifiez **Financement** ("Funding") et **Administration**.

Cliquez sur **Confirmer** ("Confirm") et signez les transactions Ethereum.

Et BAM ! Votre colonie est opérationnelle ! 🎉

![autorisations](assets/failed-transaction/2.png)
