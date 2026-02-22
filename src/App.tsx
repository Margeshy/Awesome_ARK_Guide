import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { guideSections } from './data';

export default function App() {
    const [activeSectionId, setActiveSectionId] = useState(guideSections[0].id);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const activeSection = guideSections.find(s => s.id === activeSectionId) || guideSections[0];

    const handleNavClick = (id: string) => {
        setActiveSectionId(id);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <h1 className="font-bold text-emerald-400 tracking-tight">ARK Guide</h1>
        <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:text-white"
        >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        </div>

        {/* Sidebar Navigation */}
        <aside className={`
            fixed md:sticky top-0 left-0 z-40 h-screen w-72 bg-slate-900 border-r border-slate-800
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            flex flex-col
            `}>
            <div className="p-6 hidden md:block">
            <h1 className="text-2xl font-black text-emerald-400 tracking-tighter leading-none">
            ARK<br/>
            <span className="text-slate-100 text-lg tracking-normal font-bold">The Island Guide</span>
            </h1>
            </div>

            <nav className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
            {guideSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSectionId === section.id;
                return (
                    <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                        ${isActive
                            ? 'bg-emerald-500/10 text-emerald-400 font-semibold shadow-[inset_2px_0_0_0_#10b981]'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
                `}
                >
                <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span className="text-sm">{section.title}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
                </button>
                );
            })}
            </nav>

            <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
            Ascension Awaits
            </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto p-6 md:p-10 lg:p-12 pb-24">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeSection.content}
            </div>
            </div>
            </main>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            </div>
    );
}
