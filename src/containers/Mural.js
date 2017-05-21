import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import { addSticky } from '../actions'
import { getStickies } from '../reducers'
import Sticky from '../components/Sticky'

export const Mural = ({
  stickies
}) => (
  <View style={styles.container}>
    <StatusBar barStyle='dark-content' />
    <View style={styles.itemsWrapper}>
      {stickies.map((sticky) => (
        <Sticky key={sticky.id} {...sticky} />
      ))}
    </View>
    {stickies.length === 0 && (
      <View style={styles.addStickyMsgWrapper}>
        <Text style={styles.addStickyMsg}>
          Double tap to add a sticky note
        </Text>
      </View>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemsWrapper: {
    width: 0,
    height: 0
  },
  addStickyMsgWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 2,
    borderColor: '#3E454D',
    borderWidth: 1,
    borderStyle: 'dashed'
  },
  addStickyMsg: {
    fontSize: 12,
    color: '#3E454D'
  }
})

export default connect((state) => ({
  stickies: getStickies(state)
}))(Mural)
