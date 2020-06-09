import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    View, 
    StatusBar, 
    Text,Alert,
    BackHandler, 
    ImageBackground, 
    ScrollView, 
    Dimensions,
    SafeAreaView,Image,ActivityIndicator
} from 'react-native';








const window = Dimensions.get('window');

export default class Index2 extends Component {

    
    // static navigationOptions = {
    //     header: null,
    // };


    
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loading:false,
            tracks:"",
            ImageURL:this.props.route.params,
        
        }
   }

   componentDidMount() {

    console.log("Pramers", JSON.stringify(this.state.ImageURL.params));
    
   }










    render() {   
        console.log("Props passed",this.props.route.params);
        return (
<View style={{flex:1}}>

    <View>
        <Text>123</Text>
        <Image source={{uri: this.state.ImageURL}} style={{height:50,width:50}}/>
    </View>


</View>
        );  
    }




}
