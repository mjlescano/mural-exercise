import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import Tapable from 'react-native-tapable'
import { addSticky, selectItem, unselectItem } from '../actions'
import { getStickies } from '../reducers'
import Sticky from '../components/Sticky'

export class Mural extends PureComponent {
  handleDoubleTap = (evt) => {
    const { width, height } = Dimensions.get('window')

    const x = evt.pageX - (width / 2)
    const y = evt.pageY - (height / 2)

    this.props.dispatch(addSticky({
      position: [x, y]
    }))
  }

  handleStickySelect = (id) => {
    this.props.dispatch(selectItem(id))
  }

  handleStickyUnselect = (id) => {
    this.props.dispatch(unselectItem(id))
  }

  render () {
    const { stickies } = this.props

    return (
      <Tapable onDoubleTap={this.handleDoubleTap} style={styles.wrapper}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <View style={styles.itemsWrapper}>
            {stickies.map((sticky) => (
              <Sticky
                key={sticky.id}
                {...sticky}
                onSelect={this.handleStickySelect}
                onUnselect={this.handleStickyUnselect} />
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
      </Tapable>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
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
