import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'

export default ({
  onEdit,
  onRemove,
  onDuplicate
}) => (
  <View
    style={[styles.container, { width: Dimensions.get('window').width }]}>
    {onEdit && (
      <ActionButton
        onPress={onEdit}
        accessibilityLabel='Edit selected item'
        icon={require('../assets/edit.png')} />
    )}
    {onRemove && (
      <ActionButton
        onPress={onRemove}
        accessibilityLabel='Delete selected item'
        icon={require('../assets/remove.png')} />
    )}
    {onDuplicate && (
      <ActionButton
        onPress={onDuplicate}
        accessibilityLabel='Duplicate selected item'
        icon={require('../assets/duplicate.png')} />
    )}
  </View>
)

const ActionButton = ({
  onPress,
  accessibilityLabel,
  icon
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.button}
    accessibilityLabel={accessibilityLabel}>
    <Image source={icon} style={styles.icon} />
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderColor: '#bbb',
    borderTopWidth: 1,
    backgroundColor: '#F4F4F4'
  },
  button: {
    marginLeft: 5,
    marginRight: 5
  },
  icon: {
    width: 30,
    height: 30
  }
})
