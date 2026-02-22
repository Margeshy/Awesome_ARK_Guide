import React from 'react';

export function SectionHeader({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: React.ElementType }) {
    return (
        <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3 mb-2">
        {Icon && <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Icon className="w-6 h-6" /></div>}
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
        </div>
    );
}

export function Card({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) {
    return (
        <div className={`bg-slate-900/40 border border-slate-800 rounded-xl p-5 ${className}`}>
        {title && <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-wider text-sm">{title}</h4>}
        <div className="text-slate-300 text-sm leading-relaxed">
        {children}
        </div>
        </div>
    );
}

export function TameCard({ name, why, how }: { name: string, why: string, how: string }) {
    return (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
        <h4 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        {name}
        </h4>
        <div className="space-y-3 text-sm">
        <div>
        <span className="text-emerald-400/80 font-semibold text-xs uppercase tracking-wider block mb-1">Why</span>
        <p className="text-slate-300">{why}</p>
        </div>
        <div>
        <span className="text-amber-400/80 font-semibold text-xs uppercase tracking-wider block mb-1">How</span>
        <p className="text-slate-300">{how}</p>
        </div>
        </div>
        </div>
    );
}

export function InfoAlert({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 my-6 flex gap-3 text-amber-200/90 text-sm">
        <div className="flex-shrink-0 mt-0.5">⚠️</div>
        <div>{children}</div>
        </div>
    );
}
