import { useAppDispatch, useAppSelector } from './app/hooks'

import { ColorSwatch } from './components/ColorSwatch'
import { ColorInputs } from './components/ColorInputs'
import { ColorSliders } from './components/ColorSliders'
import { themes } from './components/themes'
import './style.scss'

const Application = () => {

  return (
    <main
      style={{
        ...themes.dark,
      }}
    >
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorSliders />
    </main>
  )
}

export default Application
