import React from 'react';
import { SectionHeader, Card, InfoAlert } from '../components/UI';
import { Checklist } from '../components/Checklist';

export const ReferenceData = () => (
    <div className="space-y-12">
    <SectionHeader title="Reference & Data" subtitle="Tiers, Artifacts, Tributes, and Stats" />

    <div id="tier-list" className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Key Tame Tier List</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card title="S-Tier (Essential)">
    <ul className="space-y-2">
    <li><strong className="text-emerald-400">Rex:</strong> Boss killer</li>
    <li><strong className="text-emerald-400">Therizinosaur:</strong> Dragon boss killer, versatile harvester</li>
    <li><strong className="text-emerald-400">Yutyrannus:</strong> Courage roar for boss fights</li>
    <li><strong className="text-emerald-400">Argentavis:</strong> All-purpose flyer, transport, mobile smithy</li>
    <li><strong className="text-emerald-400">Ankylosaurus:</strong> Metal/crystal farming</li>
    <li><strong className="text-emerald-400">Daeodon:</strong> Healing for boss fights</li>
    </ul>
    </Card>
    <Card title="A-Tier (Very Important)">
    <ul className="space-y-2">
    <li><strong className="text-emerald-400">Megatherium:</strong> Broodmother boss killer, cave clearing</li>
    <li><strong className="text-emerald-400">Baryonyx:</strong> Cave mount, water combat</li>
    <li><strong className="text-emerald-400">Thylacoleo:</strong> Land combat, climbing</li>
    <li><strong className="text-emerald-400">Doedicurus:</strong> Stone farming</li>
    <li><strong className="text-emerald-400">Mammoth:</strong> Wood farming</li>
    <li><strong className="text-emerald-400">Pteranodon:</strong> Early flyer, scouting</li>
    <li><strong className="text-emerald-400">Ovis:</strong> Mutton for taming</li>
    </ul>
    </Card>
    <Card title="B-Tier (Very Useful)">
    <ul className="space-y-1 text-sm">
    <li><strong>Castoroides:</strong> Wood, mobile smithy, cementing paste</li>
    <li><strong>Beelzebufo:</strong> Cementing paste from bugs</li>
    <li><strong>Dung Beetle:</strong> Oil + fertilizer from poop</li>
    <li><strong>Quetzalcoatlus:</strong> Platform saddle, carry Ankylo for metal runs</li>
    <li><strong>Basilosaurus:</strong> Deep ocean exploration, immune to jellyfish/eels</li>
    <li><strong>Ichthyosaurus:</strong> Fast ocean travel</li>
    <li><strong>Megalodon:</strong> Ocean combat</li>
    <li><strong>Tapejara:</strong> Multi-seat flyer</li>
    <li><strong>Moschops:</strong> Early game harvesting</li>
    <li><strong>Trike:</strong> Early berry farming</li>
    </ul>
    </Card>
    <Card title="C-Tier (Niche but Useful)">
    <ul className="space-y-1 text-sm">
    <li><strong>Dimorphodon:</strong> Swarm caves/PvP</li>
    <li><strong>Otter:</strong> Insulation + artifact carry</li>
    <li><strong>Giant Bee:</strong> Honey production</li>
    <li><strong>Hesperornis:</strong> Golden Eggs for kibble</li>
    <li><strong>Lystrosaurus:</strong> XP boost</li>
    <li><strong>Bulbdog/Otter:</strong> Shoulder pet utility</li>
    </ul>
    </Card>
    </div>
    </div>

    <div id="artifacts" className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Artifact Locations</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card title="Broodmother Artifacts">
    <div className="space-y-4 text-sm">
    <div>
    <strong className="text-emerald-400 block">Artifact of the Hunter</strong>
    Cave: Central Cave (41.5, 46.9)<br/>
    Difficulty: Easy-Medium<br/>
    Best Mount: Baryonyx, Sabertooth
    </div>
    <div>
    <strong className="text-emerald-400 block">Artifact of the Clever</strong>
    Cave: Lower South Cave (80.3, 53.5)<br/>
    Difficulty: Easy<br/>
    Best Mount: Baryonyx, Raptor
    </div>
    <div>
    <strong className="text-emerald-400 block">Artifact of the Massive</strong>
    Cave: Upper South Cave (68.2, 56.2)<br/>
    Difficulty: Easy-Medium<br/>
    Best Mount: Baryonyx, Sabertooth
    </div>
    </div>
    </Card>
    <Card title="Megapithecus Artifacts">
    <div className="space-y-4 text-sm">
    <div>
    <strong className="text-blue-400 block">Artifact of the Brute</strong>
    Cave: Lava Cave (70.6, 86.1)<br/>
    Difficulty: Hard (lava + heat)<br/>
    Best Mount: Megatherium, on foot w/ grapples
    </div>
    <div>
    <strong className="text-blue-400 block">Artifact of the Devourer</strong>
    Cave: North West Cave (19.3, 19.0)<br/>
    Difficulty: Medium<br/>
    Best Mount: On foot (tight), Dimorphodons
    </div>
    <div>
    <strong className="text-blue-400 block">Artifact of the Pack</strong>
    Cave: Yeti Cave / Snow Cave (29.1, 31.8)<br/>
    Difficulty: HARD (cold + high-level dinos)<br/>
    Best Mount: Yutyrannus, Megatherium
    </div>
    </div>
    </Card>
    <Card title="Dragon Artifacts">
    <div className="space-y-4 text-sm">
    <div>
    <strong className="text-red-400 block">Artifact of the Skylord</strong>
    Cave: Snow Cave entrance (29.1, 31.8)<br/>
    Difficulty: Medium-Hard<br/>
    Best Mount: Fur armor, strong mount
    </div>
    <div>
    <strong className="text-red-400 block">Artifact of the Strong</strong>
    Cave: Caverns of Lost Faith (53.7, 10.4)<br/>
    Difficulty: Hard (underwater)<br/>
    Best Mount: Basilosaurus, Megalodon pack
    </div>
    <div>
    <strong className="text-red-400 block">Artifact of the Immune</strong>
    Cave: Swamp Cave (62.7, 37.3)<br/>
    Difficulty: Hard (toxic gas, bugs)<br/>
    Best Mount: Gas Mask required, Megatherium
    </div>
    </div>
    </Card>
    </div>
    </div>

    <div id="breeding" className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Breeding & Mutations Crash Course</h3>
    <Card>
    <strong className="text-emerald-400 block mb-2">Basic Breeding Steps:</strong>
    <ol className="list-decimal pl-5 space-y-1 mb-6">
    <li>Tame multiple high-level creatures of the same species (at least 1 male, several females)</li>
    <li>Check their base stats (pre-leveling stats — use a stat calculator or Dododex app)</li>
    <li>Find the highest HP and highest Melee among all your tames</li>
    <li>Breed until you get a baby with BOTH best stats (55% chance from the better parent)</li>
    <li>Once you have a male and female with the best combined stats, those become your breeding pair</li>
    <li>Mass-produce babies from this pair → raise and imprint them all</li>
    <li>Level the raised dinos: dump points into HP and Melee only</li>
    </ol>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
    <strong className="text-emerald-400 block mb-2">Imprinting:</strong>
    <ul className="list-disc pl-5 space-y-1 text-sm">
    <li>Babies request care (cuddle, food, walk) at intervals</li>
    <li>100% imprint = +30% damage dealt, +30% damage resistance when ridden by the imprinter</li>
    <li>Even unridden imprinted dinos get +20% to all stats</li>
    </ul>
    </div>
    <div>
    <strong className="text-emerald-400 block mb-2">Mutations:</strong>
    <ul className="list-disc pl-5 space-y-1 text-sm">
    <li>Every baby has a ~7% chance to get a mutation</li>
    <li>A mutation adds +2 levels to one random stat and changes a color region</li>
    <li>You want mutations in HP or Melee only</li>
    <li>Stack mutations by breeding mutated males back with clean (0/20 mutation) females</li>
    </ul>
    </div>
    </div>
    </Card>
    </div>

    <div id="tips" className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Pro Tips & Common Mistakes</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card title="Pro Tips">
    <ul className="list-disc pl-5 space-y-2 text-sm">
    <li><strong>Dododex App:</strong> Download it. It tells you exactly how many tranqs, what food, and how long for every tame.</li>
    <li><strong>Always carry:</strong> Bola, Pike, Stimberries (eat to counteract torpor if a Troodon hits you).</li>
    <li><strong>Taming Effectiveness:</strong> use the best food possible (kibble &gt; mutton &gt; prime meat). Higher effectiveness = more bonus levels.</li>
    <li><strong>Rare Flowers:</strong> carrying them makes ALL nearby dinos aggressive to you. Useful for kiting things into traps.</li>
    <li><strong>Gamma bosses first:</strong> always do Gamma before Beta, Beta before Alpha. Test your army.</li>
    <li><strong>Back up your character:</strong> if you die in a boss fight, you lose your character's items.</li>
    <li><strong>Supply/Loot Drops:</strong> The colored beams contain blueprints. Red and yellow drops can contain amazing saddle BPs. Farm them!</li>
    <li><strong>Explorer Notes:</strong> scattered across the map. Each one gives 2x XP for 10 minutes.</li>
    </ul>
    </Card>
    <Card title="Common Mistakes">
    <ul className="list-disc pl-5 space-y-2 text-sm">
    <li><strong>Building in thatch/wood:</strong> Raiders and dinos destroy it easily.</li>
    <li><strong>Not making a bed:</strong> You'll respawn randomly and lose everything.</li>
    <li><strong>Taming low-level dinos:</strong> Waste of time — level 15 Rex is useless for bosses. Tame 130+.</li>
    <li><strong>Putting levels into Food/Oxygen on combat dinos:</strong> Wasted stats — HP and Melee only for boss dinos.</li>
    <li><strong>Not bringing enough Narcotics for taming:</strong> The tame wakes up half-finished and you lose everything.</li>
    <li><strong>Ignoring the Swamp:</strong> Swamps have leeches (give you Swamp Fever — debuff until cured with Lesser Antidote).</li>
    <li><strong>Fighting a Giganotosaurus unprepared:</strong> It will kill literally everything. Don't fight it.</li>
    <li><strong>Not whistling dinos to passive near cliffs/lava:</strong> They chase enemies and fall to their death.</li>
    </ul>
    </Card>
    </div>
    </div>

    <div id="checklist" className="space-y-6">
    <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/20 pb-2">Full Progression Checklist</h3>
    <Checklist id="full-progression" items={[
        "Phase 1: Stone tools → Cloth armor → Thatch hut → Bed",
        "Phase 1: Tame Dodo, Parasaur, Trike, Moschops",
        "Phase 2: Stone base → Bow + Tranq Arrows → Metal tools",
        "Phase 2: Tame Raptor, Pteranodon, Ankylosaurus, Doedicurus",
        "Phase 3: Tame Argentavis (TOP PRIORITY)",
                                    "Phase 3: Get Fabricator running (need oil + electronics + polymer)",
                                    "Phase 3: Craft Longneck Rifle, Tranq Darts, Flak Armor",
                                    "Phase 3: Tame Baryonyx, Thylacoleo, Beelzebufo",
                                    "Phase 4: Clear caves and collect all 9 artifacts",
                                    "Phase 4: Gather boss tributes from wild dino kills",
                                    "Phase 5: Tame high-level Rexes (and/or Therizinos) + Yutyrannus + Daeodon",
                                    "Phase 5: Set up breeding pairs → breed for best stats",
                                    "Phase 5: Raise and 100% imprint your boss army",
                                    "Phase 6: Defeat Broodmother (Gamma → Beta → Alpha)",
                                    "Phase 6: Defeat Megapithecus (Gamma → Beta → Alpha)",
                                    "Phase 6: Defeat Dragon (Gamma → Beta → Alpha)",
                                    "Phase 7: Prepare for Tek Cave (calien soup, best gear, best dinos)",
                                    "Phase 7: Clear the Tek Cave & Defeat the Overseer",
                                    "Phase 7: ASCEND"
    ]} />
    </div>
    </div>
);
