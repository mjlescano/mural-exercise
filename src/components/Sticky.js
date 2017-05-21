import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import Tapable from 'react-native-tapable'

export default class Sticky extends PureComponent {
  static width = 180
  static height = 180

  handleTap = (evt) => {
    const {
      id,
      selected,
      onSelect,
      onUnselect
    } = this.props

    selected ? onUnselect(id) : onSelect(id)
  }

  render () {
    const {
      text,
      position,
      selected
    } = this.props

    const wrapperStyle = [
      styles.wrapper,
      {
        left: position[0] - Sticky.width / 2,
        top: position[1] - Sticky.height / 2
      },
      selected && styles.wrapperSelected
    ]

    const containerStyle = [
      styles.container,
      selected && styles.containerSelected
    ]

    return (
      <Tapable
        accessibilityTraits={selected && 'selected'}
        onTap={this.handleTap}
        style={wrapperStyle}>
        <Image
          style={containerStyle}
          source={require('../assets/sticky.png')}>
          <Text style={styles.text}>{text}</Text>
        </Image>
      </Tapable>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: Sticky.width,
    height: Sticky.height
  },
  wrapperSelected: {
    transform: [
      { scale: 1.07 }
    ]
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Sticky.width,
    height: Sticky.height,
    resizeMode: 'cover',
    overflow: 'visible',
    shadowOpacity: 0.18,
    shadowRadius: 1.4,
    shadowOffset: { height: 2 }
  },
  containerSelected: {
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
