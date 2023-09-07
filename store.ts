import { createStore } from 'zustand'
import { createContext } from "react";

interface PriceProps {
    value: number
}

interface PriceState extends PriceProps {
    addValue: () => void
}

type PriceStore = ReturnType<typeof createPriceStore>

const createPriceStore = (initProps?: Partial<PriceProps>) => {
    const DEFAULT_PROPS: PriceProps = {
        value: 0,
    }
    return createStore<PriceState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        addValue: () => set((state) => ({ value: ++state.value}))
    }))
}

export const PriceContext = createContext<PriceStore | null>(null)




