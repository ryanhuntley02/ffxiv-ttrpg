/**
 * Configuration data for the FFXIV TTRPG system
 */
export const FFXIV = {};

/**
 * Job definitions with stats from job_stats.csv
 * HP values are mapped by level: 30, 40, 50, 55, 60
 */
FFXIV.jobs = {
    paladin: {
        label: "Paladin",
        stats: {
            30: { str: 4, dex: 0, vit: 5, int: 1, mnd: 2, defense: 16, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 35 },
            40: { str: 4, dex: 0, vit: 5, int: 1, mnd: 2, defense: 16, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 46 },
            50: { str: 5, dex: 1, vit: 6, int: 2, mnd: 3, defense: 17, magicDefense: 14, vigilance: 13, speed: 5, maxHP: 63 },
            55: { str: 5, dex: 1, vit: 6, int: 2, mnd: 3, defense: 17, magicDefense: 14, vigilance: 13, speed: 5, maxHP: 69 },
            60: { str: 6, dex: 1, vit: 6, int: 2, mnd: 4, defense: 17, magicDefense: 15, vigilance: 14, speed: 5, maxHP: 76 }
        }
    },
    warrior: {
        label: "Warrior",
        stats: {
            30: { str: 4, dex: 2, vit: 5, int: 0, mnd: 1, defense: 15, magicDefense: 12, vigilance: 11, speed: 5, maxHP: 35 },
            40: { str: 4, dex: 2, vit: 5, int: 0, mnd: 1, defense: 15, magicDefense: 12, vigilance: 11, speed: 5, maxHP: 46 },
            50: { str: 5, dex: 3, vit: 6, int: 1, mnd: 2, defense: 16, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 63 },
            55: { str: 5, dex: 3, vit: 6, int: 1, mnd: 2, defense: 16, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 69 },
            60: { str: 6, dex: 3, vit: 7, int: 1, mnd: 2, defense: 17, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 82 }
        }
    },
    darkKnight: {
        label: "Dark Knight",
        stats: {
            30: { str: 4, dex: 0, vit: 4, int: 0, mnd: 4, defense: 15, magicDefense: 14, vigilance: 14, speed: 5, maxHP: 32 },
            40: { str: 4, dex: 0, vit: 4, int: 0, mnd: 4, defense: 15, magicDefense: 14, vigilance: 14, speed: 5, maxHP: 42 },
            50: { str: 5, dex: 1, vit: 5, int: 1, mnd: 5, defense: 16, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 58 },
            55: { str: 5, dex: 1, vit: 5, int: 1, mnd: 5, defense: 16, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 63 },
            60: { str: 6, dex: 1, vit: 5, int: 1, mnd: 6, defense: 17, magicDefense: 16, vigilance: 16, speed: 5, maxHP: 70 }
        }
    },
    whiteMage: {
        label: "White Mage",
        stats: {
            30: { str: 1, dex: 1, vit: 2, int: 3, mnd: 5, defense: 11, magicDefense: 14, vigilance: 15, speed: 5, maxHP: 24 },
            40: { str: 1, dex: 1, vit: 2, int: 3, mnd: 5, defense: 11, magicDefense: 14, vigilance: 15, speed: 5, maxHP: 32 },
            50: { str: 2, dex: 2, vit: 3, int: 4, mnd: 6, defense: 12, magicDefense: 15, vigilance: 16, speed: 5, maxHP: 45 },
            55: { str: 2, dex: 2, vit: 3, int: 4, mnd: 6, defense: 12, magicDefense: 15, vigilance: 16, speed: 5, maxHP: 49 },
            60: { str: 2, dex: 3, vit: 3, int: 4, mnd: 7, defense: 13, magicDefense: 16, vigilance: 17, speed: 5, maxHP: 54 }
        }
    },
    scholar: {
        label: "Scholar",
        stats: {
            30: { str: 0, dex: 1, vit: 2, int: 4, mnd: 5, defense: 12, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 24 },
            40: { str: 0, dex: 1, vit: 2, int: 4, mnd: 5, defense: 12, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 32 },
            50: { str: 1, dex: 2, vit: 3, int: 5, mnd: 6, defense: 13, magicDefense: 16, vigilance: 16, speed: 5, maxHP: 45 },
            55: { str: 1, dex: 2, vit: 3, int: 5, mnd: 6, defense: 13, magicDefense: 16, vigilance: 16, speed: 5, maxHP: 49 },
            60: { str: 1, dex: 2, vit: 3, int: 6, mnd: 7, defense: 13, magicDefense: 17, vigilance: 17, speed: 5, maxHP: 54 }
        }
    },
    astrologian: {
        label: "Astrologian",
        stats: {
            30: { str: 2, dex: 2, vit: 2, int: 2, mnd: 4, defense: 12, magicDefense: 13, vigilance: 14, speed: 5, maxHP: 24 },
            40: { str: 2, dex: 2, vit: 2, int: 2, mnd: 4, defense: 12, magicDefense: 13, vigilance: 14, speed: 5, maxHP: 32 },
            50: { str: 3, dex: 3, vit: 3, int: 3, mnd: 5, defense: 13, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 45 },
            55: { str: 3, dex: 3, vit: 3, int: 3, mnd: 5, defense: 13, magicDefense: 15, vigilance: 15, speed: 5, maxHP: 49 },
            60: { str: 3, dex: 4, vit: 3, int: 3, mnd: 6, defense: 14, magicDefense: 16, vigilance: 16, speed: 5, maxHP: 54 }
        }
    },
    monk: {
        label: "Monk",
        stats: {
            30: { str: 4, dex: 3, vit: 2, int: 1, mnd: 2, defense: 14, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 26 },
            40: { str: 4, dex: 3, vit: 2, int: 1, mnd: 2, defense: 14, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 34 },
            50: { str: 5, dex: 4, vit: 3, int: 2, mnd: 3, defense: 15, magicDefense: 13, vigilance: 13, speed: 5, maxHP: 48 },
            55: { str: 5, dex: 4, vit: 3, int: 2, mnd: 3, defense: 15, magicDefense: 13, vigilance: 13, speed: 5, maxHP: 53 },
            60: { str: 6, dex: 4, vit: 4, int: 2, mnd: 3, defense: 15, magicDefense: 13, vigilance: 13, speed: 5, maxHP: 64 }
        }
    },
    dragoon: {
        label: "Dragoon",
        stats: {
            30: { str: 5, dex: 3, vit: 2, int: 1, mnd: 1, defense: 14, magicDefense: 11, vigilance: 11, speed: 5, maxHP: 26 },
            40: { str: 5, dex: 3, vit: 2, int: 1, mnd: 1, defense: 14, magicDefense: 11, vigilance: 11, speed: 5, maxHP: 34 },
            50: { str: 6, dex: 4, vit: 3, int: 2, mnd: 2, defense: 15, magicDefense: 12, vigilance: 12, speed: 5, maxHP: 48 },
            55: { str: 6, dex: 4, vit: 3, int: 2, mnd: 2, defense: 15, magicDefense: 12, vigilance: 12, speed: 5, maxHP: 53 },
            60: { str: 7, dex: 4, vit: 4, int: 2, mnd: 2, defense: 16, magicDefense: 12, vigilance: 12, speed: 5, maxHP: 64 }
        }
    },
    ninja: {
        label: "Ninja",
        stats: {
            30: { str: 1, dex: 5, vit: 2, int: 1, mnd: 3, defense: 13, magicDefense: 12, vigilance: 13, speed: 6, maxHP: 26 },
            40: { str: 1, dex: 5, vit: 2, int: 1, mnd: 3, defense: 13, magicDefense: 12, vigilance: 13, speed: 6, maxHP: 34 },
            50: { str: 2, dex: 6, vit: 3, int: 2, mnd: 4, defense: 14, magicDefense: 13, vigilance: 14, speed: 6, maxHP: 48 },
            55: { str: 2, dex: 6, vit: 3, int: 2, mnd: 4, defense: 14, magicDefense: 13, vigilance: 14, speed: 6, maxHP: 53 },
            60: { str: 2, dex: 7, vit: 3, int: 2, mnd: 5, defense: 15, magicDefense: 14, vigilance: 15, speed: 6, maxHP: 64 }
        }
    },
    bard: {
        label: "Bard",
        stats: {
            30: { str: 1, dex: 4, vit: 2, int: 3, mnd: 2, defense: 13, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 24 },
            40: { str: 1, dex: 4, vit: 2, int: 3, mnd: 2, defense: 13, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 32 },
            50: { str: 2, dex: 5, vit: 3, int: 4, mnd: 3, defense: 14, magicDefense: 14, vigilance: 13, speed: 5, maxHP: 45 },
            55: { str: 2, dex: 5, vit: 3, int: 4, mnd: 3, defense: 14, magicDefense: 14, vigilance: 13, speed: 5, maxHP: 50 },
            60: { str: 2, dex: 6, vit: 3, int: 4, mnd: 4, defense: 14, magicDefense: 14, vigilance: 14, speed: 5, maxHP: 54 }
        }
    },
    machinist: {
        label: "Machinist",
        stats: {
            30: { str: 3, dex: 4, vit: 2, int: 2, mnd: 1, defense: 14, magicDefense: 12, vigilance: 11, speed: 5, maxHP: 24 },
            40: { str: 3, dex: 4, vit: 2, int: 2, mnd: 1, defense: 14, magicDefense: 12, vigilance: 11, speed: 5, maxHP: 32 },
            50: { str: 4, dex: 5, vit: 3, int: 3, mnd: 2, defense: 15, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 45 },
            55: { str: 4, dex: 5, vit: 3, int: 3, mnd: 2, defense: 15, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 50 },
            60: { str: 4, dex: 6, vit: 3, int: 4, mnd: 2, defense: 15, magicDefense: 13, vigilance: 12, speed: 5, maxHP: 54 }
        }
    },
    blackMage: {
        label: "Black Mage",
        stats: {
            30: { str: 0, dex: 2, vit: 1, int: 5, mnd: 4, defense: 11, magicDefense: 15, vigilance: 14, speed: 5, maxHP: 21 },
            40: { str: 0, dex: 2, vit: 1, int: 5, mnd: 4, defense: 11, magicDefense: 15, vigilance: 14, speed: 5, maxHP: 28 },
            50: { str: 1, dex: 3, vit: 2, int: 6, mnd: 5, defense: 12, magicDefense: 16, vigilance: 15, speed: 5, maxHP: 40 },
            55: { str: 1, dex: 3, vit: 2, int: 6, mnd: 5, defense: 12, magicDefense: 16, vigilance: 15, speed: 5, maxHP: 44 },
            60: { str: 1, dex: 4, vit: 2, int: 7, mnd: 5, defense: 13, magicDefense: 16, vigilance: 15, speed: 5, maxHP: 48 }
        }
    },
    summoner: {
        label: "Summoner",
        stats: {
            30: { str: 1, dex: 3, vit: 1, int: 5, mnd: 2, defense: 13, magicDefense: 15, vigilance: 12, speed: 5, maxHP: 21 },
            40: { str: 1, dex: 3, vit: 1, int: 5, mnd: 2, defense: 13, magicDefense: 15, vigilance: 12, speed: 5, maxHP: 28 },
            50: { str: 2, dex: 4, vit: 2, int: 6, mnd: 3, defense: 14, magicDefense: 16, vigilance: 13, speed: 5, maxHP: 40 },
            55: { str: 2, dex: 4, vit: 2, int: 6, mnd: 3, defense: 14, magicDefense: 16, vigilance: 13, speed: 5, maxHP: 44 },
            60: { str: 3, dex: 4, vit: 2, int: 7, mnd: 3, defense: 15, magicDefense: 16, vigilance: 13, speed: 5, maxHP: 48 }
        }
    }
};
