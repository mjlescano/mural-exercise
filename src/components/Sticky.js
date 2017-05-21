import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'

export default ({
  text,
  position,
  selected
}) => {
  const style = [
    selected ? styles.selectedShadow : styles.defaultShadow,
    { left: position[0], top: position[1] },
    styles.container
  ]

  return (
    <Image
      accessibilityTraits={selected && 'selected'}
      source={require('../assets/sticky.png')} style={style}>
      <Text style={styles.text}>{text}</Text>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 180,
    height: 180,
    overflow: 'visible',
    resizeMode: 'cover'
  },
  defaultShadow: {
    shadowOpacity: 0.18,
    shadowRadius: 1.4,
    shadowOffset: { height: 2 }
  },
  selectedShadow: {
    shadowOpacity: 0.24,
    shadowRadius: 3.2,
    shadowOffset: { height: 4 }
  },
  text: {
    fontSize: 20,
    color: '#3E454D',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})
