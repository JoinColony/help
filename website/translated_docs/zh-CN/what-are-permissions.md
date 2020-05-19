---
id: 什么是权限
title: 什么是权限？
sidebar_label: 什么是权限？
---

Colony has six permission classes which can be assigned to any Ethereum address: Funding, Administration, Arbitration, Architecture, Root, and Recovery.

Permissions are assigned at the domain level. If an account is granted a permission in a domain, it also has that same permission in all of that domain’s subdomains.

It is worth noting that these permissions can be assigned directly to a user's account, giving the account the permission unilaterally, or to a smart contract that implements some other logic around the permissions (Reputation-weighted voting for example).



# Permissions
## Funding 💰
* Able to move funds within arbitrary pots in the domain


## Administration 👔
* Able to manipulate payments (tasks) in their domain
* Able to raise disputes


## Arbitration 🔨
* Able to resolve disputes in their domain (i.e. change arbitrary state)
* Able to set the escrow period


## Architecture 💪🏽
* Able to create subdomains
* Able to manage permissions in subdomains (but not the domain itself) *Note, you may notice Architecture Subdomain in some instances. This permission allows the holder to manage permissions in the domain that the permission is granted, rather than only in the subdomains.*


## Root ⚡
* Modify colony-wide parameters
* Upgrade the colony
* Manage permissions in Root Domain


## Recovery 🚑
* Turn on and off recovery mode (which freezes all other actions in the colony). *If multiple addresses have this permission, a majority must approve turning off recovery mode.*
