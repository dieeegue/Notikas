import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Linking, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import theme from '../../theme'

interface Props {
  url: string
  text: string
}

export const IconLink: React.FC<Props> = ({ url, text }) => {
  const handlePress = () => {
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity style={styles.linkContainer} onPress={handlePress}>
      <View style={styles.textContainer}>
        <Entypo name="link" size={18} color="#F4AAB9" />
        <Text style={styles.linkText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: '#FDE4EA',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  linkText: {
    color: '#F4AAB9',
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.montserratBold,
  },
})
