import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Alchemy from './Alchemy';
import Todo from './Todo';
import Reddit from './Reddit';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Todo /> 
        </View>
        <View style={styles.body}> 
          <Text style={styles.bodyItem}>Here will be list</Text>
        </View>
        <View style={styles.redditBody}> 
            {/* <Reddit /> */}
            <Alchemy />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24
  },

  header: {
    marginTop: 24
  },

  body: {
    flex: 0.3,
    backgroundColor: 'red',
    marginTop: 16,
    padding: 16,

  },

  redditBody: {
    flex: 0.7,
    backgroundColor: 'red',
    marginTop: 16,
  },

  bodyItem: {
    color: 'white'
  },

});
