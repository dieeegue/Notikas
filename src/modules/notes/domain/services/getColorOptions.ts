import theme from '../../../../theme'
import { ColorOption } from '../models/ColorOption'

export const getColorOptions = (): ColorOption[] => [
  {
    color: theme.colors.notes.pastelDarkPurple,
    value: 'pastelDarkPurple',
  },
  {
    color: theme.colors.notes.pastelLightPurple,
    value: 'pastelLightPurple',
  },
  {
    color: theme.colors.notes.pastelPink,
    value: 'pastelPink',
  },
  {
    color: theme.colors.notes.pastelOrange,
    value: 'pastelOrange',
  },
  {
    color: theme.colors.notes.pastelYellow,
    value: 'pastelYellow',
  },
  {
    color: theme.colors.notes.pastelGreen,
    value: 'pastelGreen',
  },
  {
    color: theme.colors.notes.pastelLightBlue,
    value: 'pastelLightBlue',
  },
  {
    color: theme.colors.notes.pastelDarkBlue,
    value: 'pastelDarkBlue',
  },
]
