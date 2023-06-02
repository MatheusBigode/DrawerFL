import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/fllogo.png')} style={styles.logo}/>

      <Text style={styles.titulo}>FL Studio</Text>
      <Text style={styles.text}>
      O FL Studio é um DAW desenvolvido
      para produção musical daqueles que realmente amam a música.
      Contendo infinitas possbilidades, o FL Studio nasceu para que suas 
      maiores ideias possam ser executadas em forma de música. 

      </Text>

      <View style={styles.divInputs}>
        <TouchableOpacity style={styles.next}>
          <Link 
          href="/telaSobre"
          style={{textAlign: 'center',  color: 'white'}}>
            Sobre
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
    width: '17%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    margin: '6%',
    textAlign:'justify',
  },
  divInputs: {

  },
  next: {
    backgroundColor: '#e3641d',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
});
