import { ChangeEvent, Dispatch } from 'react'
import { ColorSlider } from './ColorSlider'
import { AdjustmentAction } from '../features/rgb/rgbSlice'
import { RGBColorType } from '../types'
import { useAppDispatch, useAppSelector } from '../app/hooks'

interface ColorSidersProps extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>
}

export const ColorSliders = () => {
  const dispatch = useAppDispatch()
  const { red, green, blue } = useAppSelector(state=>state.rgb)

  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value })
  }

  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value })
  }

  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value })
  }

  return (
    <section className='color-sliders'>
      <ColorSlider
        id='red-slider'
        label='Red'
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id='green-slider'
        label='Green'
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id='blue-slider'
        label='Blue'
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  )
}
