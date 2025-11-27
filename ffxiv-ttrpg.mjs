import { FFXIV } from "./module/config.mjs";
import AdventurerData from "./module/actor/adventurer.mjs";
import AdventurerSheet from "./module/actor/adventurer-sheet.mjs";

/**
 * Initialize the FFXIV TTRPG system
 */
Hooks.once("init", function() {
    console.log("FFXIV TTRPG | Initializing system");

    // Make config globally accessible
    CONFIG.FFXIV = FFXIV;

    // Register data models
    CONFIG.Actor.dataModels.adventurer = AdventurerData;

    // Unregister default sheets
    Actors.unregisterSheet("core", ActorSheet);
    
    // Register custom sheets
    Actors.registerSheet("ffxiv-ttrpg", AdventurerSheet, {
        types: ["adventurer"],
        makeDefault: true,
        label: "FFXIV.SheetLabels.Adventurer"
    });

    console.log("FFXIV TTRPG | System initialized");
});

/**
 * Log ready message
 */
Hooks.once("ready", function() {
    console.log("FFXIV TTRPG | System ready");
});
