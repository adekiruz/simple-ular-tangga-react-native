import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Halaman Login',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor() {
    super();
  
    this.state = {
      name: ''
    };
  }

  addName(text) {
    this.setState({
      name: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> Login </Text>
        <TextInput 
          style={styles.inputLogin} 
          placeholder='Masukkan Nama Anda'
          onChangeText={(text) => this.addName(text)} />
        <Button 
          title='Login' 
          onPress={() => this.props.navigation.navigate('PlayPage', { name: this.state.name })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLogin: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 2.5,
    padding: 8,
    margin: 5,
    textAlign: 'center' 
  },
});