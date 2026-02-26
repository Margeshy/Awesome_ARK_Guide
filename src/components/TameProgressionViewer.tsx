import React, { useState, useMemo } from 'react';
import { Card } from './UI';
import { ChevronDown } from 'lucide-react';

const tamesList = [
  { name: 'Dodo', hp: 40, stam: 100, oxy: 150, food: 450, weight: 50, priorities: ['Health'] },
  { name: 'Parasaur', hp: 390, stam: 175, oxy: 150, food: 1500, weight: 255, priorities: ['Weight', 'Stamina', 'Health', 'Speed'] },
  { name: 'Lystrosaurus', hp: 130, stam: 100, oxy: 150, food: 400, weight: 55, priorities: ['Health'] },
  { name: 'Trike', hp: 395, stam: 150, oxy: 150, food: 3000, weight: 315, priorities: ['Weight', 'Melee', 'Health', 'Stamina'] },
  { name: 'Moschops', hp: 200, stam: 150, oxy: 150, food: 1500, weight: 130, priorities: ['Melee', 'Weight', 'Health', 'Stamina'] },
  { name: 'Dilophosaurus', hp: 130, stam: 100, oxy: 150, food: 450, weight: 45, priorities: ['Health', 'Melee', 'Speed'] },
  { name: 'Raptor', hp: 200, stam: 150, oxy: 150, food: 1200, weight: 140, priorities: ['Melee', 'Health', 'Stamina', 'Speed'] },
  { name: 'Pteranodon', hp: 210, stam: 150, oxy: 150, food: 1200, weight: 120, priorities: ['Stamina', 'Weight', 'Health'] },
  { name: 'Ankylosaurus', hp: 700, stam: 175, oxy: 150, food: 3000, weight: 250, priorities: ['Melee', 'Weight', 'Health', 'Stamina'] },
  { name: 'Doedicurus', hp: 850, stam: 300, oxy: 150, food: 3000, weight: 250, priorities: ['Melee', 'Weight', 'Health', 'Stamina'] },
  { name: 'Carbonemys', hp: 700, stam: 200, oxy: 150, food: 3000, weight: 250, priorities: ['Health', 'Melee', 'Stamina'] },
  { name: 'Iguanodon', hp: 400, stam: 225, oxy: 150, food: 1500, weight: 375, priorities: ['Weight', 'Health', 'Stamina'] },
  { name: 'Ichthyosaurus', hp: 275, stam: 300, oxy: 150, food: 1500, weight: 250, priorities: ['Speed', 'Stamina', 'Health'] },
  { name: 'Argentavis', hp: 365, stam: 400, oxy: 150, food: 2000, weight: 400, priorities: ['Weight', 'Stamina', 'Health', 'Melee'] },
  { name: 'Thylacoleo', hp: 700, stam: 400, oxy: 150, food: 1500, weight: 400, priorities: ['Melee', 'Health', 'Stamina', 'Weight'] },
  { name: 'Baryonyx', hp: 440, stam: 325, oxy: 150, food: 1500, weight: 325, priorities: ['Melee', 'Health', 'Stamina', 'Weight'] },
  { name: 'Beelzebufo', hp: 200, stam: 200, oxy: 150, food: 1500, weight: 160, priorities: ['Health', 'Melee', 'Stamina', 'Speed'] },
  { name: 'Sabertooth', hp: 250, stam: 200, oxy: 150, food: 1200, weight: 200, priorities: ['Melee', 'Health', 'Stamina', 'Weight'] },
  { name: 'Castoroides', hp: 260, stam: 200, oxy: 150, food: 2000, weight: 300, priorities: ['Weight', 'Melee', 'Health', 'Stamina'] },
  { name: 'Daeodon', hp: 900, stam: 400, oxy: 150, food: 4000, weight: 400, priorities: ['Health', 'Food', 'Weight'] },
  { name: 'Ovis', hp: 130, stam: 100, oxy: 150, food: 400, weight: 90, priorities: ['Health'] },
  { name: 'Mammoth', hp: 850, stam: 330, oxy: 150, food: 3000, weight: 500, priorities: ['Melee', 'Weight', 'Stamina', 'Health'] },
  { name: 'Rex', hp: 1000, stam: 420, oxy: 150, food: 3000, weight: 500, priorities: ['Health', 'Melee'] },
  { name: 'Therizinosaur', hp: 870, stam: 300, oxy: 150, food: 3000, weight: 365, priorities: ['Health', 'Melee'] },
  { name: 'Yutyrannus', hp: 1100, stam: 420, oxy: 150, food: 3000, weight: 500, priorities: ['Health', 'Stamina', 'Melee'] },
  { name: 'Megatherium', hp: 740, stam: 400, oxy: 150, food: 3000, weight: 725, priorities: ['Melee', 'Health', 'Stamina'] },
];

export function TameProgressionViewer() {
  const [selectedTameName, setSelectedTameName] = useState(tamesList[0].name);

  const selectedTame = useMemo(() => tamesList.find(t => t.name === selectedTameName) || tamesList[0], [selectedTameName]);

  const progressionData = useMemo(() => {
    const rows = [];
    const pointsPer10Levels = 10;
    const pointsPerStat = pointsPer10Levels / selectedTame.priorities.length;

    let currentHp = selectedTame.hp;
    let currentStam = selectedTame.stam;
    let currentOxy = selectedTame.oxy;
    let currentFood = selectedTame.food;
    let currentWeight = selectedTame.weight;
    let currentMelee = 100; // Base 100%
    let currentSpeed = 100; // Base 100%

    // Approximate tamed stat multipliers per point
    const multHp = selectedTame.hp * 0.054;
    const multStam = selectedTame.stam * 0.10;
    const multOxy = selectedTame.oxy * 0.10;
    const multFood = selectedTame.food * 0.10;
    const multWeight = selectedTame.weight * 0.04;
    const multMelee = 5; // 5% per point
    const multSpeed = 1; // 1% per point

    for (let level = 1; level <= 100; level += (level === 1 ? 9 : 10)) {
      rows.push({
        level,
        hp: Math.round(currentHp),
        stam: Math.round(currentStam),
        oxy: Math.round(currentOxy),
        food: Math.round(currentFood),
        weight: Math.round(currentWeight),
        melee: Math.round(currentMelee),
        speed: Math.round(currentSpeed)
      });

      if (selectedTame.priorities.includes('Health')) currentHp += multHp * pointsPerStat;
      if (selectedTame.priorities.includes('Stamina')) currentStam += multStam * pointsPerStat;
      if (selectedTame.priorities.includes('Oxygen')) currentOxy += multOxy * pointsPerStat;
      if (selectedTame.priorities.includes('Food')) currentFood += multFood * pointsPerStat;
      if (selectedTame.priorities.includes('Weight')) currentWeight += multWeight * pointsPerStat;
      if (selectedTame.priorities.includes('Melee')) currentMelee += multMelee * pointsPerStat;
      if (selectedTame.priorities.includes('Speed')) currentSpeed += multSpeed * pointsPerStat;
    }
    return rows;
  }, [selectedTame]);

  const isPriority = (statName: string) => selectedTame.priorities.includes(statName);

  return (
    <Card title="Tame Stat Progression">
      <div className="mb-6">
        <label htmlFor="tame-select" className="block text-sm font-medium text-slate-400 mb-2">
          Select Tame to View Progression
        </label>
        <div className="relative">
          <select
            id="tame-select"
            value={selectedTameName}
            onChange={(e) => setSelectedTameName(e.target.value)}
            className="block w-full appearance-none bg-slate-900 border border-slate-700 text-slate-200 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors cursor-pointer"
          >
            {tamesList.map(tame => (
              <option key={tame.name} value={tame.name}>{tame.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Priorities:</span>
          {selectedTame.priorities.map(p => (
            <span key={p} className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full text-sm text-left font-mono">
          <thead className="text-xs text-slate-400 uppercase bg-slate-900/80 border-b border-slate-800">
            <tr>
              <th className="px-4 py-3">Level</th>
              <th className={`px-4 py-3 ${isPriority('Health') ? 'text-emerald-400' : ''}`}>Health</th>
              <th className={`px-4 py-3 ${isPriority('Stamina') ? 'text-emerald-400' : ''}`}>Stamina</th>
              <th className={`px-4 py-3 ${isPriority('Oxygen') ? 'text-emerald-400' : ''}`}>Oxygen</th>
              <th className={`px-4 py-3 ${isPriority('Food') ? 'text-emerald-400' : ''}`}>Food</th>
              <th className={`px-4 py-3 ${isPriority('Weight') ? 'text-emerald-400' : ''}`}>Weight</th>
              <th className={`px-4 py-3 ${isPriority('Melee') ? 'text-emerald-400' : ''}`}>Melee</th>
              <th className={`px-4 py-3 ${isPriority('Speed') ? 'text-emerald-400' : ''}`}>Speed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {progressionData.map((row, idx) => (
              <tr key={row.level} className={idx % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'}>
                <td className="px-4 py-2 text-slate-300">{row.level}</td>
                <td className={`px-4 py-2 ${isPriority('Health') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.hp}</td>
                <td className={`px-4 py-2 ${isPriority('Stamina') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.stam}</td>
                <td className={`px-4 py-2 ${isPriority('Oxygen') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.oxy}</td>
                <td className={`px-4 py-2 ${isPriority('Food') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.food}</td>
                <td className={`px-4 py-2 ${isPriority('Weight') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.weight}</td>
                <td className={`px-4 py-2 ${isPriority('Melee') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.melee}%</td>
                <td className={`px-4 py-2 ${isPriority('Speed') ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>{row.speed}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-4 leading-relaxed">
        * Values are approximate representations based on base level 1 stats. Actual in-game values depend on wild levels, taming effectiveness, and server settings. Highlighted columns indicate recommended stats to level.
      </p>
    </Card>
  );
}
