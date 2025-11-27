import { FFXIV } from "../config.mjs";

/**
 * Extended Actor class for FFXIV system
 */
export default class FFXIVActor extends Actor {
    /**
     * Pre-create hook to set default token bars and initial HP
     */
    async _preCreate(data, options, user) {
        await super._preCreate(data, options, user);
        
        // Set default token bars for adventurer actors
        if (data.type === "adventurer") {
            const updates = {
                "prototypeToken.bar1": { attribute: "hp" },
                "prototypeToken.bar2": { attribute: "mp" },
                "prototypeToken.displayName": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
                "prototypeToken.displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER
            };
            
            // Calculate max HP based on job and level
            const job = data.system?.job || "paladin";
            const level = data.system?.level || 30;
            const jobData = FFXIV.jobs[job];
            
            if (jobData) {
                // Find appropriate stat block
                const statLevels = [30, 40, 50, 55, 60];
                let statsForLevel = null;
                
                for (let i = statLevels.length - 1; i >= 0; i--) {
                    if (level >= statLevels[i] && jobData.stats[statLevels[i]]) {
                        statsForLevel = jobData.stats[statLevels[i]];
                        break;
                    }
                }
                
                if (!statsForLevel && jobData.stats[30]) {
                    statsForLevel = jobData.stats[30];
                }
                
                // Set initial HP to max HP
                if (statsForLevel) {
                    updates["system.hp.value"] = statsForLevel.maxHP;
                    updates["system.hp.max"] = statsForLevel.maxHP;
                }
            }
            
            this.updateSource(updates);
        }
    }
}
