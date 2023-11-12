import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity, TextInput } from 'react-native';
import { StyleSheet, Text, View , Image, Pressable } from 'react-native';
import { FlatList, ImageBackground } from "react-native-web";
import { useNavigation } from "@react-navigation/native";


export default function ScreenSignup(noteId) {
  const navigation = useNavigation();
  var [data1, setData] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
  
   
    
    
    useEffect(()=>{
        fetch('https://655054317d203ab6626db262.mockapi.io/Account/1/Note/1')
      .then(response => response.json())
      .then((json)=>{
        setData(json);
      })
    }, [])
    

    const signup =  () => {
     

      fetch("https://655054317d203ab6626db262.mockapi.io/Account/1/Note/1", {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
                  name: name,
                  content: content,
                  date: date,
                  accountid: noteId,
              }),
          })
          .then(() => {
            fetch("https://655054317d203ab6626db262.mockapi.io/Account")
                .then((res) => res.json())
        })

       
    };

    
    
  return (
    <View style={styles.container}>
        <View style = {{flex: 1, width: '100%',}}>
            <TextInput placeholder={data1.name} style = {{borderRadius: 10,height: 60, fontSize: 20, fontWeight: 'bold', padding: 20, backgroundColor: 'white'}}></TextInput>
        </View>
        <View style = {{flex: 8, width: '100%', marginTop: 10}}>
        <TextInput placeholder={data1.content} style = {{borderRadius: 10, height: 60, fontSize: 20, fontWeight: 'bold',padding: 20,  height: '100%',  backgroundColor: 'white'}}></TextInput>

        </View>
        <View style = {{flex:'1', justifyContent: 'center', alignItems: 'center',  width: '100%', marginTop: 10}}>
            <TouchableOpacity style = {{width: '100%', backgroundColor: 'white', borderRadius: 30, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', }}>Update</Text>
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
