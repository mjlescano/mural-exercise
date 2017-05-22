import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import Tapable from 'react-native-tapable'
import * as actionCreators from '../actions'
import { getItems, getSelectedItemId } from '../reducers'
import Sticky from '../components/Sticky'
import ActionsMenu from '../components/ActionsMenu'

const Mural = ({
  items,
  selectedItemId,
  unselectAllItems,
  addItemOnPosition,
  selectItem,
  editItem,
  unselectItem,
  updateItemText,
  duplicateItem,
  removeItem
}) => (
  <Tapable
    onTap={unselectAllItems}
    onDoubleTap={addItemOnPosition}
    style={styles.wrapper}>
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.itemsWrapper}>
        {items.map((sticky) => (
          <Sticky
            key={sticky.id}
            {...sticky}
            onSelect={selectItem}
            onEdit={editItem}
            onUnselect={unselectItem}
            onUpdateText={updateItemText} />
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
          onEdit={() => editItem(selectedItemId)}
          onDuplicate={() => duplicateItem(selectedItemId)}
          onRemove={() => removeItem(selectedItemId)} />
      )}
    </View>
  </Tapable>
)

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
}), (dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
  addItemOnPosition: (evt) => {
    const { width, height } = Dimensions.get('window')

    const x = evt.pageX - (width / 2)
    const y = evt.pageY - (height / 2)

    dispatch(actionCreators.addItem({
      position: [x, y],
      kind: 'sticky'
    }))
  }
}))(Mural)
