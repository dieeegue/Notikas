import { ViewStyle } from 'react-native'
import { ColorOption } from '../../domain/models/ColorOption'
import theme, { FileColor } from '../../../../theme'

export const circleInput = (color: string): ViewStyle => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color,
  borderRadius: 100,
  height: 34,
  width: 34,
})

export const checkedCircle = (
  colorOption: ColorOption,
  selectedColor: string
): ViewStyle => {
  if (colorOption.value === selectedColor) {
    return {
      width: 45,
      height: 45,
      borderRadius: 100,
      borderColor: colorOption.color,
      borderWidth: 2.5,
    }
  }
  return {}
}

export const checkedButton = (color: FileColor): ViewStyle => {
  return {
    backgroundColor: theme.colors.files[color],
    borderRadius: 10,
    height: 150,
    width: 150,
    padding: 30,
  }
}
