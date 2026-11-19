# 🏛️ Omyxia Portal Shell (`omyxia-portal-shell`)

> **Repository:** [open-uppu/omyxia-portal-shell](https://github.com/open-uppu/omyxia-portal-shell)  
> **Role:** Central Micro-frontend Host, App Launcher & Unified Tenant Portal  
> **Version:** 1.0.0  
> **License:** AGPL-3.0  

Omyxia Portal Shell is the central master application that aggregates and orchestrates all Omyxia enterprise microservices into a single, cohesive user experience.

---

## 🌟 Core Capabilities

1. **Unified App Launcher (เหมือน Google Workspace / Microsoft 365 Hub):**
   * รวบรวมทุก Service ของ Omyxia (HRM, ERP, CRM, WMS, BI, Workspace ฯลฯ) ไว้ในหน้า Launcher เดียว
   * รองรับการคลิกเลือกสลับการใช้งานระหว่างแอปได้อย่างไร้รอยต่อ
2. **Dynamic Subscription Entitlement Gating:**
   * ตรวจสอบสิทธิ์ของ Tenant อัตโนมัติ (Free, Starter, Pro, Enterprise, Add-ons)
   * แอปที่มีสิทธิ์จะแสดงปุ่ม **"เปิดใช้งาน (Launch App)"**
   * แอปที่อยู่นอกแพ็กเกจจะติดสถานะ **"ล็อก (Locked)"** พร้อมแสดงหน้าต่าง Paywall / Upgrade Modal เพื่อชวนอัปเกรด
3. **Micro-frontend Remote Mounting:**
   * โหลด UI จากแต่ละ Microservice เข้ามาแสดงผลภายใน Shell ร่วมกัน โดยยังคงแถบ Header, Tenant Switcher และระบบแจ้งเตือนไว้

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Start Portal Shell on port 3000
pnpm dev
```

---

## 🗺️ Microservices Registry & Ports

| Service ID | Display Name | Backend Port | Frontend / Remote Port | Required Plan |
|---|---|:---:|:---:|:---:|
| `hrm` | Human Resource Management | `:4001` | `:3001` | Starter |
| `erp` | Enterprise Financials & Tax | `:4002` | `:3002` | Pro |
| `crm` | Customer Relations & Pipeline | `:4003` | `:3003` | Starter |
| `wms` | Warehouse & Inventory | `:4004` | `:3004` | Enterprise |
| `analytics` | BI Dashboards & KPIs | `:4005` | `:3005` | Starter (Basic) / Pro |
| `workspace` | Chat, Email & Files | `:4006` | `:3006` | Free / Included |
