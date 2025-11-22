export {}

declare global {
    /** The main registry storage. */
    const reg: MainRegistry

    /** Type for the "main" registry containing all subregistries. */
    type MainRegistry = {
        /** A registry mapping the names of other registries to IDs */
        registry: SubRegistry & Record<string, number>,
        [name: string]: SubRegistry
    }

    /** A subregistry. */
    type SubRegistry = {
        /** The subregistry ID */
        _id: number
    } & Record<string, RegistryItem>

    /** A registry item. */
    interface RegistryItem {
        /** The item ID */
        id: number,
        /** The registry the item is from */
        _reg: string,
        /** The day the item was added */
        start: number,
        [key: string]: unknown
    }

    /** 
     * Creates a subregistry with the provided name 
     * 
     * @param name The name of the subregistry to create
     */
    function regCreate(name: string): void

    /** 
     * Add an item to a subregistry 
     * 
     * @param subreg The name of the subregistry
     * @param obj    The object 
     * 
     * @returns The registry item that was created
     */
    function regAdd<T>(subreg: string, obj: T): T & RegistryItem

    /** 
     * Get an object from a subregistry 
     * 
     * @param subreg The name of the subregistry
     * @param id     The ID of the object 
     * 
     * @returns The item requested
     */
    function regGet<T extends RegistryItem>(subreg: string, id: number): T

    /** 
     * Remove an item from a subregistry
     * 
     * @param subreg The name of the subregistry
     * @param id     The ID of the object 
     */
    function regRemove(subreg: string, id: number): void

    /** 
     * Delete a subregistry
     * 
     * @param subreg The name of the subregistry
     */
    function regDelete(subreg: string): void
}