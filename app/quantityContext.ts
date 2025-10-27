'use client'

import { createContext, Dispatch, SetStateAction } from "react";

type quantityType = { quantity: number; setQuantity: Dispatch<SetStateAction<number>>; }

export const quantityContext = createContext<quantityType>({} as quantityType)