import theme from '../../../../theme'
import { ColorOption } from '../models/ColorOption'

export const getColorOptions = (): ColorOption[] => [
  {
    color: theme.colors.files.pastelDarkPurple,
    value: 'pastelDarkPurple',
  },
  {
    color: theme.colors.files.pastelLightPurple,
    value: 'pastelLightPurple',
  },
  {
    color: theme.colors.files.pastelPink,
    value: 'pastelPink',
  },
  {
    color: theme.colors.files.pastelOrange,
    value: 'pastelOrange',
  },
  {
    color: theme.colors.files.pastelYellow,
    value: 'pastelYellow',
  },
  {
    color: theme.colors.files.pastelGreen,
    value: 'pastelGreen',
  },
  {
    color: theme.colors.files.pastelLightBlue,
    value: 'pastelLightBlue',
  },
  {
    color: theme.colors.files.pastelDarkBlue,
    value: 'pastelDarkBlue',
  },
]
