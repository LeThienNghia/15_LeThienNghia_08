
import ScreenLogin from './component/screen_login';
import ScreenSignup from './component/screen_signup';
import ScreenNote from './component/screen_note';
import screenaddnote from './component/screen_addnote';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="ScreenSignup" component={ScreenSignup} options={{ headerShown: false }}/>
        <Stack.Screen name="ScreenNote" component={ScreenNote} options={{ headerShown: false }}/>
        <Stack.Screen name="screenaddnote" component={screenaddnote} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


