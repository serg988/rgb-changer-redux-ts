import { useAppDispatch, useAppSelector } from './app/hooks'

import { ColorSwatch } from './components/ColorSwatch'
import { ColorInputs } from './components/ColorInputs'
import { ColorSliders } from './components/ColorSliders'

const Application = () => {
  const themes = useAppSelector((state) => state.rgb)

  return (
    <main
      // style={{
      //   ...themes.dark,
      // }}
    >
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorSliders />
    </main>
  )
}

export default Application
