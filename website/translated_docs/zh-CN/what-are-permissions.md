---
id: 什么是权限
title: 什么是权限？
sidebar_label: 什么是权限？
---

Colony 有六个可分配给任何以太坊地址的权限类别，包括：资金（Funding）、管理（Administration）、仲裁（Arbitration,）、架构（Architecture）、根（Root），和恢复（Recovery）。

权限是在域级别分配的。 如果帐户被授予域中的某个权限，则他在该域所有子域中也具有相同的权限。

需要注意的是，这些权限可以直接分配到用户的帐户，单方面授予该帐户权限，也可以分配到围绕权限实现某些其他逻辑的智能合约（例如信誉加权投票）。



# 权限
## 资金 💰
* 可以在域中任意转移资金


## 管理 👔
* 可以操纵其域中的付款（任务）行为
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
