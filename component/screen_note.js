import { useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import { FlatList, ImageBackground } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ScreenLogin = ({navigation, accountId})=> {
    const acountid = accountId;
    var [data1, setData] = useState([]);
    
    
    useEffect(()=>{
        fetch('https://655054317d203ab6626db262.mockapi.io/Account/1/Note')
      .then(response => response.json())
      .then((json)=>{
        setData(json);
      })
    }, [])
    
   console.log(data1);
    
  return (
    <View style = {{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25, backgroundColor: '#784fff',}}>
        <TouchableOpacity>
        <View style = {{width: '100%', justifyContent: 'center', top: -40, flexDirection: 'row'}}>
            <Image source={require('../assets/pngwing.com.png')} style = {{width: 100, height: 100, resizeMode: 'contain'}}/>
        </View>
        </TouchableOpacity>
        <View style = {{height: '500', width: '100%', top: -50}}>
            <FlatList
                        data = {data1}
                        renderItem={({item}) =>(
                            <TouchableOpacity>
                                <View style = {{flexDirection: 'row', width: '100%', backgroundColor: 'white', height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center',marginVertical: 10}}>
                
                                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Image source={require('../assets/clipart680190.png')} style = {{width: 30, height: 30, resizeMode: 'contain'}}/>
                                    </View>
                                    <View style = {{flex: 4,}}>
                                        <Text style = {{fontSize: 20, lineHeight: 30, fontWeight: 'bold', top: -20}}>{item.name}</Text>
                                        <Text style = {{fontSize: 15, lineHeight: 10, top: -20}}>{item.content}</Text>
                                        <Text style = {{fontSize: 15, lineHeight: 10, top: 10}}>{item.date}</Text>
                                    </View>
                                    <View style = {{flex: 1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center',}}>
                                        <TouchableOpacity style = {{width: '100%', height: '100%',backgroundColor: 'red', justifyContent: 'center', alignItems: 'center',  borderTopEndRadius: 20, borderEndEndRadius: 20, }}>
                                            <Text style = {{color: 'white'}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        scrollEnabled={true}
                />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#490efb',
    alignItems: 'center',
  },
});

export default  ScreenLogin;