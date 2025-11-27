import { FFXIV } from "../config.mjs";
import AttributesFields from "./templates/attributes.mjs";

const { SchemaField, StringField, NumberField } = foundry.data.fields;

/**
 * Data schema for Adventurer actors (player characters).
 */
export default class AdventurerData extends foundry.abstract.TypeDataModel {
    
    static defineSchema() {
        return {
            // Job selection
            job: new StringField({
                required: true,
                initial: "paladin",
                choices: Object.keys(FFXIV.jobs),
                label: "Job"
            }),

            // Character level
            level: AttributesFields.level,

            // Hit Points
            hp: new SchemaField(AttributesFields.hitPoints),

            // Mana Points
            mp: new SchemaField({
                value: new NumberField({initial: 5, integer: true, min: 0}),
                max: new NumberField({initial: 5, integer: true, min: 0})
            }),

            // Barrier
            barrier: new NumberField({initial: 0, integer: true, min: 0}),

            // Add other attributes as needed
            attributes: new SchemaField({
                strength: new NumberField({initial: 10, integer: true, min: 1}),
                dexterity: new NumberField({initial: 10, integer: true, min: 1}),
                vitality: new NumberField({initial: 10, integer: true, min: 1}),
                intelligence: new NumberField({initial: 10, integer: true, min: 1}),
                mind: new NumberField({initial: 10, integer: true, min: 1})
            }),

            // Defensive stats
            defense: new NumberField({initial: 10, integer: true, min: 0}),
            magicDefense: new NumberField({initial: 10, integer: true, min: 0}),
            vigilance: new NumberField({initial: 10, integer: true, min: 0}),
            speed: new NumberField({initial: 5, integer: true, min: 0}),

            // Profile information
            profile: new SchemaField({
                origins: new StringField({initial: ""}),
                motivePower: new StringField({initial: ""}),
                bond: new StringField({initial: ""}),
                description: new StringField({initial: ""})
            })
        };
    }

    /**
     * Prepare derived data for the actor.
     * This runs after all data is initialized but before rendering.
     */
    prepareDerivedData() {
        // Get job data
        const jobData = FFXIV.jobs[this.job];
        if (!jobData) return;

        // Find the appropriate stat block for the character's level
        // Stats are defined for levels: 30, 40, 50, 55, 60
        const statLevels = [30, 40, 50, 55, 60];
        let statsForLevel = null;
        
        // Find the closest level at or below the character's level
        for (let i = statLevels.length - 1; i >= 0; i--) {
            if (this.level >= statLevels[i] && jobData.stats[statLevels[i]]) {
                statsForLevel = jobData.stats[statLevels[i]];
                break;
            }
        }
        
        // If level is below 30, use level 30 stats (lowest available)
        if (!statsForLevel && jobData.stats[30]) {
            statsForLevel = jobData.stats[30];
        }
        
        // Apply stats if found
        if (statsForLevel) {
            // Set HP
            this.hp.max = statsForLevel.maxHP;
            
            // Apply attributes from stat block
            this.attributes.strength = statsForLevel.str;
            this.attributes.dexterity = statsForLevel.dex;
            this.attributes.vitality = statsForLevel.vit;
            this.attributes.intelligence = statsForLevel.int;
            this.attributes.mind = statsForLevel.mnd;
            
            // Store defensive stats (you may want to add these to the schema)
            this.defense = statsForLevel.defense;
            this.magicDefense = statsForLevel.magicDefense;
            this.vigilance = statsForLevel.vigilance;
            this.speed = statsForLevel.speed;
        }
        
        // Ensure current HP doesn't exceed max
        if (this.hp.value > this.hp.max) {
            this.hp.value = this.hp.max;
        }
    }
}
