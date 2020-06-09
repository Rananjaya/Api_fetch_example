import React, { Component } from 'react';
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



import {connection} from "./src/networking/connection";
import { getDataFromServer } from './src/networking/Server';
import Swiper from 'react-native-swiper'



const window = Dimensions.get('window');

export default class AgendaPage extends Component {


    
    constructor(){
        super()
        this.state = {
            data:[],
            loading:false,
            tracks:"",
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
  <Image source={{uri: this.state.tracks}} style={{height:50,width:50}}/>
</View>
    }
<Swiper 
                                style={{ height: (window.height)*0.25}} 
                                loadMinimal={true}
                                showsPagination={false} 
                                loop={true} autoplay={true} 
                                autoplayTimeout={3}
                            >
                                {this.state.data.map((data, index) => {
                                    return(
                                        <View key={index} style={{justifyContent: 'center', alignItems: 'center',
                                }}>
                                  <Text>123</Text>
                                            <Image style={{width: (window.width)*0.95, height: (window.height)*0.25, borderRadius: 10}} source={{uri: data.thumbnailUrl}}/>
                                        </View>
                                    )
                                })}
                            </Swiper>

</View>
        );  
    }




}
