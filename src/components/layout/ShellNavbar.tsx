'use client';

import React from 'react';
import Link from 'next/link';
import {
  Grid,
  Building2,
  Sparkles,
  Shield,
  CreditCard,
  ChevronDown,
  Bell,
} from 'lucide-react';
import { PlanTier } from '@/lib/services-catalog';

export interface ShellNavbarProps {
  currentPlan: PlanTier;
  onPlanChange: (plan: PlanTier) => void;
  tenantName?: string;
  activeServiceName?: string;
}

export function ShellNavbar({
  currentPlan,
  onPlanChange,
  tenantName = 'Siam Enterprise Co., Ltd.',
  activeServiceName,
}: ShellNavbarProps) {
  const plans: PlanTier[] = ['FREE', 'STARTER', 'PRO', 'ENTERPRISE'];

  const planBadgeColors: Record<PlanTier, string> = {
    FREE: 'bg-slate-100 text-slate-700 border-slate-300',
    STARTER: 'bg-blue-50 text-blue-700 border-blue-300',
    PRO: 'bg-purple-50 text-purple-700 border-purple-300',
    ENTERPRISE: 'bg-amber-50 text-amber-800 border-amber-300',
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand & Launcher */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 tracking-tight text-base">
                  Omyxia Hub
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                  Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Enterprise Suite</p>
            </div>
          </Link>

          {activeServiceName && (
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
              <span className="text-slate-400">/</span>
              <span className="text-sm font-semibold text-slate-700">
                {activeServiceName}
              </span>
            </div>
          )}
        </div>

        {/* Center: Plan Simulator Switcher (Interactive Sandbox feature) */}
        <div className="hidden md:flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-medium px-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            จำลองแพ็กเกจ:
          </span>
          {plans.map((p) => (
            <button
              key={p}
              onClick={() => onPlanChange(p)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                currentPlan === p
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Right: Tenant, Plan Badge & User */}
        <div className="flex items-center gap-3">
          {/* Tenant Selector Dropdown */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{tenantName}</span>
          </div>

          {/* Current Plan Badge */}
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${planBadgeColors[currentPlan]}`}
          >
            {currentPlan} PLAN
          </span>

          {/* App Switcher button */}
          <Link
            href="/"
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            title="App Launcher"
          >
            <Grid className="w-5 h-5" />
          </Link>

          {/* User Avatar */}
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
            👔
          </div>
        </div>
      </div>
    </header>
  );
}
