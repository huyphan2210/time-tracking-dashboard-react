interface ActionInterface {
    actionImg: string,
    title: string,
    hours: {
        current: number,
        previous: number
    }
}

export type { ActionInterface }
