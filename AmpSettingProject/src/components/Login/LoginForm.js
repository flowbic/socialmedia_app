import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,


} from 'react-native';

//import { firebaseRef } from './src/components/Login/firebase';

// Form for Username & Password
// secureTextEntry hiddes the users-input.
// TouchableOpacity changes the layout when writing with keybord.
export default class Login extends Component {

  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     email: '',
  //     password: ''
  //   }
  //
  //   this._login = this._login.bind(this)
  //   this._register = this._register.bind(this)
  // }
  //
  // _login(){
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  //   // Handle Errors here.
  // console.log(error.code);
  //   console.log(error.message);
  //   // ...
  // });
  // }
  render(){
    return (
      <View style= {styles.container}>
      <TextInput
      placeholder='username or email'
      placeholderTextColor='rgba(255,255,255,0.3)'
      returnKeyType='next'
      onChangeText={(text)=> this.setState({email: text})}
      onSubmmitEditing={()=> this.passwordInput.focus()}
      keyboardType='email-address'
      secureTextEntry
      style={styles.input}
      />
      <TextInput
      placeholder='Password'
      onChangeText={(text)=> this.setState({password: text})}
      placeholderTextColor='rgba(255,255,255,0.3)'
      returnKeyType='go'
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.buttonContainer}>
<Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>




      </View>
    );
  }
}


// StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal:10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15

  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'

  }
})