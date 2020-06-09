import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First_page from './src/Screens/index1';
import Second_Page from './src/Screens/index2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First_page"
          component={First_page}
         
        />

        <Stack.Screen name="Second_Page" component={Second_Page}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;