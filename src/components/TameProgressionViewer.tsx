import React, { useState, useMemo, useEffect } from 'react';
import { Card } from './UI';
import { ChevronDown } from 'lucide-react';

type PlayStyle = {
  name: string;
  priorities: string[];
};

type Tame = {
  name: string;
  hp: number;
  stam: number;
  oxy: number;
  food: number;
  weight: number;
  styles: PlayStyle[];
};

const tamesList: Tame[] = [
  { 
    name: 'Ankylosaurus', hp: 700, stam: 175, oxy: 150, food: 3000, weight: 250, 
    styles: [
      { name: 'Metal Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'Tank', priorities: ['Health', 'Melee'] },
      { name: 'Transport', priorities: ['Weight', 'Stamina', 'Speed'] }
    ] 
  },
  { 
    name: 'Argentavis', hp: 365, stam: 400, oxy: 150, food: 2000, weight: 400, 
    styles: [
      { name: 'Weight Hauler', priorities: ['Weight', 'Stamina'] },
      { name: 'Combat Mount', priorities: ['Health', 'Melee', 'Stamina'] },
      { name: 'Speed Scout', priorities: ['Speed', 'Stamina'] },
      { name: 'Mobile Smithy', priorities: ['Weight', 'Health'] }
    ] 
  },
  { 
    name: 'Baryonyx', hp: 440, stam: 325, oxy: 150, food: 1500, weight: 325, 
    styles: [
      { name: 'Cave Runner', priorities: ['Health', 'Melee', 'Stamina'] },
      { name: 'Ocean Explorer', priorities: ['Oxygen', 'Speed', 'Stamina'] },
      { name: 'Meat Runner', priorities: ['Melee', 'Weight'] }
    ] 
  },
  { 
    name: 'Beelzebufo', hp: 200, stam: 200, oxy: 150, food: 1500, weight: 160, 
    styles: [
      { name: 'Cementing Paste Farmer', priorities: ['Melee', 'Health', 'Stamina'] },
      { name: 'Swamp Scout', priorities: ['Speed', 'Stamina'] },
      { name: 'Torpor Applier', priorities: ['Melee', 'Health'] }
    ] 
  },
  { 
    name: 'Carbonemys', hp: 700, stam: 200, oxy: 150, food: 3000, weight: 250, 
    styles: [
      { name: 'Turret Soaker', priorities: ['Health'] },
      { name: 'Aquatic Tank', priorities: ['Health', 'Oxygen'] },
      { name: 'Pack Mule', priorities: ['Weight', 'Speed'] }
    ] 
  },
  { 
    name: 'Castoroides', hp: 260, stam: 200, oxy: 150, food: 2000, weight: 300, 
    styles: [
      { name: 'Wood Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'Mobile Smithy', priorities: ['Weight', 'Health'] },
      { name: 'Amphibious Scout', priorities: ['Speed', 'Stamina', 'Oxygen'] }
    ] 
  },
  { 
    name: 'Daeodon', hp: 900, stam: 400, oxy: 150, food: 4000, weight: 400, 
    styles: [
      { name: 'Boss Healer', priorities: ['Food', 'Health'] },
      { name: 'Base Healer', priorities: ['Food', 'Weight'] },
      { name: 'Combat Pig', priorities: ['Health', 'Melee', 'Stamina'] }
    ] 
  },
  { 
    name: 'Dilophosaurus', hp: 130, stam: 100, oxy: 150, food: 450, weight: 45, 
    styles: [
      { name: 'Base Guard', priorities: ['Health', 'Melee'] },
      { name: 'Turret', priorities: ['Melee'] },
      { name: 'Distraction', priorities: ['Speed', 'Health'] }
    ] 
  },
  { 
    name: 'Dodo', hp: 40, stam: 100, oxy: 150, food: 450, weight: 50, 
    styles: [
      { name: 'Egg Layer', priorities: ['Health', 'Food'] },
      { name: 'Suicide Bomber (C4)', priorities: ['Speed', 'Health'] },
      { name: 'Pet', priorities: ['Health'] }
    ] 
  },
  { 
    name: 'Doedicurus', hp: 850, stam: 300, oxy: 150, food: 3000, weight: 250, 
    styles: [
      { name: 'Stone Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'Rolling Tank', priorities: ['Health', 'Stamina'] },
      { name: 'Base Defender', priorities: ['Health', 'Melee'] }
    ] 
  },
  { 
    name: 'Ichthyosaurus', hp: 275, stam: 300, oxy: 150, food: 1500, weight: 250, 
    styles: [
      { name: 'Deep Sea Scout', priorities: ['Speed', 'Stamina'] },
      { name: 'Pearl Gatherer', priorities: ['Weight', 'Speed'] },
      { name: 'Escort', priorities: ['Health', 'Melee'] }
    ] 
  },
  { 
    name: 'Iguanodon', hp: 400, stam: 225, oxy: 150, food: 1500, weight: 375, 
    styles: [
      { name: 'Infinite Sprinter', priorities: ['Speed', 'Weight'] },
      { name: 'Berry Farmer', priorities: ['Melee', 'Weight'] },
      { name: 'Early Combat', priorities: ['Health', 'Melee', 'Stamina'] }
    ] 
  },
  { 
    name: 'Lystrosaurus', hp: 130, stam: 100, oxy: 150, food: 400, weight: 55, 
    styles: [
      { name: 'XP Buffer', priorities: ['Health', 'Food'] },
      { name: 'Base Mascot', priorities: ['Health'] }
    ] 
  },
  { 
    name: 'Mammoth', hp: 850, stam: 330, oxy: 150, food: 3000, weight: 500, 
    styles: [
      { name: 'Wood Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'War Elephant', priorities: ['Health', 'Melee', 'Stamina'] },
      { name: 'Mobile Base', priorities: ['Weight', 'Health'] }
    ] 
  },
  { 
    name: 'Megatherium', hp: 740, stam: 400, oxy: 150, food: 3000, weight: 725, 
    styles: [
      { name: 'Broodmother Killer', priorities: ['Health', 'Melee'] },
      { name: 'Bug Farmer', priorities: ['Melee', 'Weight', 'Stamina'] },
      { name: 'Cave Tank', priorities: ['Health', 'Melee', 'Stamina'] }
    ] 
  },
  { 
    name: 'Moschops', hp: 200, stam: 150, oxy: 150, food: 1500, weight: 130, 
    styles: [
      { name: 'Organic Polymer Farmer', priorities: ['Melee', 'Weight'] },
      { name: 'Early Harvester', priorities: ['Weight', 'Speed'] },
      { name: 'Meat Shield', priorities: ['Health'] }
    ] 
  },
  { 
    name: 'Ovis', hp: 130, stam: 100, oxy: 150, food: 400, weight: 90, 
    styles: [
      { name: 'Mutton Farm', priorities: ['Health', 'Food'] },
      { name: 'Wool Producer', priorities: ['Food'] },
      { name: 'Pet', priorities: ['Health'] }
    ] 
  },
  { 
    name: 'Parasaur', hp: 390, stam: 175, oxy: 150, food: 1500, weight: 255, 
    styles: [
      { name: 'Radar/Turret', priorities: ['Food', 'Health'] },
      { name: 'Early Pack Mule', priorities: ['Weight', 'Speed'] },
      { name: 'Berry Gatherer', priorities: ['Melee', 'Weight'] }
    ] 
  },
  { 
    name: 'Pteranodon', hp: 210, stam: 150, oxy: 150, food: 1200, weight: 120, 
    styles: [
      { name: 'Fast Scout', priorities: ['Speed', 'Stamina'] },
      { name: 'Light Fighter', priorities: ['Melee', 'Health', 'Stamina'] },
      { name: 'Quick Transport', priorities: ['Weight', 'Stamina'] }
    ] 
  },
  { 
    name: 'Raptor', hp: 200, stam: 150, oxy: 150, food: 1200, weight: 140, 
    styles: [
      { name: 'Pack Hunter', priorities: ['Melee', 'Health', 'Speed'] },
      { name: 'Cave Scout', priorities: ['Stamina', 'Speed', 'Health'] },
      { name: 'Meat Runner', priorities: ['Weight', 'Melee'] }
    ] 
  },
  { 
    name: 'Rex', hp: 1000, stam: 420, oxy: 150, food: 3000, weight: 500, 
    styles: [
      { name: 'Alpha Boss Killer', priorities: ['Health', 'Melee'] },
      { name: 'Meat Runner', priorities: ['Melee', 'Weight'] },
      { name: 'Base Defender', priorities: ['Health', 'Melee', 'Stamina'] }
    ] 
  },
  { 
    name: 'Sabertooth', hp: 250, stam: 200, oxy: 150, food: 1200, weight: 200, 
    styles: [
      { name: 'Cave Runner', priorities: ['Melee', 'Health', 'Stamina'] },
      { name: 'Hide/Chitin Farmer', priorities: ['Melee', 'Weight'] },
      { name: 'Fast Scout', priorities: ['Speed', 'Stamina'] }
    ] 
  },
  { 
    name: 'Therizinosaur', hp: 870, stam: 300, oxy: 150, food: 3000, weight: 365, 
    styles: [
      { name: 'Dragon Boss Killer', priorities: ['Health', 'Melee'] },
      { name: 'Delicate Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'Power Harvester', priorities: ['Melee', 'Weight'] },
      { name: 'War Mount', priorities: ['Health', 'Melee', 'Stamina'] }
    ] 
  },
  { 
    name: 'Thylacoleo', hp: 700, stam: 400, oxy: 150, food: 1500, weight: 400, 
    styles: [
      { name: 'Cave Brawler', priorities: ['Health', 'Melee', 'Stamina'] },
      { name: 'Tree Sniper', priorities: ['Health', 'Stamina'] },
      { name: 'Meat/Hide Farmer', priorities: ['Melee', 'Weight'] }
    ] 
  },
  { 
    name: 'Trike', hp: 395, stam: 150, oxy: 150, food: 3000, weight: 315, 
    styles: [
      { name: 'Early Tank', priorities: ['Health', 'Melee'] },
      { name: 'Berry Farmer', priorities: ['Melee', 'Weight'] },
      { name: 'Pack Mule', priorities: ['Weight', 'Stamina'] }
    ] 
  },
  { 
    name: 'Yutyrannus', hp: 1100, stam: 420, oxy: 150, food: 3000, weight: 500, 
    styles: [
      { name: 'Boss Buffer', priorities: ['Health', 'Stamina'] },
      { name: 'War Mount', priorities: ['Health', 'Melee', 'Stamina'] },
      { name: 'Base Defender', priorities: ['Health', 'Stamina', 'Melee'] }
    ] 
  }
].sort((a, b) => a.name.localeCompare(b.name));

export function TameProgressionViewer() {
  const [selectedTameName, setSelectedTameName] = useState(tamesList[0].name);
  const selectedTame = useMemo(() => tamesList.find(t => t.name === selectedTameName) || tamesList[0], [selectedTameName]);

  const [selectedStyleName, setSelectedStyleName] = useState(selectedTame.styles[0].name);
  const selectedStyle = useMemo(() => selectedTame.styles.find(s => s.name === selectedStyleName) || selectedTame.styles[0], [selectedTame, selectedStyleName]);

  // Reset style selection when tame changes
  useEffect(() => {
    setSelectedStyleName(selectedTame.styles[0].name);
  }, [selectedTame]);

  const progressionData = useMemo(() => {
    const rows = [];
    const levelUpSteps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 88];

    // Approximate tamed stat multipliers per point
    const multHp = selectedTame.hp * 0.054;
    const multStam = selectedTame.stam * 0.10;
    const multOxy = selectedTame.oxy * 0.10;
    const multFood = selectedTame.food * 0.10;
    const multWeight = selectedTame.weight * 0.04;
    const multMelee = 5; // 5% per point
    const multSpeed = 1; // 1% per point

    for (const levelsAdded of levelUpSteps) {
      const pointsPerStat = levelsAdded / selectedStyle.priorities.length;

      let hp = selectedTame.hp;
      let stam = selectedTame.stam;
      let oxy = selectedTame.oxy;
      let food = selectedTame.food;
      let weight = selectedTame.weight;
      let melee = 100; // Base 100%
      let speed = 100; // Base 100%

      if (selectedStyle.priorities.includes('Health')) hp += multHp * pointsPerStat;
      if (selectedStyle.priorities.includes('Stamina')) stam += multStam * pointsPerStat;
      if (selectedStyle.priorities.includes('Oxygen')) oxy += multOxy * pointsPerStat;
      if (selectedStyle.priorities.includes('Food')) food += multFood * pointsPerStat;
      if (selectedStyle.priorities.includes('Weight')) weight += multWeight * pointsPerStat;
      if (selectedStyle.priorities.includes('Melee')) melee += multMelee * pointsPerStat;
      if (selectedStyle.priorities.includes('Speed')) speed += multSpeed * pointsPerStat;

      rows.push({
        levelsAdded,
        hp: Math.round(hp),
        stam: Math.round(stam),
        oxy: Math.round(oxy),
        food: Math.round(food),
        weight: Math.round(weight),
        melee: Math.round(melee),
        speed: Math.round(speed)
      });
    }
    return rows;
  }, [selectedTame, selectedStyle]);

  const isPriority = (statName: string) => selectedStyle.priorities.includes(statName);

  return (
    <Card title="Tame Stat Progression">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="tame-select" className="block text-sm font-medium text-slate-400 mb-2">
            Select Tame
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
        </div>

        <div>
          <label htmlFor="style-select" className="block text-sm font-medium text-slate-400 mb-2">
            Select Play Style
          </label>
          <div className="relative">
            <select
              id="style-select"
              value={selectedStyleName}
              onChange={(e) => setSelectedStyleName(e.target.value)}
              className="block w-full appearance-none bg-slate-900 border border-slate-700 text-slate-200 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors cursor-pointer"
            >
              {selectedTame.styles.map(style => (
                <option key={style.name} value={style.name}>{style.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Priorities for {selectedStyleName}:</span>
        {selectedStyle.priorities.map(p => (
          <span key={p} className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
            {p}
          </span>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full text-sm text-left font-mono">
          <thead className="text-xs text-slate-400 uppercase bg-slate-900/80 border-b border-slate-800">
            <tr>
              <th className="px-4 py-3">Levels Added</th>
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
              <tr key={row.levelsAdded} className={idx % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'}>
                <td className="px-4 py-2 text-slate-300">+{row.levelsAdded}</td>
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
        * Values are approximate representations based on base tamed stats. Tames can be leveled up a maximum of 88 times. Actual in-game values depend on wild levels, taming effectiveness, and server settings. Highlighted columns indicate recommended stats to level for the chosen play style.
      </p>
    </Card>
  );
}
