import { FFXIV } from "../config.mjs";

/**
 * Character sheet for Adventurer actors
 */
export default class AdventurerSheet extends ActorSheet {
    
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["ffxiv", "sheet", "actor", "adventurer"],
            width: 800,
            height: 1024,
            resizable: true,
            minimizable: true,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }],
            dragDrop: [{ dragSelector: ".item-list .item", dropSelector: null }]
        });
    }

    /** @override */
    setPosition(options={}) {
        const position = super.setPosition(options);
        // Enforce minimum dimensions
        if (position.width < 750) position.width = 750;
        if (position.height < 800) position.height = 800;
        return position;
    }

    /** @override */
    get template() {
        return "systems/ffxiv-ttrpg/templates/actor/adventurer-sheet.hbs";
    }

    /** @override */
    async getData(options) {
        // Retrieve the data structure from the base sheet
        const context = super.getData(options);

        // Use a safe clone of the actor data for further operations
        const actorData = this.document.toObject(false);

        // Add the actor's data to context for easier access
        context.system = actorData.system;
        context.flags = actorData.flags;

        // Add config data
        context.config = FFXIV;

        // Prepare items
        context.items = actorData.items;
        context.effects = actorData.effects;

        // Add roll data for TinyMCE editors
        context.rollData = this.actor.getRollData();

        return context;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;

        // Add roll handlers, inventory listeners, etc. here
    }
}
