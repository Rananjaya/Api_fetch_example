import { Platform } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

async function Connection() {

	console.log('inside connection')

	let Netstatus = NetInfo.fetch().then(state => {
		console.log("Connection type", state.type);
		console.log("Is connected?", state.isConnected);
		if (state.isConnected) {
			console.log("Connected");
			return true
		} else {
			return false
		}
	});
	return Netstatus
}

const getConnectionInfo = async () => {
	if (Platform.OS === 'ios') {
		return new Promise((resolve, reject) => {
			const connectionHandler = connectionInfo => {
				NetInfo.removeEventListener('connectionChange', connectionHandler)
				resolve(connectionInfo)
			}
			NetInfo.addEventListener('connectionChange', connectionHandler)
		})
	}

	return NetInfo.getConnectionInfo()
}
export { Connection }
