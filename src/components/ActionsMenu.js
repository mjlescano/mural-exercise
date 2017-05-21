import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'

export default ({
  onRemove
}) => (
  <View
    style={[styles.container, { width: Dimensions.get('window').width }]}>
    {onRemove && (
      <TouchableHighlight
        onPress={onRemove}
        accessibilityLabel='Delete selected items'>
        <Image source={require('../assets/remove.png')} style={styles.icon} />
      </TouchableHighlight>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderColor: '#bbb',
    borderTopWidth: 1,
    backgroundColor: '#F4F4F4'
  },
  icon: {
    width: 30,
    height: 30
  }
})
