import React from 'react';
import { SectionHeader, Card, TameCard, InfoAlert } from '../components/UI';
import { Checklist } from '../components/Checklist';

export const EarlyGame = () => (
    <div className="space-y-8">
    <SectionHeader title="Early Game (Levels 1–25)" subtitle="Surviving the first days on The Island" />

    <Card title="Spawn Location">
    <p className="mb-2"><strong className="text-emerald-400">Best spawn:</strong> South Zone 1 or South Zone 2 (the southern beaches).</p>
    <p>They are the safest with the lowest-level threats. Avoid the north, swamps, and redwoods — they will kill you instantly.</p>
    </Card>

    <Checklist id="first-10-mins" items={[
        "Punch trees → get wood, thatch",
        "Pick bushes → get fiber, berries (eat blue Azulberries or others, AVOID white Stimberries)",
                                "Pick up stones from the ground",
                                "Craft: Stone Pick → harvest more from trees (thatch) and rocks (stone/flint)",
                                "Craft: Stone Hatchet → harvest wood from trees, meat/hide from dead dinos",
                                "Kill Dodos and Lystrosaurus for hide, meat, and XP",
                                "Craft a Campfire → cook raw meat (eating raw meat is inefficient; cooked meat heals and fills food better)",
                                "Craft a Spear → your first real weapon"
    ]} />

    <Card title="Engrams to Prioritize">
    <ul className="space-y-2">
    <li><strong className="text-emerald-400">Level 1–5:</strong> Stone Pick, Stone Hatchet, Campfire, Torch, Spear</li>
    <li><strong className="text-emerald-400">Level 5–10:</strong> Cloth Armor (full set), Storage Box, Mortar & Pestle, Sleeping Bag</li>
    <li><strong className="text-emerald-400">Level 10–15:</strong> Slingshot, Bow, Narcotic (Mortar & Pestle), Wood/Thatch building pieces, Bed (Simple Bed)</li>
    <li><strong className="text-emerald-400">Level 15–20:</strong> Tranq Arrows, Narcotics, Preserving Bin, Bola, Raptor Saddle, Phiomia Saddle, Trike Saddle</li>
    <li><strong className="text-emerald-400">Level 20–25:</strong> Refining Forge, Smithy, Hide Armor set, Pike, Parasaur Saddle</li>
    </ul>
    </Card>

    <Card title="First Base">
    <ul className="list-disc pl-5 space-y-1">
    <li>Build on the south beach on relatively flat ground</li>
    <li>Start with thatch, upgrade to wood ASAP</li>
    <li>Minimum: 2x2 or 3x3 foundation, walls, ceiling, doorframe + door</li>
    <li>Place a Bed inside (acts as respawn point; sleeping bags are single-use)</li>
    <li>Place storage boxes, a campfire (or two), and a mortar & pestle inside</li>
    </ul>
    </Card>

    <div>
    <h3 className="text-xl font-bold text-slate-200 mb-4">First Tames</h3>
    <p className="text-slate-400 mb-4 text-sm">Use the Bola + Slingshot or Bola + Club combo on small dinos.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <TameCard name="Dodo" why="Practice taming, eggs for kibble later" how="Punch it unconscious, feed berries" />
    <TameCard name="Parasaur" why="Early mount, turret mode detects enemies" how="Bola → slingshot/tranq arrows, feed berries" />
    <TameCard name="Lystrosaurus" why="Passive tame — pet it. Gives XP boost to nearby tames" how="Walk up, feed by hand" />
    <TameCard name="Trike" why="Berry harvester, decent early defense" how="Tranq arrows to the body (NOT the head — head has a shield), feed berries (mejoberries preferred)" />
    <TameCard name="Moschops" why="Passive tame, great early harvester (set to harvest whatever you need)" how="Feed whatever it wants (can be picky — reroll by finding a different one)" />
    <TameCard name="Dilophosaurus" why="Cheap early guard dog pack" how="Bola + club, feed meat" />
    </div>
    </div>

    <InfoAlert>
    <strong>Narcotics — Your Best Friend:</strong> Craft at Mortar & Pestle (5 Narcoberries + 1 Spoiled Meat = 1 Narcotic). Use narcotics to keep dinos unconscious during taming. Start stockpiling narcoberries using your Trike. Get spoiled meat by splitting raw meat into stacks of 1 in your inventory — it spoils faster.
    </InfoAlert>
    </div>
);

export const EarlyMidGame = () => (
    <div className="space-y-8">
    <SectionHeader title="Early-Mid Game (Levels 25–50)" subtitle="Transitioning to metal and better tames" />

    <Checklist id="early-mid-goals" items={[
        "Get a full set of Hide Armor, then Chitin Armor",
        "Build a Smithy and Refining Forge",
        "Get metal tools (Metal Pick, Metal Hatchet)",
                                   "Tame key utility dinos",
                                   "Upgrade base to Stone building tier",
                                   "Start making Tranquilizer Arrows (bow + tranq arrows)"
    ]} />

    <Card title="Metal Farming">
    <ul className="list-disc pl-5 space-y-1">
    <li>Metal rocks = smooth, gold/bronze-colored rocks</li>
    <li>Found on mountains, rivers, and scattered around the island</li>
    <li>Harvest with a Metal Pick (or Ankylosaurus later — game-changer)</li>
    <li>Smelt in Refining Forge: 2 metal ore → 1 metal ingot</li>
    <li>Metal tools are 10x better than stone tools — prioritize this</li>
    </ul>
    </Card>

    <div>
    <h3 className="text-xl font-bold text-slate-200 mb-4">Key Tames (This Phase)</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <TameCard name="Raptor" why="Fast mount, use pack for combat" how="Bola → tranq arrows, feed raw meat (prime meat preferred)" />
    <TameCard name="Pteranodon" why="FIRST FLYER — changes the game" how="Bola → tranq arrows, feed raw meat/prime meat. Low torpor — watch carefully" />
    <TameCard name="Ankylosaurus" why="#1 metal/flint/crystal harvester" how="Tranq arrows (bring many — tanky), feed mejoberries or kibble" />
    <TameCard name="Doedicurus" why="#1 stone harvester, curls up for defense" how="Tranq arrows, feed mejoberries or kibble" />
    <TameCard name="Carbonemys (Turtle)" why="Tanky early-game mount, good for soaking damage" how="Tranq arrows, feed mejoberries" />
    <TameCard name="Iguanodon" why="Great travel mount (infinite stamina in bipedal mode)" how="Tranq arrows, feed berries" />
    <TameCard name="Ichthyosaurus" why="Passive tame (feed in water) — fast ocean mount" how="Swim up to it, feed raw meat from last hotbar slot" />
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card title="Crafting Priorities">
    <ul className="list-disc pl-5 space-y-1">
    <li>Crossbow — better than bow for tranq arrows, underwater use</li>
    <li>Tranq Arrows — (1 stone arrow + 1 narcotic at Mortar & Pestle)</li>
    <li>Metal tools — Pick, Hatchet, Pike, Shield</li>
    <li>Spy Glass — check dino levels before taming (always aim for high levels: 130+ on official difficulty)</li>
    <li>Stone building pieces — much more durable than wood</li>
    <li>Preserving Bin + Sparkpowder — keeps food from spoiling as fast</li>
    </ul>
    </Card>

    <Card title="Base Upgrade">
    <ul className="list-disc pl-5 space-y-1">
    <li>Transition to full stone base</li>
    <li>Build a taming pen: 4 stone doorframes in a square with ramps on one side. Lure dinos in, run out, tranq them safely</li>
    <li>Start thinking about a more permanent base location</li>
    </ul>
    </Card>
    </div>

    <Card title="Best Base Locations on The Island">
    <div className="space-y-4">
    <div><strong className="text-emerald-400">South Beach (early):</strong> Safe, flat, easy resources. Cons: Far from metal, gets raided (PvP).</div>
    <div><strong className="text-emerald-400">Hidden Lake (NE of volcano):</strong> Beautiful, enclosed, all resources nearby. Cons: Cold at night, carnivores wander in.</div>
    <div><strong className="text-emerald-400">Herbivore Island (SE):</strong> No carnivores spawn, very safe. Cons: Isolated, no metal (bring anky), boring.</div>
    <div><strong className="text-emerald-400">Cragg's Island (south coast):</strong> Safe island, good beginner+ spot. Cons: Slightly isolated.</div>
    <div><strong className="text-emerald-400">Near the Volcano:</strong> Close to metal, obsidian, crystal. Cons: Dangerous, hot, lava.</div>
    <div><strong className="text-emerald-400">Redwoods:</strong> Central, near resources. Cons: Thylacoleos drop on you from trees, terror birds, very dangerous.</div>
    </div>
    </Card>
    </div>
);

export const MidGame = () => (
    <div className="space-y-8">
    <SectionHeader title="Mid Game (Levels 50–70)" subtitle="Industrialization and Cave Exploration" />

    <Checklist id="mid-game-goals" items={[
        "Tame an Argentavis (your #1 all-purpose flyer)",
                              "Build an Industrial-level operation (Fabricator, etc.)",
                              "Start Cementing Paste production",
                              "Explore caves for artifacts",
                              "Get a breeding program started",
                              "Tame ocean creatures if needed"
    ]} />

    <InfoAlert>
    <strong>Argentavis Taming — Priority #1 This Phase:</strong> The Argentavis (Argy) is the most important tame on The Island. It carries significant weight, can carry many creatures (Ankylo, Doedicurus, etc.), has good combat stats, its saddle acts as a mobile smithy, and it heals when eating corpses.
    <br/><br/>
    <strong>Taming:</strong> Build an Argy trap (4 stone doorframes + 2 ramps, with a gap you can fly through on a Pteranodon but the Argy can't). Aggro with Pteranodon, fly through the trap, it gets stuck, land outside, tranq it. Feed raw mutton (Ovis) or prime meat or kibble.
    </InfoAlert>

    <div>
    <h3 className="text-xl font-bold text-slate-200 mb-4">Critical Mid-Game Tames</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <TameCard name="Argentavis" why="Flying tank, weight carrier, mobile smithy" how="Trap and tranq" />
    <TameCard name="Thylacoleo" why="Best land combat mount — bleed damage, climb walls" how="Tranq darts, feed cooked mutton/kibble" />
    <TameCard name="Baryonyx" why="Land AND water mount, tail spin stuns water creatures, fits in most caves" how="Tranq darts, feed fish meat" />
    <TameCard name="Beelzebufo (Frog)" why="Kills bugs → generates Cementing Paste" how="Tranq darts, feed mutton/meat" />
    <TameCard name="Sabertooth" why="Good cave mount, harvests chitin/hide well" how="Bola/Trap, tranq darts" />
    <TameCard name="Castoroides (Beaver)" why="Mobile smithy, gathers wood, builds beaver dams" how="Trap, tranq darts" />
    <TameCard name="Daeodon" why="Passive healing aura — essential for boss fights later" how="Trap, tranq darts, feed mutton/meat" />
    <TameCard name="Ovis (Sheep)" why="Harvest for mutton — best taming food for many carnivores" how="Passive tame (feed Sweet Vegetable Cake)" />
    <TameCard name="Mammoth" why="Best wood harvester" how="Trap, tranq darts" />
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card title="Cementing Paste — You Need Tons">
    <p className="mb-2">Three methods:</p>
    <ol className="list-decimal pl-5 space-y-2">
    <li><strong>Beaver Dams:</strong> check rivers for wild beaver dams, steal the Cementing Paste (WARNING: beavers will aggro)</li>
    <li><strong>Beelzebufo:</strong> ride in the swamp, kill Meganeura (dragonflies) and Titanomyrma (ants) → auto-converts to Cementing Paste</li>
    <li><strong>Mortar & Pestle:</strong> 4 Chitin + 8 Stone = 1 Cementing Paste (slow, but works)</li>
    </ol>
    </Card>

    <Card title="Fabricator & Crafting">
    <ul className="list-disc pl-5 space-y-2 mb-4">
    <li>Requires: Refining Forge-smelted metal</li>
    <li>Powered by Gasoline (5 hide + 6 oil in refining forge)</li>
    <li>Unlocks: Polymer, Electronics, advanced weapons, armor, and saddles</li>
    <li>Oil sources: Ocean floor (dark rocks), Basilosaurus, oil nodes in the snow biome, Dung Beetles (convert poop → oil + fertilizer)</li>
    </ul>
    <strong className="text-emerald-400 block mb-2">Key Crafting:</strong>
    <ul className="list-disc pl-5 space-y-1">
    <li>Fabricator</li>
    <li>Longneck Rifle + Tranq Darts (much better than tranq arrows — more torpor, less damage)</li>
    <li>Flak Armor (metal armor — huge defensive upgrade)</li>
    <li>Compound Bow (optional but great)</li>
    <li>Cryopods if on a version that supports them</li>
    </ul>
    </Card>
    </div>
    </div>
);
