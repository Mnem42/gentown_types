export {}

declare global {
    /** Planet info */
    const planet: {
        /** The current day number */
        day: number,

        /** Points to the same data as {@link reg} */
        reg: MainRegistry
    }

    /**
     * Options for {@link Mod.event}.
     */
    type CreateEventOptions = {
        /** Whether to run it daily or not */
        daily?: boolean,
        /** The subject registry for the event */
        subject?: {
            /** The registry name */
            reg: string,
            [key: string]: unknown
        },
        /** The target registry for the event */
        target?: {
            /** The registry name */
            reg: string,
            [key: string]: unknown
        }
        /** The function to run */
        func: (subject: unknown, target: unknown, args: unknown) => void
    }
    const Mod: {
        /**
         * Creates an event.
         * 
         * @param name The name for the event
         * @param options 
         * Options for creating the event. See {@link CreateEventOptions}
         * for full documentation.
         */
        event: (
            name: string,
            options: CreateEventOptions
        ) => void
    };
    let chunkSize: number;

    /**
     * Add a rendering layer to the canvas. This layer can then be accsessed from
     * {@link canvasLayers} for the {@link HTMLCanvasElement} objects and 
     * {@link canvasLayersCtx} for the {@link CanvasRenderingContext2D} objects
     * to draw onto.
     * 
     * @param name The name of the added layer
     */
    function addCanvasLayer(name: string): void;

    /** Object with contexts for render layers */
    const canvasLayersCtx: {
        [layer: string]: CanvasRenderingContext2D
    }
    /** Object with canvas elements for render layers */
    const canvasLayers: {
        [layer: string]: HTMLCanvasElement
    }
    
    /** 
     * Converts the coordinates of a specific chunk
     * into coordinates on the canvas.
     * 
     * @param cx Chunk X
     * @param cy Chunk y
     * @param x  X offset
     * @param y  Y offset 
     * */
    function chunkCoordsToCoords(
        cx: number, 
        cy: number, 
        x: number, 
        y: number
    ): [number, number]
}
