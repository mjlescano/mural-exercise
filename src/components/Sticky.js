import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, TextInput } from 'react-native'
import Tapable from 'react-native-tapable'

export default class Sticky extends PureComponent {
  static width = 180
  static height = 180
  static padding = 10
  static fontSize = 20
  static lineHeight = 23

  handleDoubleTap = (evt) => {
    const { id, editing, onEdit } = this.props

    if (editing) return null

    onEdit(id)
  }

  handleTap = (evt) => {
    const {
      id,
      selected,
      onSelect,
      onUnselect
    } = this.props

    selected ? onUnselect(id) : onSelect(id)
  }

  handleTextChange = (text) => {
    const { id, onUpdateText } = this.props
    onUpdateText(id, text)
  }

  handleTextBlur = () => {
    const { id, onUnselect } = this.props
    onUnselect(id)
  }

  render () {
    const {
      text,
      position,
      selected,
      editing
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
        onDoubleTap={this.handleDoubleTap}
        style={wrapperStyle}>
        <Image
          style={containerStyle}
          source={require('../assets/sticky.png')}>
          {editing && (
            <StickyTextInput
              value={text}
              onBlur={this.handleTextBlur}
              onChange={this.handleTextChange} />
          )}
          {!editing && (
            <Text style={styles.text}>{text}</Text>
          )}
        </Image>
      </Tapable>
    )
  }
}

const StickyTextInput = ({
  value,
  onBlur,
  onChange
}) => (
  <TextInput
    defaultValue={value}
    onBlur={onBlur}
    onChangeText={onChange}
    returnKeyType='done'
    multiline
    autoFocus
    selectTextOnFocus
    blurOnSubmit
    style={[
      styles.text,
      {
        // multiline TextInput with autogrow sucks.
        // This estimates the number of lines needed by the amount of content
        // TODO: reasearch native solution, or a hack like render a hidden Text
        height: (Math.ceil(value.length / 9) || 1) * Sticky.lineHeight
      }
    ]} />
)

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
    padding: 10,
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
    width: Sticky.width - Sticky.padding * 2,
    maxHeight: Sticky.height - Sticky.padding * 2,
    minHeight: Sticky.lineHeight,
    lineHeight: Sticky.lineHeight,
    overflow: 'hidden',
    fontSize: Sticky.fontSize,
    color: '#3E454D',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})
