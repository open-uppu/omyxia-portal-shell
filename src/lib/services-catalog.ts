export type PlanTier = 'FREE' | 'STARTER' | 'PRO' | 'ENTERPRISE';

export interface OmyxiaServiceDefinition {
  id: string;
  name: string;
  thName: string;
  description: string;
  category: 'core' | 'operations' | 'collaboration' | 'governance';
  requiredPlan: PlanTier;
  addonSlug?: string;
  iconName: string;
  color: string;
  portFrontend?: number;
  portBackend?: number;
  route: string;
  features: string[];
}

export const OMYXIA_SERVICES_CATALOG: OmyxiaServiceDefinition[] = [
  {
    id: 'hrm',
    name: 'HRM & People',
    thName: 'บริหารจัดการทรัพยากรบุคคลและเงินเดือน',
    description: 'ข้อมูลพนักงาน, บันทึกเวลาเข้า-ออกงาน, คำขอลา และคำนวณภาษีเงินเดือน',
    category: 'operations',
    requiredPlan: 'STARTER',
    addonSlug: 'hrm',
    iconName: 'Users',
    color: 'from-blue-500 to-indigo-600',
    portFrontend: 3001,
    portBackend: 4001,
    route: '/apps/hrm',
    features: ['Employee Master', 'Attendance Log', 'Leave Quotas', 'Thai Payroll & SSO'],
  },
  {
    id: 'erp',
    name: 'ERP & Accounting',
    thName: 'การเงิน บัญชี และภาษีองค์กร',
    description: 'สมุดบัญชีแยกประเภท (GL), ลูกหนี้/เจ้าหนี้ (AR/AP), ภาษีหัก ณ ที่จ่าย และใบกำกับภาษี',
    category: 'operations',
    requiredPlan: 'PRO',
    addonSlug: 'erp',
    iconName: 'Landmark',
    color: 'from-emerald-500 to-teal-600',
    portFrontend: 3002,
    portBackend: 4002,
    route: '/apps/erp',
    features: ['General Ledger', 'Invoicing & Tax', 'Accounts Payable', 'Chart of Accounts'],
  },
  {
    id: 'crm',
    name: 'CRM & Pipeline',
    thName: 'บริหารลูกค้าสัมพันธ์และการขาย',
    description: 'ติดตาม Lead, จัดการโอกาสการขายใน Pipeline, ประวัติการติดต่อ และการปิดดีล',
    category: 'operations',
    requiredPlan: 'STARTER',
    addonSlug: 'crm',
    iconName: 'TrendingUp',
    color: 'from-amber-500 to-orange-600',
    portFrontend: 3003,
    portBackend: 4003,
    route: '/apps/crm',
    features: ['Lead Tracking', 'Deals Pipeline', 'Customer Activities', 'Quotations'],
  },
  {
    id: 'wms',
    name: 'WMS & Warehouse',
    thName: 'คลังสินค้าและสต็อก',
    description: 'ตรวจนับสต็อกสินค้า, การรับเข้า/เบิกจ่าย, โอนย้ายข้ามคลัง และการจัดการ SKU',
    category: 'operations',
    requiredPlan: 'ENTERPRISE',
    addonSlug: 'wms',
    iconName: 'Boxes',
    color: 'from-violet-500 to-purple-600',
    portFrontend: 3004,
    portBackend: 4004,
    route: '/apps/wms',
    features: ['Stock Balances', 'Warehouse Movements', 'Barcode/SKU Registry', 'Low Stock Alert'],
  },
  {
    id: 'analytics',
    name: 'BI & Analytics',
    thName: 'วิเคราะห์ธุรกิจและแดชบอร์ดผู้บริหาร',
    description: 'แดชบอร์ดสรุปผลการดำเนินงาน, KPI องค์กร, รายงานอัตโนมัติ และการส่งออกข้อมูล',
    category: 'governance',
    requiredPlan: 'STARTER',
    addonSlug: 'bi',
    iconName: 'BarChart3',
    color: 'from-cyan-500 to-blue-600',
    portFrontend: 3005,
    portBackend: 4005,
    route: '/apps/analytics',
    features: ['Executive Dashboard', 'Revenue Trend', 'Scheduled Reports', 'CSV/PDF Export'],
  },
  {
    id: 'workspace',
    name: 'Workspace & Chat',
    thName: 'การสื่อสารและการทำงานร่วมกัน',
    description: 'ห้องแชทองค์กรแบบเรียลไทม์, อีเมล Stalwart และไดรฟ์เก็บไฟล์ MinIO ปลอดภัย',
    category: 'collaboration',
    requiredPlan: 'FREE',
    iconName: 'MessageSquare',
    color: 'from-sky-500 to-indigo-500',
    portFrontend: 3006,
    portBackend: 4006,
    route: '/apps/workspace',
    features: ['Realtime Channels', 'Stalwart Mail Relay', 'MinIO Cloud Drive', 'File Versioning'],
  },
  {
    id: 'itsm',
    name: 'ITSM & Helpdesk',
    thName: 'แจ้งซ่อมและสนับสนุนฝ่ายไอที',
    description: 'เปิด Ticket แจ้งปัญหา, มอบหมายงานช่าง และติดตาม SLA การให้บริการ',
    category: 'governance',
    requiredPlan: 'PRO',
    iconName: 'LifeBuoy',
    color: 'from-rose-500 to-pink-600',
    portFrontend: 3007,
    portBackend: 4007,
    route: '/apps/itsm',
    features: ['Incident Tickets', 'SLA Tracking', 'Asset Maintenance', 'Service Catalog'],
  },
  {
    id: 'compliance',
    name: 'PDPA & Compliance',
    thName: 'คุ้มครองข้อมูลและความปลอดภัย',
    description: 'บันทึกประวัติการเข้าถึง (Audit Log WORM), นโยบายความเป็นส่วนตัว และการยินยอม PDPA',
    category: 'governance',
    requiredPlan: 'PRO',
    iconName: 'ShieldCheck',
    color: 'from-slate-700 to-slate-900',
    portFrontend: 3008,
    portBackend: 4008,
    route: '/apps/compliance',
    features: ['PDPA Consent', 'WORM Audit Logs', 'Role Policy Matrix', 'Breach Prevention'],
  },
];

/**
 * Determine if a tenant with a given plan and addons is entitled to a service
 */
export function isServiceEntitled(
  service: OmyxiaServiceDefinition,
  tenantPlan: PlanTier,
  tenantAddons: string[] = [],
): boolean {
  // If tenant has purchased the specific add-on for this service, grant access
  if (service.addonSlug && tenantAddons.includes(service.addonSlug)) {
    return true;
  }

  const planHierarchy: Record<PlanTier, number> = {
    FREE: 0,
    STARTER: 1,
    PRO: 2,
    ENTERPRISE: 3,
  };

  const currentLevel = planHierarchy[tenantPlan] ?? 0;
  const requiredLevel = planHierarchy[service.requiredPlan] ?? 0;

  return currentLevel >= requiredLevel;
}
