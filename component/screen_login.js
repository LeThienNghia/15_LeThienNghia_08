import { useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import { FlatList, ImageBackground } from "react-native-web";
import { useNavigation } from "@react-navigation/native";


export default function ScreenLogin() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    useEffect(()=>{
        fetch('https://655054317d203ab6626db262.mockapi.io/Account')
      .then(response => response.json())
      .then((json)=>{
        setData(json);
      })
    }, [])

    const logIn = () => {
      data.forEach((item) => {
        if (item.email === email && item.passWord === password){
          navigation.navigate("ScreenNote", {item});
        }
      })
    }
    
    
    
  return (
    <View style={styles.container}>
        <View style = {{flex: 1.5,width: '100%',}}>
        <ImageBackground style = {{flex: 1, width: '100%'}} source={require('../assets/BG.png')} resizeMode="cover">
        <Image source={require('../assets/LOGO.png')} style = {{height: 50, width: 50, resizeMode: 'contain', alignSelf: 'flex-end', top: 70, right: 30}}></Image>
        </ImageBackground>
        </View>
        <View style = {{flex: 2,width: '100%', borderRadius: 35, top: -30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: 30, }}>
            <Text style = {{flex: 0.5, fontWeight: 'bold', fontSize:25, lineHeight: 35,}}>Welcome back!</Text>
            <Text style = {{flex: 0.5, fontSize:15, lineHeight: 25, color: 'lightgray', marginBottom: 10}}>Login to continue with TaskNote App</Text>
            <View style = {{flex: 5, width: '100%', paddingTop: 10}}>
              <Text style = {{fontWeight: 'bold', fontSize: 15, lineHeight: 25, }}>Email</Text>
              <TextInput style = {{ backgroundColor: '#F6F6F7', borderRadius: 8, height: 40, marginBottom: 10}}  value={email} onChangeText={(text) => setEmail(text)}></TextInput>
              <Text style = {{fontWeight: 'bold', fontSize: 15, lineHeight: 25}}>Password</Text>
              <TextInput style = {{ backgroundColor: '#F6F6F7', borderRadius: 8, height: 40}} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
            </View>
            <View style = {{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity style = {{ width: '100%',justifyContent: 'center', alignItems:'center', backgroundColor: '#EC615B', borderRadius: 20, height: 40}} onPress={logIn}>
                <Text style = {{color: 'white', lineHeight: 25, fontSize: 18}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style= {{marginVertical: 10}}>
              <Text style = {{fontSize: 15, fontWeight: 'bold', lineHeight: 35, }}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{flexDirection: 'row'}} onPress={()=>{navigation.navigate("ScreenSignup");}}>
                <Text style = {{fontSize: 15,  lineHeight: 35, }}>Don’t have an account? </Text>
                <Text style = {{fontSize: 15, fontWeight: 'bold', lineHeight: 35, color: '#B8302E'}}>Register</Text>
              </TouchableOpacity>
            </View>
           
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
