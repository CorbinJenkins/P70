import * as React from 'react'
import {TextInput,Text,View,Stylesheet, Header} from 'react-native'

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Header/>
                <Text>Title</Text>
                <TextInput/>
                <Text>Author</Text>
                <TextInput/>
                <Text>story</Text>
                <TextInput multiline={true}/>
            </View>
        )
    }
}