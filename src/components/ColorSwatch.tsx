import { useAppDispatch, useAppSelector } from '../app/hooks'

export const ColorSwatch = () => {
  const { red, green, blue } = useAppSelector((state) => state.rgb)

  function componentToHex(c: number) {
    var hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }

  function rgbToHex(r: number, g: number, b: number) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }

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
        <div className='colorValue' style={{color: color}}>{rgbToHex(red, green, blue)}</div>
      </div>
    </div>
  )
}
