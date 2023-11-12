import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity, TextInput } from 'react-native';
import { StyleSheet, Text, View , Image, Pressable } from 'react-native';
import { FlatList, ImageBackground } from "react-native-web";
import { useNavigation } from "@react-navigation/native";


export default function ScreenSignup({route}) {
    const navigation = useNavigation();
    
    const id = route.params.item.id;
    const item = route.params.item;
  
    var [data1, setData] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    

    
   

    const create =  () => {
     

        fetch(`https://655054317d203ab6626db262.mockapi.io/Account/${id}/Note`, {
          method: 'POST',
          headers: {
              "content-type": 'application/json'
          },
          body: JSON.stringify({
                    name : name,
                    content: content,
                    AccountId: id,
                }),
            })
            .then(() => {
              fetch(`https://655054317d203ab6626db262.mockapi.io/Account/${id}/Note`)
                  .then((res) => res.json())
          });
          navigation.navigate("ScreenNote", {item})
         
      };
  

    
    
  return (
    <View style={styles.container}>
        <View style = {{flex: 1, width: '100%',}}>
            <TextInput style = {{borderRadius: 10,height: 60, fontSize: 20, fontWeight: 'bold', padding: 20, backgroundColor: 'white'}} value={name} onChangeText={(text) => setName(text)}></TextInput>
        </View>
        <View style = {{flex: 8, width: '100%', marginTop: 10}}>
        <TextInput style = {{borderRadius: 10, height: 60, fontSize: 20, fontWeight: 'bold',padding: 20,  height: '100%',  backgroundColor: 'white'}} value={content} onChangeText={(text) => setContent(text)}></TextInput>

        </View>
        <View style = {{flex:'1', justifyContent: 'center', alignItems: 'center',  width: '100%', marginTop: 10}}>
            <TouchableOpacity style = {{width: '100%', backgroundColor: 'white', borderRadius: 30, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={create}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', }}>Add Note</Text>
            </TouchableOpacity>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#490efb',
    alignItems: 'center',
    padding: 20
  },
});
