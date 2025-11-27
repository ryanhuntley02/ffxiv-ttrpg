const {NumberField, SchemaField, StringField} = foundry.data.fields;


/**
 * Shared attributes fields for all Actor data schemas.
 */
export default class AttributesFields {
    /**
     * Hit points attribute fields for Characters, NPCs, and Monsters.
     */
    static get hitPoints() {
        return {
            value: new NumberField({nullable: false, integer: true, min: 0, initial: 0}),
            max: new NumberField({nullable: false, integer: true, min: 0, initial: 0}),
            temp: new NumberField({nullable: false, integer: true, min: 0, initial: 0})
        }
    }

    /**
     * Level field for characters
     */
    static get level() {
        return new NumberField({nullable: false, integer: true, min: 1, initial: 1, max: 100});
    }
}