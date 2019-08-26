import React,{Component} from 'react';
import {Text,View,StyleSheet,TextInput,Image,TouchableOpacity,Alert,Linking,KeyboardAvoidingView,} from 'react-native';

class OrderPopup extends Component{

render(){
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:6,justifyContent:'flex-start'}}>
                <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',paddingTop:'10%',paddingBottom:'10%'}}>Order Details</Text>
                <Text style={{paddingLeft:15,paddingBottom:15,fontSize:20}}>Order Id               :{}</Text>
                <Text style={{paddingLeft:15,paddingBottom:15,fontSize:20}}>Shop Name         :{}</Text>
                <Text style={{paddingLeft:15,paddingBottom:15,fontSize:20}}>Customer Name :{}</Text>
                <Text style={{paddingLeft:15,paddingBottom:15,fontSize:20}}>Destination          :{}</Text>
            </View>
        <View style={{flex:1, flexDirection:'row',alignSelf:'center',justifyContent:'flex-end'}}>
        <TouchableOpacity style={{margin:5,width:200}}>
            <Text style={{
                backgroundColor:'red',color:'white',fontSize:20,
                height:37,width:'100%',textAlign:'center',fontWeight:'bold'
            }}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:5,width:200}}>
            <Text style={{
                backgroundColor:'green',color:'white',fontSize:20,
                height:37,width:'100%',textAlign:'center',fontWeight:'bold'
            }}>Reject</Text>
        </TouchableOpacity>
        </View>
        </View>
        )
    }
}
export default OrderPopup;