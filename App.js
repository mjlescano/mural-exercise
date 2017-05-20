import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MURAL Exercise</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8CD47',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#3E454D',
    fontSize: 30
  }
})
