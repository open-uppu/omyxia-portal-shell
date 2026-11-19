'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ShellNavbar } from '@/components/layout/ShellNavbar';
import {
  OMYXIA_SERVICES_CATALOG,
  PlanTier,
  isServiceEntitled,
} from '@/lib/services-catalog';
import {
  ArrowLeft,
  ExternalLink,
  ShieldAlert,
  Server,
  Layers,
  Sparkles,
  Github,
  Monitor,
  Code2,
} from 'lucide-react';

const DECOUPLED_SERVICES = ['hrm', 'erp', 'crm'];

export default function ServiceWorkspacePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const [currentPlan, setCurrentPlan] = useState<PlanTier>('STARTER');
  const [viewMode, setViewMode] = useState<'embed' | 'architecture'>('embed');

  const service = OMYXIA_SERVICES_CATALOG.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-100">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md space-y-4">
          <h2 className="text-lg font-bold text-slate-800">ไม่พบบริการนี้</h2>
          <p className="text-xs text-slate-500">Service ID: &apos;{serviceId}&apos; ไม่ถูกต้อง</p>
          <Link
            href="/"
            className="inline-flex px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
          >
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    );
  }

  const isEntitled = isServiceEntitled(service, currentPlan);
  const isDecoupled = DECOUPLED_SERVICES.includes(service.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <ShellNavbar
        currentPlan={currentPlan}
        onPlanChange={setCurrentPlan}
        activeServiceName={service.name}
      />

      <div className="bg-white border-b px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-1.5 rounded-lg border hover:bg-slate-50 text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {service.name}
              <span className="text-xs font-normal text-slate-500">
                ({service.thName})
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {service.portFrontend && (
            <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg font-mono border">
              Port: :{service.portFrontend}
            </span>
          )}
          {isDecoupled ? (
            <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-medium border border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Decoupled Repo Live
            </span>
          ) : (
            <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg font-medium border">
              Roadmap Planned
            </span>
          )}
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6">
        {isEntitled ? (
          <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  พื้นที่ทำงาน {service.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {isDecoupled
                    ? `ไมโครเซอร์วิสนี้แยก Repository สำเร็จแล้วบน GitHub (open-uppu/omyxia-service-${service.id})`
                    : `บริการโมดูลภายในระบบหลัก`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 p-0.5 rounded-xl border text-xs">
                  <button
                    onClick={() => setViewMode('embed')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                      viewMode === 'embed'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> จำลองหน้าจอ
                  </button>
                  <button
                    onClick={() => setViewMode('architecture')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                      viewMode === 'architecture'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" /> สถาปัตยกรรม
                  </button>
                </div>

                {service.portFrontend && (
                  <a
                    href={`http://localhost:${service.portFrontend}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    เปิด Standalone Tab <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {isDecoupled && (
                  <a
                    href={`https://github.com/open-uppu/omyxia-service-${service.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> ดู Repo บน GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Microservice Overview & Architecture Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border space-y-1">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-600" /> Backend Service
                </span>
                <p className="text-sm font-bold text-slate-800">
                  NestJS API (Port :{service.portBackend})
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Database: omyxia_{service.id}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border space-y-1">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-600" /> Frontend Container
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Next.js Remote (Port :{service.portFrontend})
                </p>
                <p className="text-[11px] text-slate-500">
                  Module Federation ready
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border space-y-1">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Security Perimeter
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Gateway Entitlement Guard
                </p>
                <p className="text-[11px] text-slate-500">
                  Headers: X-Tenant-ID injected
                </p>
              </div>
            </div>

            {viewMode === 'embed' && service.portFrontend ? (
              <div className="border rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="font-mono text-slate-300 ml-2">
                      http://localhost:{service.portFrontend} (Standalone Remote)
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    ● Remote Workspace Active
                  </span>
                </div>
                <iframe
                  src={`http://localhost:${service.portFrontend}`}
                  title={`${service.name} Remote Microfrontend`}
                  className="w-full h-[580px] border-0"
                />
              </div>
            ) : (
              <div className="border border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50/50 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto text-xl">
                  🚀
                </div>
                <h3 className="font-bold text-slate-800 text-base">
                  Micro-frontend Remote Container พร้อมเชื่อมต่อ
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  ในโหมด Production พอร์ทัลกลางนี้จะ Mount คอมโพเนนต์ Remote จาก{' '}
                  <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">
                    open-uppu/omyxia-service-{service.id}
                  </code>{' '}
                  เข้ามาแสดงผลทันทีโดยไม่ต้องรีโหลดทั้งหน้า
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border shadow-sm p-8 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">
              ต้องอัปเกรดเป็นแพ็กเกจ {service.requiredPlan}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              แพ็กเกจ {currentPlan} ของคุณยังไม่สามารถเข้าใช้งานระบบ {service.name} ได้
            </p>
            <button
              onClick={() => setCurrentPlan(service.requiredPlan)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-xl shadow-sm"
            >
              ทดลองสลับเป็น {service.requiredPlan} เพื่อเปิดใช้งาน
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
