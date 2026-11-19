'use client';

import React, { useState } from 'react';
import { ShellNavbar } from '@/components/layout/ShellNavbar';
import { ServiceCard } from '@/components/launcher/ServiceCard';
import { UpgradePaywallModal } from '@/components/modals/UpgradePaywallModal';
import {
  OMYXIA_SERVICES_CATALOG,
  OmyxiaServiceDefinition,
  PlanTier,
  isServiceEntitled,
} from '@/lib/services-catalog';
import { LayoutGrid, Sparkles, CheckCircle2, Lock, Filter } from 'lucide-react';

export default function AppLauncherHomePage() {
  const [currentPlan, setCurrentPlan] = useState<PlanTier>('STARTER');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [paywallModalService, setPaywallModalService] =
    useState<OmyxiaServiceDefinition | null>(null);

  // Filter services by category
  const filteredServices = OMYXIA_SERVICES_CATALOG.filter((s) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'entitled')
      return isServiceEntitled(s, currentPlan);
    return s.category === selectedCategory;
  });

  const entitledCount = OMYXIA_SERVICES_CATALOG.filter((s) =>
    isServiceEntitled(s, currentPlan)
  ).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <ShellNavbar
        currentPlan={currentPlan}
        onPlanChange={setCurrentPlan}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* Welcome & Stats Hero */}
        <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              SaaS Central Launcher
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ศูนย์รวมแอปพลิเคชันองค์กร Omyxia
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              สลับการทำงานระหว่าง Microservices ทุกระบบได้ในที่เดียว
              ระบบจะแสดงฟีเจอร์และอนุญาตการเข้าถึงอัตโนมัติตามแพ็กเกจที่ชำระเงิน
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                แพ็กเกจปัจจุบัน
              </span>
              <p className="text-lg font-bold text-amber-300 mt-0.5">{currentPlan}</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                แอปที่ปลดล็อกแล้ว
              </span>
              <p className="text-lg font-bold text-emerald-400 mt-0.5">
                {entitledCount} / {OMYXIA_SERVICES_CATALOG.length} แอป
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                สถาปัตยกรรม
              </span>
              <p className="text-lg font-bold text-slate-200 mt-0.5">Multi-Repo</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Gateway Guard
              </span>
              <p className="text-lg font-bold text-blue-400 mt-0.5">Active (RLS)</p>
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'ทุกระบบ (All)' },
              { id: 'entitled', label: `เฉพาะที่เปิดใช้แล้ว (${entitledCount})` },
              { id: 'operations', label: 'ปฏิบัติการ & ธุรกิจ' },
              { id: 'collaboration', label: 'สื่อสาร & ไฟล์' },
              { id: 'governance', label: 'วิเคราะห์ & กฎหมาย' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            แสดง {filteredServices.length} บริการ
          </span>
        </section>

        {/* App Launcher Service Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.map((service) => {
            const isEntitled = isServiceEntitled(service, currentPlan);
            return (
              <ServiceCard
                key={service.id}
                service={service}
                isEntitled={isEntitled}
                onLockedClick={(s) => setPaywallModalService(s)}
              />
            );
          })}
        </section>
      </main>

      {/* Upgrade Paywall Modal */}
      <UpgradePaywallModal
        service={paywallModalService}
        currentPlan={currentPlan}
        isOpen={Boolean(paywallModalService)}
        onClose={() => setPaywallModalService(null)}
        onUpgradeToPlan={(plan) => setCurrentPlan(plan)}
      />

      <footer className="border-t border-slate-200 bg-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          Omyxia Central Portal Shell — Designed & Orchestrated by OpenBot Architecture Team
        </div>
      </footer>
    </div>
  );
}
