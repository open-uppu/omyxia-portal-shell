# Omyxia Portal Shell & Central App Launcher 🌐

Central Host Application for the **Omyxia Enterprise Microservices Ecosystem** (`open-uppu`).

Provides unified authentication, plan entitlement gating, dynamic application launching, and embedded micro-frontend routing for all 14 Omyxia systems.

---

## 🏛️ Architecture Overview

```
                          [ Client Browser ]
                                   │
                                   ▼
         [ Central Portal Shell :3000 ] (open-uppu/omyxia-portal-shell)
         ├── App Launcher Grid (14 Services Catalog)
         ├── Dynamic Entitlement Gate (FREE / STARTER / PRO / ENTERPRISE)
         ├── Real-time Plan Simulator & Paywall Modal
         └── Micro-frontend Host Container
                                   │
       ┌───────────────────────────┼───────────────────────────┐
       ▼                           ▼                           ▼
[ HRM Microservice ]       [ ERP Microservice ]        [ CRM Microservice ]
:3001 UI / :4001 API       :3002 UI / :4002 API        :3003 UI / :4003 API
Database: omyxia_hrm       Database: omyxia_erp        Database: omyxia_crm
(omyxia-service-hrm)       (omyxia-service-erp)        (omyxia-service-crm)
```

---

## 🚀 Live Microservices Repositories

| Microservice | GitHub Repository | Frontend | Backend | Database | Min Tier |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Central Shell** | [`open-uppu/omyxia-portal-shell`](https://github.com/open-uppu/omyxia-portal-shell) | `:3000` | Host | Portal Cache | `FREE` |
| **HRM & Payroll** | [`open-uppu/omyxia-service-hrm`](https://github.com/open-uppu/omyxia-service-hrm) | `:3001` | `:4001` | `omyxia_hrm` | `STARTER` |
| **ERP & Accounting** | [`open-uppu/omyxia-service-erp`](https://github.com/open-uppu/omyxia-service-erp) | `:3002` | `:4002` | `omyxia_erp` | `PRO` |
| **CRM & Pipeline** | [`open-uppu/omyxia-service-crm`](https://github.com/open-uppu/omyxia-service-crm) | `:3003` | `:4003` | `omyxia_crm` | `STARTER` |
| **Core Monolith** | [`open-uppu/Omyxia`](https://github.com/open-uppu/Omyxia) | `:3000` | `:4000` | Blueprint | All |

---

## 💡 Key Features

1. **App Launcher Grid:**
   * Lists all 14 enterprise services across HR, Finance, Operations, Collaboration, and Governance.
   * Dynamically unlocks entitled apps with a direct "เปิดใช้งานแอป (Launch App)" button.
   * Locks unentitled apps with a "ล็อก - ดูเงื่อนไข (Locked)" badge and triggers the Upgrade Paywall Modal.
2. **Interactive Plan Simulator:**
   * Switch between `FREE`, `STARTER`, `PRO`, and `ENTERPRISE` tiers in real-time on the navbar to simulate tenant subscription entitlements.
3. **Workspace Embedded Preview:**
   * Embedded live preview & standalone tabs for decoupled microservices (`hrm` on 3001, `erp` on 3002, `crm` on 3003).
   * Direct links to respective GitHub repositories.

---

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Run Portal Shell
pnpm dev
# Open http://localhost:3000
```
