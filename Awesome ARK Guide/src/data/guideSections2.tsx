import React from 'react';
import { SectionHeader, Card, InfoAlert } from '../components/UI';
import { Checklist } from '../components/Checklist';

export const LateMidGame = () => (
    <div className="space-y-8">
    <SectionHeader title="Late-Mid Game (Levels 70–85)" subtitle="Boss Preparation and Army Building" />

    <Checklist id="late-mid-goals" items={[
        "Gather all artifacts for boss fights",
        "Tame boss-fight creatures (Rexes, Yutyrannus, Daeodon)",
                                  "Start breeding and imprinting your Rex army",
                                  "Craft saddles with the best blueprints you can find",
                                  "Gather boss tributes"
    ]} />

    <Card title="Cave Exploration">
    <p className="mb-4">You need to enter caves to get artifacts required to summon bosses. Many caves are dangerous with high-level creatures, tight spaces, and environmental hazards.</p>
    <strong className="text-emerald-400 block mb-2">Recommended cave mounts:</strong>
    <ul className="list-disc pl-5 space-y-1">
    <li><strong>Baryonyx:</strong> fits in most caves, great damage, heals by eating fish</li>
    <li><strong>Sabertooth:</strong> decent fighter, harvests chitin from cave bugs</li>
    <li><strong>Thylacoleo:</strong> fits in some caves, incredible fighter</li>
    <li><strong>Megatherium:</strong> gets a massive buff when killing bugs (many caves have bugs), great for cave clearing</li>
    <li><strong>Dimorphodon swarm:</strong> shoulder pets or follow group, shred cave creatures</li>
    <li><strong>Otter:</strong> shoulder pet, provides insulation (for cold caves)</li>
    </ul>
    </Card>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card title="Rex Army — The Boss-Killing Machine">
    <p className="mb-2"><strong>Why Rexes?</strong> Highest raw DPS of any easily breedable creature, massive HP pool, available in abundance.</p>
    <strong className="text-emerald-400 block mb-2 mt-4">The Plan:</strong>
    <ol className="list-decimal pl-5 space-y-1">
    <li>Tame high-level female Rexes (level 135+ on max difficulty, 145+ preferred)</li>
    <li>Tame at least 1 high-level male Rex with good stats</li>
    <li>Look for Rexes with high HP and Melee Damage base stats</li>
    <li>Breed them together to combine the best stats</li>
    <li>Raise and imprint the babies (100% imprint = 30% more damage and resistance when ridden)</li>
    <li>Aim for at least 19 Rexes + 1 Yutyrannus for boss fights</li>
    </ol>

    <div className="mt-4 p-3 bg-slate-950/50 rounded-lg border border-slate-800">
    <strong className="text-amber-400 block mb-2">Target Stats for Boss Rexes (Post-Breeding/Leveling):</strong>
    <div className="grid grid-cols-2 gap-4 text-sm">
    <div>
    <span className="text-slate-400 block">Minimum for Broodmother:</span>
    Health: 20,000 HP<br/>
    Melee: 500%+<br/>
    Saddle: Primitive (25) works for Gamma
    </div>
    <div>
    <span className="text-slate-400 block">Target for Dragon/Overseer:</span>
    Health: 30,000–40,000+ HP<br/>
    Melee: 700%+<br/>
    Saddle: 50+ armor (find BPs in cave loot drops)
    </div>
    </div>
    </div>
    </Card>

    <div className="space-y-6">
    <Card title="Yutyrannus — The Force Multiplier">
    <ul className="list-disc pl-5 space-y-2">
    <li>The Yutyrannus courage roar boosts nearby allied dinos' damage and resistance by ~25%</li>
    <li>You ride the Yutyrannus during boss fights while your Rexes (set to aggressive/attack target) do the fighting</li>
    <li>Also has a fear roar that scares away small-mid enemies</li>
    <li><strong>Taming:</strong> Very dangerous — surrounded by Carnos. Use a large taming pen or trap. Tranq darts.</li>
    <li>You only need 1 good Yutyrannus with a decent saddle</li>
    </ul>
    </Card>

    <Card title="Daeodon — The Healer">
    <ul className="list-disc pl-5 space-y-2">
    <li>Passive healing aura keeps your Rexes alive during boss fights</li>
    <li>Burns through food incredibly fast while healing — stuff it with raw meat/cooked meat before fights</li>
    <li>Tame 1–2, breed for good HP</li>
    <li>You bring 1 (sometimes 2) to boss fights</li>
    </ul>
    </Card>
    </div>
    </div>
    </div>
);

export const LateGame = () => (
    <div className="space-y-8">
    <SectionHeader title="Late Game (Levels 85–100)" subtitle="The Final Push to Ascension" />

    <Checklist id="late-game-goals" items={[
        "Finalize Rex army (19 Rexes, 1 Yuty OR 18 Rexes, 1 Yuty, 1 Daeodon)",
                               "Get all 3 artifacts per boss + tributes per fight",
                               "Beat Broodmother Lysrix (Gamma → Beta → Alpha)",
                               "Beat Megapithecus (Gamma → Beta → Alpha)",
                               "Beat Dragon (Gamma → Beta → Alpha)",
                               "Enter the Tek Cave and defeat the Overseer",
                               "ASCEND"
    ]} />

    <Card title="Boss Preparation & Strategy">
    <strong className="text-emerald-400 block mb-2">How Bosses Work:</strong>
    <ol className="list-decimal pl-5 space-y-1 mb-4">
    <li>Collect required Artifacts (from caves) and Tributes (from specific creatures)</li>
    <li>Go to one of the three Obelisks (Green, Blue, Red) or a Tek Transmitter</li>
    <li>Place artifacts + tributes in the Obelisk inventory</li>
    <li>Summon the boss (choose Gamma/Beta/Alpha difficulty)</li>
    <li>You + up to 20 tamed creatures + up to 10 tribe members are teleported to the boss arena</li>
    <li>Kill the boss within the time limit (~27 minutes for Alpha)</li>
    <li>You're teleported back. Anything that dies in the arena is GONE FOREVER</li>
    </ol>

    <InfoAlert>
    <strong>Important Boss Rules:</strong>
    <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>There is no going back for forgotten items — triple-check before teleporting</li>
    <li>Creatures teleported must be within range of the obelisk and on follow/nearby</li>
    <li>Cryopods DO NOT work inside boss arenas — don't rely on them</li>
    <li>No flyers allowed in any Island boss arena (except the Overseer arena, but they are grounded there too)</li>
    <li>Set all Rexes to Aggressive and Attack My Target before entering</li>
    <li>Whistle attack on the boss immediately when the fight starts</li>
    </ul>
    </InfoAlert>
    </Card>
    </div>
);
