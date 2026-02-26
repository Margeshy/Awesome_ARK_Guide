import React from 'react';
import { SectionHeader, Card, InfoAlert } from '../components/UI';
import { TameProgressionViewer } from '../components/TameProgressionViewer';

export const PlayerStats = () => (
  <div className="space-y-8">
    <SectionHeader title="Player Character Stat Allocation" subtitle="Level-by-Level Guide (1-105)" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Actual Per-Point Gains">
        <ul className="space-y-1 font-mono text-sm">
          <li>Health ............. +10 HP per point</li>
          <li>Stamina ............ +10 per point</li>
          <li>Oxygen ............. +20 per point</li>
          <li>Food ............... +10 per point</li>
          <li>Water .............. +10 per point</li>
          <li>Weight ............. +10 lbs per point</li>
          <li>Melee Damage ....... +5% per point</li>
          <li>Movement Speed ..... +2% per point</li>
          <li>Fortitude .......... +2 per point</li>
          <li>Crafting Skill ..... +10% per point</li>
        </ul>
        <div className="mt-4 text-red-400 text-sm font-bold">
          STATS YOU NEVER LEVEL: Oxygen, Food, Water, Crafting Skill (Crafting Skill only via temporary mindwipe trick)
        </div>
      </Card>

      <Card title="Priority Ranking (Overall)">
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong className="text-emerald-400">Weight:</strong> You're ALWAYS overweight</li>
          <li><strong className="text-emerald-400">Health:</strong> Dying = losing everything</li>
          <li><strong className="text-emerald-400">Movement Speed:</strong> Escape death, reposition</li>
          <li><strong className="text-emerald-400">Fortitude:</strong> Weather + torpor resist</li>
          <li><strong className="text-emerald-400">Stamina:</strong> Run, swim, fight</li>
          <li><strong className="text-emerald-400">Melee Damage:</strong> Early game harvesting only</li>
        </ol>
      </Card>
    </div>

    <Card title="Full Progression Table">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left font-mono">
          <thead className="text-xs text-slate-400 uppercase bg-slate-900/50">
            <tr>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Health</th>
              <th className="px-4 py-3">Stamina</th>
              <th className="px-4 py-3">Weight</th>
              <th className="px-4 py-3">Melee</th>
              <th className="px-4 py-3">Speed</th>
              <th className="px-4 py-3">Fort</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="bg-slate-900/20"><td className="px-4 py-2">1</td><td className="px-4 py-2">100</td><td className="px-4 py-2">100</td><td className="px-4 py-2">100</td><td className="px-4 py-2">100%</td><td className="px-4 py-2">100%</td><td className="px-4 py-2">0</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2">10</td><td className="px-4 py-2">130</td><td className="px-4 py-2">110</td><td className="px-4 py-2">120</td><td className="px-4 py-2">110%</td><td className="px-4 py-2">102%</td><td className="px-4 py-2">0</td></tr>
            <tr className="bg-slate-900/20"><td className="px-4 py-2">20</td><td className="px-4 py-2">160</td><td className="px-4 py-2">120</td><td className="px-4 py-2">150</td><td className="px-4 py-2">120%</td><td className="px-4 py-2">104%</td><td className="px-4 py-2">0</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2">30</td><td className="px-4 py-2">180</td><td className="px-4 py-2">130</td><td className="px-4 py-2">180</td><td className="px-4 py-2 text-amber-400">130% ★</td><td className="px-4 py-2">108%</td><td className="px-4 py-2">0</td></tr>
            <tr className="bg-slate-900/20"><td className="px-4 py-2">40</td><td className="px-4 py-2">210</td><td className="px-4 py-2">140</td><td className="px-4 py-2">210</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">112%</td><td className="px-4 py-2">2</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2">50</td><td className="px-4 py-2">230</td><td className="px-4 py-2">150</td><td className="px-4 py-2">250</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">116%</td><td className="px-4 py-2">4</td></tr>
            <tr className="bg-slate-900/20"><td className="px-4 py-2">60</td><td className="px-4 py-2">260</td><td className="px-4 py-2">160</td><td className="px-4 py-2">280</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">120%</td><td className="px-4 py-2">6</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2">70</td><td className="px-4 py-2">280</td><td className="px-4 py-2">170</td><td className="px-4 py-2">310</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">124%</td><td className="px-4 py-2">10</td></tr>
            <tr className="bg-slate-900/20"><td className="px-4 py-2">80</td><td className="px-4 py-2">310</td><td className="px-4 py-2">180</td><td className="px-4 py-2">340</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">126%</td><td className="px-4 py-2">14</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2">90</td><td className="px-4 py-2">330</td><td className="px-4 py-2 text-amber-400">200 ★</td><td className="px-4 py-2">370</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">128%</td><td className="px-4 py-2">18</td></tr>
            <tr className="bg-slate-900/20"><td className="px-4 py-2">100</td><td className="px-4 py-2">360</td><td className="px-4 py-2 text-slate-500">200</td><td className="px-4 py-2">410</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2">132%</td><td className="px-4 py-2">20</td></tr>
            <tr className="bg-slate-900/40"><td className="px-4 py-2 text-emerald-400">105</td><td className="px-4 py-2 text-emerald-400">380</td><td className="px-4 py-2 text-slate-500">200</td><td className="px-4 py-2 text-emerald-400">420</td><td className="px-4 py-2 text-slate-500">130%</td><td className="px-4 py-2 text-emerald-400">134%</td><td className="px-4 py-2 text-emerald-400">22</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-2">★ = stat finished, no more points invested after this level</p>
    </Card>

    <InfoAlert>
      <strong>Mindwipe Trick for Saddle Crafting:</strong>
      <ol className="list-decimal pl-5 mt-2 space-y-1">
        <li>Brew Mindwipe Tonic (Cooking Pot recipe: 24 Cooked Prime Meat, 200 Mejoberries, 72 Narcotic, 72 Stimulant, Waterskin)</li>
        <li>Drink it — resets ALL your stat points and engrams</li>
        <li>Dump every single point into Crafting Skill (1140% Crafting Skill)</li>
        <li>Craft your best saddle blueprints (Rex, Therizino, Yuty saddles)</li>
        <li>Drink another Mindwipe Tonic and redistribute stats back to normal</li>
      </ol>
    </InfoAlert>
  </div>
);

export const TameStats = () => (
  <div className="space-y-8">
    <SectionHeader title="Tame Stat Priorities" subtitle="What to level on your dinos" />

    <Card title="Universal 'Never Level' Stats (For Dinos)">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Oxygen:</strong> Only matters on land dinos you force to swim. Use aquatic mounts instead.</li>
        <li><strong>Food:</strong> EXCEPTION: Daeodon. Everything else manages food passively. Waste of points.</li>
        <li><strong>Speed:</strong> EXCEPTION: Ichthyosaurus and utility travel mounts. Most combat/harvesting tames don't need speed. Boss arena dinos especially — the arena is small, speed is worthless.</li>
        <li><strong>Crafting Skill:</strong> Dinos don't have this.</li>
      </ul>
    </Card>

    <TameProgressionViewer />
  </div>
);
