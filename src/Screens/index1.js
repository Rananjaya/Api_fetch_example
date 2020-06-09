import React, { Component,useState } from 'react';
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



import {connection} from "../networking/Server";
import { getDataFromServer } from '../networking/Server';
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';



const window = Dimensions.get('window');

export default class AgendaPage extends Component {


  // static navigationOptions = ({navigation}) => {
  //  const {state} = navigation;

 
  //   };

    constructor(){
        super()
        this.state = {
            data:[],
            loading:false,
            tracks:"",
        }
   }

   SendData = () =>{
       
       let Data = this.state.tracks;
         this.props.navigation.navigate('Second_Page',{dta: Data})



   }

   async setTokan(response){
     
        console.log("alert",JSON.stringify(response)) 
        try{
                let Imgurl = response[0]["thumbnailUrl"]

                console.log("ImgURL",response[0]["thumbnailUrl"]);

                await AsyncStorage.multiSet([['ImageUrl', Imgurl]])

                // get data from  local stroge

                let userEmail = await AsyncStorage.getItem('ImageUrl');

                console.log("from local stroage",userEmail);


        }catch(error){
           console.log("error",error);
        }
   }

    componentDidMount = () =>{

      console.log("apple");
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        // this.setState({
        //     loading:true
        //   })

          getDataFromServer('').then(response => {
            console.log('response--->', response)
            // Alert.alert("api_asia", response);
            if (response === 404) {
    
              Alert.alert("api_asia", "Connection Error", "error");
            } else {
              // let Status = response["Error"];
              let Message = response[0]["thumbnailUrl"];
              this.setTokan(response) 
              // let All = response[""];
             console.log("Rana Response",JSON.stringify(Message));
              this.setState({
                data:response,
                tracks: Message,
                loading: true
        })
                console.log("State",this.state.data[0]["thumbnailUrl"]);
                console.log("Singale Image",this.state.tracks);
      
              // this._getTablesFromApi();
            }
          });
      
    
    }

//     _getTracksFromApi = () => {

//       getDataFromServer('articles').then(response => {
//         console.log('response--->', response)
//         // Alert.alert("api_asia", response);
//         if (response === 404) {

//           Alert.alert("api_asia", "Connection Error", "error");
//         } else {
//           // let Status = response["Error"];
//           let Message = response["urlToImage"];
//          console.log("Rana URL",Message);
//           this.setState({
//             tracks: Message,
//           //   loading: false
//     })
//           this._getTablesFromApi();
//         }
//       });
  
// }

    // handleBackButton = () => {
    //     this.props.navigation.navigate('Home');
    //     return true;
    // } 

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    render() {   
        return (
            <View style={{flex:1}}>
            {this.state.loading == false &&
            <View>
            <ActivityIndicator size="small" color="#00ff00" />
            </View>

                }
                {this.state.loading == true &&
            <View>

              <Text>123</Text>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Second_Page') }>
                <Text>1234</Text>
              </TouchableOpacity>
              <Image source={{uri: this.state.tracks}} style={{height:50,width:50}}/>
            </View>
                }
               
                       <Swiper 
                                style={{ height: (window.height)*0.25}} 
                                loadMinimal={true}
                                showsPagination={false} 
                                loop={false} autoplay={false} 
                               /// autoplayTimeout={3}
                            >
                                {this.state.data.map((data, index) => {
                                    return(
                                        <View key={index} style={{justifyContent: 'center', alignItems: 'center',
                                }}>
                                  <Text>123</Text>
                                            
                                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Second_Page',data.thumbnailUrl) }>
                                                  <Image style={{width: (window.width)*0.95, height: (window.height)*0.25, borderRadius: 10}} source={{uri: data.thumbnailUrl}}/>
                                              <Text>Pass Data</Text>
                                            
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </Swiper>

                           

               
        

</View>
        );  
    }




}
