import * as React from "react"
import {Stylesheet,Text,View,Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}






const tabNavigator= createBottomTabNavigator({
  Write:{screen:WriteStoryScreen},
  Read:{screen:ReadStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const  routeName=navigation.state.routeName;
      if(routeName==='WriteStoryScreen'){
        return(<Image
          source={require('./assets/write.png')}
          style={{width:35,height:35}}/>)
        
      }
      else if(routeName==='ReadStoryScreen'){
        return(<Image
        source={require('./assets/read.png')}
        style={{width:35,height:35}}/>)
      }
    }
  })
})
const AppContainer=createAppContainer(tabNavigator)