import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View style = {styles.content}>
        <View style = {styles.textWrapper}>
          <Text style = {styles.hiText}>Xin chào!</Text>
          <Text style = {styles.userText}>HOANG NGHIA DUC</Text>
          <Text style = {styles.userText}>0358804452</Text>
        </View>
      </View>
      <View style = {styles.form}>
      
        <TextInput style = {styles.inputPassword} 
        keyboardType= 'numeric'
        secureTextEntry={true}
        autoFocus= {true}
        placeholder = 'Nhập mật khẩu'
        placeholderTextColor={ '#929292'}
        />
        <FontAwesome name="lock" size={22} color="black" style= {styles.lock} />
        <TouchableOpacity style = {styles.buttonLogin}>
          <Text style = {styles.buttonLoginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.action}>
      <TouchableOpacity style = {styles.buttonAction}>
          <Text style = {styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonAction}>
          <Text style = {styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
const TEXT = {
  color:"#fff",
  texAlign:"center"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0006d',
   paddingTop: Constants.statusBarHeight
    
  },
  content:{
    alignItems:"center",
    marginTop:50
  },
  textWrapper:{
    alignItems:"center",
  },
  hiText:{
    ...TEXT,
    fontSize:20,
    lineHeight:50,
    fontWeight:"bold"
  },
  userText:{
    ...TEXT,
    fontSize:16,
    lineHeight:30,
    
  },
  inputPassword:{
    height: 60,
    backgroundColor:"#fff",
    borderRadius:20,
    width: '90%',
    marginTop:20,
    marginHorizontal:20,
    fontSize: 18,
    textAlign:'center'
    
  },
  buttonLogin:{
    backgroundColor:'#8d015a',
    height:50,
    marginTop:15,
    borderRadius:25,
    justifyContent:"center",
    alignItems: "center",
    width:'90%',
    marginHorizontal:20
  },
  buttonLoginText:{
    ...TEXT
  },
  action:{
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop: 20
  },
  buttonActionText:{
    ...TEXT,
    marginHorizontal: 20
  },
  lock:{
    position: 'absolute',
    top: 40 ,
    left:40,
    color:"#929292"

  }
});
