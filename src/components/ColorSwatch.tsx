
import { useAppDispatch, useAppSelector } from '../app/hooks'

export const ColorSwatch = () => {
  const { red, green, blue } = useAppSelector(state=>state.rgb)

  return (
    <div
      className='color-swatch'
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  )
}
