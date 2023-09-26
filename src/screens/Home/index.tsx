import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import {styles} from './styles'
import { useState } from "react";
import { Participant } from "../../components/Participant";


export default function Home(){
//definindo um useState
const [participants,setParticipants] = useState<string[]>([]);
//     Estado      , funcao que atualiza o estado do array
const [participantName,setParticipantName] = useState('');
// estado para definir valor a funcao de adicionar participantes

const [currentDate, setCurrentDate] = useState(new Date()); 

//funcao paga pegar a data atual
function getCurrentDate() {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('pt-BR');
  return formattedDate;
}


function handleParticipantAdd(){
  const controleRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'"\-]*[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ\s'"\-]*$/;
  
  if (!participantName.trim()) {
    // Checar se o campo de adicionar esta vazio
    return Alert.alert("Campo vazio", "Por favor, insira o nome do participante.");
  }
  if (!controleRegex.test(participantName)|| participantName.startsWith('-')){
    return Alert.alert("Não é permitido numeros e caracteres inválidos");
  }
  if (participants.includes(participantName)){
    return Alert.alert("Participante existe", "Já existe esse participante na lista")
  }
 
  setParticipants(prevState => [...prevState , participantName ]);
  setParticipantName('')
  
}

function handleParticipanteRemove(name:string){

 //(utilizando somente a funcao alert(`Voce deseja remover o(a) , Sr(a):  ${name}`)
  Alert.alert("Remover", `Remover o participante ${name} ?`,[
  { 
    text:"Sim",
    onPress:() => setParticipants(prevState => prevState.filter(Participant => Participant != name)),
  },
  {
    text:"Não" , onPress:() => Alert.alert('Mantido'),
    style: 'destructive'
    //deixa o botao Não na cor vermelha.
    
  }
 ])
}
  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>
      Evento do dia:  {getCurrentDate()}
    </Text>
    
    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        onChangeText={setParticipantName}
        value={participantName}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
   
    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item})=> (
        <Participant 
        key={item}
        name={item}
        onRemove={() => handleParticipanteRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text style={styles.listEmptyText}>
          Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
        </Text>
        
      )}
    />

  </View>
   
    )
}