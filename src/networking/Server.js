import { Alert } from 'react-native';

// const url = 'http://waveapp.eastus.cloudapp.azure.com:8282/api/';
const url = 'https://jsonplaceholder.typicode.com/photos/';
//const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const _api_key ='f34aa39bb6414849b24c0c270e05e60c';

async function getDataFromServer(reqAPI) {
    let apiGetdata = url.concat(reqAPI)

    console.log("URL",apiGetdata)
  
    try {
        let response = await fetch(apiGetdata, {
            method: 'GET',
            headers: {
                //  'X-API-KEY' :_api_key,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let responseJson = await response.json()
        console.log('Ranaaaaaaaaaaaa ......>>>>>>>>>>>>>>>', responseJson)
        return responseJson
    } catch (error) {
        console.log(`Error : ${error}`)
        return 404
    }
}



export { getDataFromServer };
// export { insertDataToServer };
