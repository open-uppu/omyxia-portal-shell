'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Landmark,
  TrendingUp,
  Boxes,
  BarChart3,
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
  Lock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { OmyxiaServiceDefinition } from '@/lib/services-catalog';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Landmark,
  TrendingUp,
  Boxes,
  BarChart3,
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
};

export interface ServiceCardProps {
  service: OmyxiaServiceDefinition;
  isEntitled: boolean;
  onLockedClick: (service: OmyxiaServiceDefinition) => void;
}

export function ServiceCard({
  service,
  isEntitled,
  onLockedClick,
}: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Users;

  return (
    <div
      className={`relative p-5 rounded-2xl border transition-all flex flex-col justify-between ${
        isEntitled
          ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-lg shadow-sm group'
          : 'bg-slate-50/80 border-slate-200 opacity-80 hover:opacity-100 hover:border-slate-300'
      }`}
    >
      <div>
        {/* Top bar with Icon & Badges */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-sm`}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-1.5">
            {isEntitled ? (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                พร้อมใช้งาน
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                <Lock className="w-3 h-3" />
                {service.requiredPlan}
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors flex items-center gap-2">
          {service.name}
        </h3>
        <p className="text-xs font-medium text-slate-500 mt-0.5">{service.thName}</p>
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        {/* Mini Feature Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {service.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        {isEntitled ? (
          <Link
            href={service.route}
            className="w-full py-2 px-3 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            เปิดใช้งานแอป <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button
            onClick={() => onLockedClick(service)}
            className="w-full py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <Lock className="w-3 h-3 text-slate-400" />
            ปลดล็อกแพ็กเกจ {service.requiredPlan}
          </button>
        )}
      </div>
    </div>
  );
}
