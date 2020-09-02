import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth';

console.disableYellowBox=true;

export default function Cadastrar() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { cadastrar } = useContext(AuthContext);

  async function Cadastrar(){
      cadastrar(email, password, nome);
  }

  return (
      <View style={styles.container}>
          <Image 
          source={require('../../assets/atomo.png')} 
          style={styles.img} 
          />

          <TextInput 
          style={styles.input} 
          underlineColorAndroid="transparent"
          onChangeText={ (text) => setNome(text) }
          value={nome}
          placeholder="Digite seu Nome"
          />

          <TextInput 
          style={styles.input} 
          underlineColorAndroid="transparent"
          onChangeText={ (text) => setEmail(text) }
          value={email}
          placeholder="Digite seu e-mail"
          />

          <TextInput 
          style={styles.input} 
          underlineColorAndroid="transparent"
          onChangeText={ (text) => setPassword(text) }
          value={password}
          placeholder="Crie sua senha"
          />

          <TouchableOpacity onPress={Cadastrar}>
              <View style={styles.btnArea}>
                  <Text style={styles.btnTxt}>
                      Cadastrar
                  </Text>
              </View>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35aafc',
    },
    img: {
        width: 150,
        height: 150,
        marginTop: -100,
        marginBottom: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        margin: 10,
        padding: 10, 
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    btnArea: {
        margin: 10,
        padding: 10,
        width: 300,
        height: 50,
        backgroundColor: '#3095db',
        borderRadius: 5,
    },
    btnTxt: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 5,
    }
});