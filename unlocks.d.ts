export {}

declare global {
    type UnlockTreeItem = {
        level: number,
        name: string,
        emoji?: string,

        influences?: Record<string, number>,
        influencesNo?: Record<string, number>,
        needsUnlock?: Record<string, number>,

        message: string,
        [key:string]:unknown
    }

    type UnlockTree = {
        levels: UnlockTreeItem[]
    }

    declare const unlockTree: Record<string,UnlockTree>
}   