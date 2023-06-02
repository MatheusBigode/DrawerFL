import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fllogo.png')} style={styles.logo}/>

      <Text style={styles.titulo}>FL Studio</Text>

      <View style={styles.divImage}>

        <View style={styles.rowOne}>
          <Image source={require('../assets/img1.jpg')} style={styles.img}/>

          <Image source={require('../assets/img2.png')} style={styles.img}/>

        </View>
        <View style={styles.rowTwo}>
          <Image source={require('../assets/img3.png')} style={styles.img}/>

          <Image source={require('../assets/img4.jpg')} style={styles.img}/>

        </View>
        <View style={styles.rowThree}>
          <Image source={require('../assets/img1.jpg')} style={styles.img}/>

          <Image source={require('../assets/img2.png')} style={styles.img}/>

        </View>
        <View style={styles.rowFour}>
          <Image source={require('../assets/img3.png')} style={styles.img}/>

          <Image source={require('../assets/img4.jpg')} style={styles.img}/>

        </View>

      </View>

      <View>
      <TouchableOpacity style={styles.back}>
          <Link 
          href="/telaCadastro"
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
    width: "100%"
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
  divImage: {
    margin: '3%',
    alignSelf: 'center'
  },
  img: {
    height: 80,
    width: 130,
    margin: '5%'
  },
  rowOne: {
    flexDirection:"row"
  },
  rowTwo: {
    flexDirection:"row"
  },
  rowThree: {
    flexDirection:"row"
  },
  rowFour: {
    flexDirection:"row"
  },
  back: {
    backgroundColor: '#a72107',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
});
