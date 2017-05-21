import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import Tapable from 'react-native-tapable'
import { addItem, removeItems, selectItem, unselectItem } from '../actions'
import { getItems, getSelectedItemsIds } from '../reducers'
import Sticky from '../components/Sticky'
import ActionsMenu from '../components/ActionsMenu'

export class Mural extends PureComponent {
  handleDoubleTap = (evt) => {
    const { width, height } = Dimensions.get('window')

    const x = evt.pageX - (width / 2)
    const y = evt.pageY - (height / 2)

    this.props.dispatch(addItem({
      position: [x, y],
      kind: 'sticky'
    }))
  }

  handleStickySelect = (id) => {
    this.props.dispatch(selectItem(id))
  }

  handleStickyUnselect = (id) => {
    this.props.dispatch(unselectItem(id))
  }

  handleRemoveItems = () => {
    this.props.dispatch(removeItems(this.props.selectedItemsIds))
  }

  render () {
    const { items, selectedItemsIds } = this.props

    return (
      <Tapable onDoubleTap={this.handleDoubleTap} style={styles.wrapper}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <View style={styles.itemsWrapper}>
            {items.map((sticky) => (
              <Sticky
                key={sticky.id}
                {...sticky}
                onSelect={this.handleStickySelect}
                onUnselect={this.handleStickyUnselect} />
            ))}
          </View>
          {items.length === 0 && (
            <View style={styles.addStickyMsgWrapper}>
              <Text style={styles.addStickyMsg}>
                Double tap to add a sticky note
              </Text>
            </View>
          )}
          {selectedItemsIds.length > 0 && (
            <ActionsMenu onRemove={this.handleRemoveItems} />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4'
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
  items: getItems(state),
  selectedItemsIds: getSelectedItemsIds(state)
}))(Mural)
