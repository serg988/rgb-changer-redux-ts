import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

import { rgbToHex, hexToRgb } from '../../utilities'

import { RGBColorType } from '../../types'

export type AdjustmentAction = {
  type: 'ADJUST_RED' | 'ADJUST_GREEN' | 'ADJUST_BLUE'
  payload: number
}

const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0,
  hex: '#000000',
}

export const rgbSlice = createSlice({
  name: 'rgb',
  initialState,
 
  reducers: {
    adjust_red: (state, action: PayloadAction<number>) => {
      state.red = action.payload
      state.hex = rgbToHex(state.red, state.green, state.blue)
    },
    adjust_green: (state, action: PayloadAction<number>) => {
      state.green = action.payload
      state.hex = rgbToHex(state.red, state.green, state.blue)
    },
    adjust_blue: (state, action: PayloadAction<number>) => {
      state.blue = action.payload
      state.hex = rgbToHex(state.red, state.green, state.blue)
    },
    set_hex: (state, action: PayloadAction<string>) => {
      // state = { red: 0, green: 0, blue: 255 }
      const col = hexToRgb(action.payload)
      state = Object.assign(state, col)
    },
  },
})

export const { adjust_red, adjust_green, adjust_blue, set_hex } =
  rgbSlice.actions

export default rgbSlice.reducer
