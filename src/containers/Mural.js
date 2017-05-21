import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, StatusBar } from 'react-native'
import { addSticky } from '../actions'
import { getStickies } from '../reducers'
import Sticky from '../components/Sticky'

export class Mural extends React.Component {
  componentWillMount () {
    this.props.dispatch(addSticky({
      text: 'Una sticky de prueba',
      position: [200, 110]
    }))

    this.props.dispatch(addSticky({
      text: 'Otra sticky de prueba',
      position: [-250, -255]
    }))

    this.props.dispatch(addSticky({
      position: [-320, 70],
      selected: true
    }))
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <View style={styles.itemsWrapper}>
          {this.props.stickies.map((sticky) => (
            <Sticky key={sticky.id} {...sticky} />
          ))}
        </View>
      </View>
    )
  }
}

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
  }
})

export default connect((state) => ({
  stickies: getStickies(state)
}))(Mural)
