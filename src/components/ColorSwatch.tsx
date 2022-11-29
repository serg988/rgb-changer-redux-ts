import { useAppDispatch, useAppSelector } from '../app/hooks'
import { rgbToHex } from '../utilities'

export const ColorSwatch = () => {
  const { red, green, blue, hex } = useAppSelector((state) => state.rgb)

  

  const color = (red+green+blue) < 277 ? 'white' : 'black'

  return (
    <div
      className='color-swatch'
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    >
      <div>
        <div className='colorValue' style={{color: color}}>
          rgb({red}, {green}, {blue})
        </div>
        <div className='colorValue' style={{color: color}}>{hex}</div>
      </div>
    </div>
  )
}
