'use client';

import React from 'react';
import { ShieldAlert, CheckCircle2, X, ArrowRight, Sparkles } from 'lucide-react';
import { OmyxiaServiceDefinition, PlanTier } from '@/lib/services-catalog';

export interface UpgradePaywallModalProps {
  service: OmyxiaServiceDefinition | null;
  currentPlan: PlanTier;
  isOpen: boolean;
  onClose: () => void;
  onUpgradeToPlan: (plan: PlanTier) => void;
}

export function UpgradePaywallModal({
  service,
  currentPlan,
  isOpen,
  onClose,
  onUpgradeToPlan,
}: UpgradePaywallModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            ต้องการแพ็กเกจ {service.requiredPlan}
          </div>

          <h3 className="text-xl font-bold tracking-tight">
            ปลดล็อกระบบ {service.name}
          </h3>
          <p className="text-xs text-slate-300 mt-1">{service.thName}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            องค์กรของคุณปัจจุบันใช้งานแพ็กเกจ{' '}
            <strong className="text-slate-900">{currentPlan}</strong> ซึ่งยังไม่ครอบคลุมระบบนี้
            อัปเกรดเป็นแพ็กเกจ{' '}
            <strong className="text-blue-600">{service.requiredPlan}</strong>{' '}
            หรือเลือกซื้อแบบ Add-on รายโมดูลเพื่อเริ่มใช้งานได้ทันที
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              ฟีเจอร์ระดับองค์กรที่จะได้รับ:
            </span>
            <ul className="space-y-1.5">
              {service.features.map((feat) => (
                <li
                  key={feat}
                  className="text-xs text-slate-600 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onUpgradeToPlan(service.requiredPlan);
                onClose();
              }}
              className="flex-1 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              อัปเกรดเป็น {service.requiredPlan} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              ไว้ทีหลัง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
