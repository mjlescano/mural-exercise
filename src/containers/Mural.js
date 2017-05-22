import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import Tapable from 'react-native-tapable'
import {
  addItem,
  editItem,
  removeItem,
  selectItem,
  unselectItem,
  updateItemText,
  unselectAllItems,
  duplicateItem
} from '../actions'
import { getItems, getSelectedItemId } from '../reducers'
import Sticky from '../components/Sticky'
import ActionsMenu from '../components/ActionsMenu'

export class Mural extends PureComponent {
  handleTap = (evt) => {
    this.props.dispatch(unselectAllItems())
  }

  handleDoubleTap = (evt) => {
    const { width, height } = Dimensions.get('window')

    const x = evt.pageX - (width / 2)
    const y = evt.pageY - (height / 2)

    this.props.dispatch(addItem({
      position: [x, y],
      kind: 'sticky'
    }))
  }

  handleSelectItem = (id) => {
    this.props.dispatch(selectItem(id))
  }

  handleUnselectItem = (id) => {
    this.props.dispatch(unselectItem(id))
  }

  handleUpdateItemText = (id, text) => {
    this.props.dispatch(updateItemText(id, text))
  }

  handleEditItem = (id) => {
    this.props.dispatch(editItem(id))
  }

  handleRemoveItem = (id) => {
    this.props.dispatch(removeItem(id))
  }

  handleDuplicateItem = (id) => {
    this.props.dispatch(duplicateItem(id))
  }

  render () {
    const { items, selectedItemId } = this.props

    return (
      <Tapable
        onTap={this.handleTap}
        onDoubleTap={this.handleDoubleTap}
        style={styles.wrapper}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <View style={styles.itemsWrapper}>
            {items.map((sticky) => (
              <Sticky
                key={sticky.id}
                {...sticky}
                onSelect={this.handleSelectItem}
                onEdit={this.handleEditItem}
                onUnselect={this.handleUnselectItem}
                onUpdateText={this.handleUpdateItemText} />
            ))}
          </View>
          {items.length === 0 && (
            <View style={styles.addStickyMsgWrapper}>
              <Text style={styles.addStickyMsg}>
                Double tap to add a sticky note
              </Text>
            </View>
          )}
          {selectedItemId && (
            <ActionsMenu
              onEdit={() => this.handleEditItem(selectedItemId)}
              onDuplicate={() => this.handleDuplicateItem(selectedItemId)}
              onRemove={() => this.handleRemoveItem(selectedItemId)} />
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
  selectedItemId: getSelectedItemId(state)
}))(Mural)
