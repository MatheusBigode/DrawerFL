import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('../assets/fllogo.png')} style={styles.logo}/>

      <Text style={styles.titulo}>FL Studio</Text>
      
      <View style={styles.divInputs}>
        <TextInput
          style={styles.name}
          placeholder='Nome'
          placeholderTextColor="black"
          >    
        </TextInput>
        <TextInput
          style={styles.email}
          placeholder='Email'
          placeholderTextColor="black"
          >    
        </TextInput>
        <TextInput
          style={styles.bday}
          placeholder='Data de nascimento'
          placeholderTextColor="black"
          >    
        </TextInput>
        <TextInput
          style={styles.cpf}
          placeholder='CPF'
          placeholderTextColor="black"
          >    
        </TextInput>

        <TouchableOpacity style={styles.signin}>
          <Link 
          href="/telaHome"
          style={{textAlign: 'center',  color: 'white'}}>
            Salvar e continuar
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.back}>
          <Link 
          href="/telaSobre"
          style={{textAlign: 'center',  color: 'white'}}>
            Voltar
          </Link>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
  },
  logo: {
    alignSelf: 'center',
    height: '15%',
    width: '20%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  divInputs: {

  },
  name: {
    margin: "3%",
    backgroundColor: '#E6E6E6',
    borderRadius: '5%',
    padding: "3%",
    
  },
  email: {
    margin: "3%",
    backgroundColor: '#E6E6E6',
    borderRadius: '5%',
    padding: "3%",
    
  },
  bday: {
    margin: "3%",
    backgroundColor: '#E6E6E6',
    borderRadius: '5%',
    padding: "3%",
    
  },
  cpf: {
    margin: "3%",
    backgroundColor: '#E6E6E6',
    borderRadius: '5%',
    padding: "3%",
    
  },
  signin: {
    backgroundColor: '#e3641d',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
  back: {
    backgroundColor: '#a72107',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
  
});
