import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal]=useState('');
  const [coursegoals,setcoursegoals]=useState([]);

  function goalinputhandler(enteredtext){

    setEnteredGoal(enteredtext);
  }
  const goalHandler=()=>{

    setcoursegoals([...coursegoals,enteredGoal]);

  }

  return (

      <View style={styles.mainscreen}>
        <View style={styles.firststyle}>
          <TextInput placeholder="Goals" style={styles.textinput} onChangeText={goalinputhandler }
          />
          <Button title="add" onPress={goalHandler}/>


        </View>
        <View>
          {coursegoals.map((goal)=><Text>{goal}</Text>)}

        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  mainscreen:{

    padding:50
  },
  firststyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
  },
  textinput:{
    width:'80%',
    borderColor:'black',
    borderWidth:1,
    padding:10
  }
});
