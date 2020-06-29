import React,{Component} from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import{AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'




export default function App (){

    return(

      <AppContainer/>
      
     
      
    )
    
  }

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  AppDrawerNavigator:{screen:AppDrawerNavigator}
  
})


const AppContainer = createAppContainer(switchNavigator)

