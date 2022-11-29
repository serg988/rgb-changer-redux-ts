import { useAppDispatch, useAppSelector } from './app/hooks'
import { set_hex } from './features/rgb/rgbSlice'

import { ColorSwatch } from './components/ColorSwatch'
import { ColorInputs } from './components/ColorInputs'
import { ColorSliders } from './components/ColorSliders'
import { themes } from './components/themes'
import { SketchPicker } from 'react-color'
import './style.scss'

const Application = () => {
  const dispatch = useAppDispatch()
  const { red, green, blue, hex } = useAppSelector((state) => state.rgb)
  const handleChangeComplete = (color: { hex: string }) => {
    dispatch(set_hex(color.hex))
  }

  return (
    <>
      <main
        style={{
          ...themes.dark,
        }}
      >
        <SketchPicker
          width='40%'
          color={hex}
          onChangeComplete={handleChangeComplete}
        />
        <ColorSwatch />
        {/* <ColorInputs {...rgb} /> */}
      </main>
      <ColorSliders />
    </>
  )
}

export default Application
