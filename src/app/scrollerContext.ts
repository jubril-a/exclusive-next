'use client'

import { createContext, RefObject } from "react"

export const scrollerContext = createContext<RefObject<HTMLDivElement | null> | null>(null)

