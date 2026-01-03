declare global {
    type UnlockTreeItem = {
        level: number,
        name: string,
        emoji?: string,
        influences?: Record<string, unknown>,
        influencesNo?: Record<string, unknown>,
        needsUnlock?: Record<string, unknown>,
        [key:string]:unknown
    }

    type UnlockTree = {
        levels: UnlockTreeItem[]
    }

    declare const unlockTree: UnlockTree
}   