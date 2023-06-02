import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/fllogo.png')} style={styles.logo}/>

      <Text style={styles.titulo}>FL Studio</Text>
      <Text style={styles.text}>
      Criado em 1997 pela empresa belga Image-Line, o Fruity Loops Studio
      surgiu com o propósito de transformar ideias em música. Possui uma inferface
      extremamente interativa, diversas configurações e compatibilidade com plugins estrangeiros,
      sem contar os seus plugins e instrumentos nativos. 
      Produtores como Avicii, Martin Garrix, Murda Beatz, Wondagurl, TM88 e muitos outros. 
      </Text>

      <View>
        <TouchableOpacity style={styles.next}>
          <Link 
          href="/telaCadastro"
          style={{textAlign: 'center',  color: 'white'}}>
            Continuar para o cadastro
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.back}>
          <Link 
          href="/"
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
  next: {
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
