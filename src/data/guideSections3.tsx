import React from 'react';
import { SectionHeader, Card, InfoAlert } from '../components/UI';

export const BossFights = () => (
    <div className="space-y-12">
    <SectionHeader title="Boss Strategies" subtitle="Broodmother, Megapithecus, and Dragon" />

    <div className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Broodmother Lysrix (Easiest Boss)</h3>
    <Card>
    <p className="mb-4"><strong>Arena:</strong> A dark cave with a flat arena. The Broodmother summons waves of Araneo (spiders) as adds.</p>

    <strong className="text-emerald-400 block mb-2">Strategy:</strong>
    <ul className="list-disc pl-5 space-y-2 mb-4">
    <li>Megatherium army is actually the BEST option here — Megatherium gets a massive damage buff from killing bugs, and the Broodmother spawns Araneo constantly. Your Megatheriums will be in permanent bug-buff mode.</li>
    <li>Alternative: Rex army works fine, especially for Gamma/Beta.</li>
    <li>Bring your Yutyrannus and keep roaring courage.</li>
    <li>Bring a Daeodon for Alpha.</li>
    <li>The fight is straightforward — gang up on the Broodmother, ignore adds (your dinos will passively kill them).</li>
    </ul>

    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Stats Needed (Approximate):</strong>
    <ul className="space-y-1 text-sm font-mono">
    <li><span className="text-emerald-400">Gamma:</span> HP: 15,000+ | Melee: 400%+ | Saddle: Primitive OK</li>
    <li><span className="text-blue-400">Beta:</span> HP: 20,000+ | Melee: 500%+ | Saddle: 40+ armor</li>
    <li><span className="text-red-400">Alpha:</span> HP: 25,000+ | Melee: 600%+ | Saddle: 50+ armor</li>
    </ul>
    </div>
    </Card>
    </div>

    <div className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Megapithecus (Medium Boss)</h3>
    <Card>
    <p className="mb-4"><strong>Arena:</strong> A snowy mountain arena. Megapithecus is a giant ape that throws boulders and summons Gigantopithecus and Mesopithecus adds. The boulder throw does massive damage and can hit multiple dinos.</p>

    <strong className="text-emerald-400 block mb-2">Strategy:</strong>
    <ul className="list-disc pl-5 space-y-2 mb-4">
    <li>Rex army + Yuty + Daeodon is the standard.</li>
    <li>The Megapithecus's boulder throw is the biggest threat — it's a ranged attack with knockback.</li>
    <li>Spread your Rexes slightly so a boulder doesn't hit multiple ones.</li>
    <li>Keep the Yutyrannus courage-roaring.</li>
    <li>Kill the adds when possible — the Gigantopithecus minions can be annoying.</li>
    <li>For Alpha, you want top-tier bred/imprinted Rexes with good saddles.</li>
    </ul>

    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Stats Needed (Approximate):</strong>
    <ul className="space-y-1 text-sm font-mono">
    <li><span className="text-emerald-400">Gamma:</span> HP: 20,000+ | Melee: 400%+ | Saddle: Primitive+</li>
    <li><span className="text-blue-400">Beta:</span> HP: 25,000+ | Melee: 500%+ | Saddle: 45+ armor</li>
    <li><span className="text-red-400">Alpha:</span> HP: 30,000+ | Melee: 600%+ | Saddle: 60+ armor</li>
    </ul>
    </div>
    </Card>
    </div>

    <div className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Dragon (Hardest Boss)</h3>
    <Card>
    <p className="mb-4"><strong>Arena:</strong> A volcanic arena. The Dragon is the hardest boss on The Island because it has a fire breath attack that does percentage-based damage — meaning it shreds even the tankiest Rexes. HP stacking is LESS effective against the Dragon.</p>

    <strong className="text-emerald-400 block mb-2">Strategy — This is the hard one:</strong>
    <ul className="list-disc pl-5 space-y-2 mb-4">
    <li>The Dragon's fire breath does ~20% of max HP per attack to carnivores.</li>
    <li><strong>Therizinosaurs are BETTER than Rexes here</strong> — they are herbivores and take LESS percentage damage from the fire breath (~8.6% instead of 20%).</li>
    <li>Alternatively, use Rexes but accept higher casualties.</li>
    <li>Sweet Vegetable Cakes on Therizinos — they auto-eat cakes to heal (cakes heal 500 HP over time, and herbivores auto-consume them).</li>
    <li>Keep Yutyrannus courage-roaring constantly.</li>
    <li>Daeodon healing is critical for Alpha Dragon.</li>
    <li>Kill the Dimorphodon and Pteranodon adds — they will swarm your Yuty rider and dismount you.</li>
    </ul>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Therizinosaur Boss Build:</strong>
    <ul className="list-disc pl-5 space-y-1 text-sm">
    <li>Tame high-level Therizinos (found near jungles/mountains)</li>
    <li>Breed for HP and Melee</li>
    <li>Target stats: 20,000+ HP, 600%+ Melee for Alpha</li>
    <li>Put Sweet Vegetable Cakes in each Therizino's inventory (10+ per Therizino)</li>
    <li>Craft cakes at a Cooking Pot or Industrial Cooker</li>
    </ul>
    </div>
    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Sweet Vegetable Cake Ingredients:</strong>
    <ul className="list-disc pl-5 space-y-1 text-sm">
    <li>Giant Bee Honey ×2, Sap ×4, Fiber ×25, Water</li>
    <li>Rockarrot ×2, Longrass ×2, Savoroot ×2, Stimulant ×4</li>
    <li>You need a farm for crops, a tamed Giant Queen Bee for honey, and Tree Sap Taps in the Redwoods for sap.</li>
    </ul>
    </div>
    </div>

    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Stats Needed — Therizinos for Dragon:</strong>
    <ul className="space-y-1 text-sm font-mono">
    <li><span className="text-emerald-400">Gamma:</span> HP: 15,000+ | Melee: 400%+ | Saddle: Primitive OK</li>
    <li><span className="text-blue-400">Beta:</span> HP: 20,000+ | Melee: 500%+ | Saddle: 45+ armor</li>
    <li><span className="text-red-400">Alpha:</span> HP: 25,000+ | Melee: 700%+ | Saddle: 60+ armor</li>
    </ul>
    </div>
    </Card>
    </div>
    </div>
);

export const TekCave = () => (
    <div className="space-y-8">
    <SectionHeader title="The Tek Cave & Overseer" subtitle="The Final Boss and Ascension" />

    <InfoAlert>
    <strong>Prerequisites:</strong> You must have defeated ALL THREE bosses to earn enough Tekgrams and Element (and to be strong enough). To enter the Tek Cave, you need all boss trophies corresponding to the difficulty (Gamma, Beta, or Alpha).
    </InfoAlert>

    <Card title="The Tek Cave">
    <p className="mb-2">Located inside the volcano at the very top of The Island.</p>
    <strong className="text-emerald-400 block mb-2 mt-4">What you face:</strong>
    <ul className="list-disc pl-5 space-y-1 mb-4">
    <li>A long lava-filled cave with high-level (up to max) wild creatures: Rexes, Carnos, Allos, Yuties, Gigas (!) in some spots, and more.</li>
    <li>Extreme heat — bring Ghillie Armor or Tek Armor and lots of Calien Soup (heat resistance food).</li>
    <li>The path is narrow with lava pools — dinos can fall in and die.</li>
    <li>At the end: a teleporter to the Overseer Arena.</li>
    </ul>

    <strong className="text-emerald-400 block mb-2">Strategy:</strong>
    <ul className="list-disc pl-5 space-y-1">
    <li>Bring your best 20 creatures — typical lineup: 18 Rexes + 1 Yuty + 1 Daeodon (or adjust).</li>
    <li>Walk through carefully — set dinos to follow, go slow, watch for lava.</li>
    <li>Clear creatures as you go — don't rush.</li>
    <li>There is a Giganotosaurus in the cave on Alpha difficulty — focus-fire it down or try to avoid it.</li>
    <li>At the end of the cave, step on the teleporter with your dinos nearby.</li>
    <li><strong>Any dino not on the teleporter platform will be LEFT BEHIND.</strong></li>
    </ul>
    </Card>

    <Card title="The Overseer">
    <p className="mb-4">The final boss. It shape-shifts between the three bosses you've already fought.</p>

    <strong className="text-emerald-400 block mb-2">Phases:</strong>
    <ul className="list-disc pl-5 space-y-1 mb-4">
    <li>Starts as itself (a floating mechanical entity).</li>
    <li>Transforms into Broodmother form, then Megapithecus form, then Dragon form.</li>
    <li>It spawns waves of Defense Units and Attack Drones.</li>
    <li>Each form uses attacks similar to the real boss.</li>
    </ul>

    <strong className="text-emerald-400 block mb-2">Strategy:</strong>
    <ul className="list-disc pl-5 space-y-1 mb-4">
    <li>Same as before: Rex army + Yuty + Daeodon.</li>
    <li>Focus-fire the Overseer in each form.</li>
    <li>The Dragon form is the most dangerous (fire breath still does % damage).</li>
    <li>Keep your Yuty roaring and keep healing with Daeodon.</li>
    <li>KILL IT WITHIN THE TIME LIMIT or you and everything die.</li>
    </ul>

    <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
    <strong className="text-emerald-400 block mb-2">Upon killing the Overseer:</strong>
    <ul className="list-disc pl-5 space-y-1 text-sm text-emerald-100">
    <li>You ASCEND. A cutscene plays.</li>
    <li>Your character gains +15 levels (Gamma), +15 (Beta), or +15 (Alpha) on top of the max level.</li>
    <li>Alpha Ascension raises your max level to 135 (from 105 base + 30 from Alpha Ascension).</li>
    </ul>
    </div>
    </Card>
    </div>
);
