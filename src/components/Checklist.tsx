import React from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ChecklistProps {
    id: string;
    items: string[];
}

export function Checklist({ id, items }: ChecklistProps) {
    const [checkedItems, setCheckedItems] = useLocalStorage<Record<number, boolean>>(`checklist-${id}`, {});

    const toggleItem = (index: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const progress = Math.round((Object.values(checkedItems).filter(Boolean).length / items.length) * 100) || 0;

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 my-6">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-emerald-400">Checklist</h3>
        <span className="text-xs font-mono bg-slate-800 text-emerald-400 px-2 py-1 rounded-full">
        {progress}% Complete
        </span>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-5 overflow-hidden">
        <div
        className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
        ></div>
        </div>

        <ul className="space-y-3">
        {items.map((item, index) => {
            const isChecked = checkedItems[index] || false;
            return (
                <li
                key={index}
                className={`flex items-start gap-3 p-2 -mx-2 rounded-lg cursor-pointer transition-colors hover:bg-slate-800/50 ${isChecked ? 'opacity-60' : ''}`}
                onClick={() => toggleItem(index)}
                >
                <button className="mt-0.5 flex-shrink-0 text-emerald-500 focus:outline-none">
                {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-500" />}
                </button>
                <span className={`text-sm leading-relaxed ${isChecked ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                {item}
                </span>
                </li>
            );
        })}
        </ul>
        </div>
    );
}
