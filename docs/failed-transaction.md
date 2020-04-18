---
id: failed-transaction
title: A Transaction Failed While I Was Creating My Colony, What Now?
sidebar_label: Failed Transaction, What Now?
---
Usually when you create a colony, everything happens smoothly and you are up and running in no time.
Every now and then though, something happens during setup (a metamask transaction fails, your battery runs out, your browser crashes, etc) and the process is interrupted.

If colony creation is interrupted prior to the "Create Colony Name" transaction confirming, then you can simply start again (yes, this will unfortunately mean you have to pay for the previous transactions again).

However, if colony creation is interrupted after the "Create Colony Name" transaction, then you can use this guide to finish the process and ensure that your colony works as expected.

*Note: If the "Deploy Token Authority" transaction fails, you will need to contact the colony team for help. The instructions cannot be posted here for security reasons.*

This guide will help you retry any of the following transactions:

1. Set Token Authority
2. Add OneTxPayment Extension
3. Give Permission to OneTxPayment Extension

*Note: Please do not hesitate to reach out to the colony team if you want help with these transactions. You can reach us at any time on our Discord at clny.io/discord.*

## Set Token Authority
Navigate to https://mycrypto.com/contracts/interact.

**Contract Address:** Token address deployed in transaction 1
**ABI:**
```
[{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**Read/Write Contract:** setAuthority
**authority_address:** The address of the authority contract that was deployed in transaction four.
**Value:**
**Gas Limit:** `50,000`



## Add OneTxPayment Extension to Colony
Navigate to https://mycrypto.com/contracts/interact.

**Contract address:** `0x6fb63009e3e03cbf6917647d64ad81939f267067`
**ABI:**
```
[{"constant":false,"inputs":[{"name":"_colony","type":"address"}],"name":"deployExtension","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```
**Read/Write Contract:** deployExtension
**_colony address:** Address of colony
**Value:**
**Gas Limit:** 1,300,000

Once the transaction is confirmed, you can find the address of your newly deployed OneTxPayment Extension in the Event Logs tab on Etherscan.

Click the "View on Etherscan" button in MyCrypto or Navigate to etherscan.io/tx/{transaction hash}

![etherscan](assets/failed-transaction/1.png)

## Give Permission to OneTxPayment Extension
Navigate to the **Permissions** tab in your colony's settings.

Click **Add Role**

Enter the address of the OneTxPayment contract that you deployed.

Check **Funding** and **Administration**.

Click **Confirm** and sign the Ethereum transactions.

Bam! Your colony is operational! 🎉

![permissions](assets/failed-transaction/2.png)
