import React from 'react';
import {
    Map,
    Pickaxe,
    Hammer,
    Swords,
    Skull,
    Trophy,
    MountainSnow,
    ListOrdered,
    Dna,
    BookOpen,
    User,
    PawPrint
} from 'lucide-react';

import { EarlyGame, EarlyMidGame, MidGame } from './guideSections1';
import { LateMidGame, LateGame } from './guideSections2';
import { BossFights, TekCave } from './guideSections3';
import { ReferenceData } from './guideSections4';
import { PlayerStats, TameStats } from './guideSections5';

export const guideSections = [
    { id: 'early-game', title: '1. Early Game (1–25)', icon: Map, content: <EarlyGame /> },
    { id: 'early-mid-game', title: '2. Early-Mid Game (25–50)', icon: Pickaxe, content: <EarlyMidGame /> },
    { id: 'mid-game', title: '3. Mid Game (50–70)', icon: Hammer, content: <MidGame /> },
    { id: 'late-mid-game', title: '4. Late-Mid Game (70–85)', icon: Swords, content: <LateMidGame /> },
    { id: 'late-game', title: '5. Late Game (85–100)', icon: Skull, content: <LateGame /> },
    { id: 'boss-fights', title: '6. Boss Strategies', icon: Trophy, content: <BossFights /> },
{ id: 'tek-cave', title: '7. Tek Cave & Overseer', icon: MountainSnow, content: <TekCave /> },
{ id: 'reference', title: '8. Reference & Data', icon: BookOpen, content: <ReferenceData /> },
{ id: 'player-stats', title: '9. Player Stats Guide', icon: User, content: <PlayerStats /> },
{ id: 'tame-stats', title: '10. Tame Stats Guide', icon: PawPrint, content: <TameStats /> },
];
