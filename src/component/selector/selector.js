
import { createSelector } from "@reduxjs/toolkit";

const LounchPadSelector = (state) => state.lounchPad;

export const lounchPadFormSelector = createSelector([LounchPadSelector], (lounchPad) => lounchPad);
