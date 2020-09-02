import React, { useState, useContext, Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth';
import Medicamento from '../bula/BuscaMedicamento';

//console.disableYellowBox=true;

export default function Login() {
    let resposta;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, logar } = useContext(AuthContext);
    const navigation = useNavigation();

    async function Logar(){
        logar(email, password)
    }

    return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/atomo.png')} 
            style={styles.img} 
            />
            <Medicamento />
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
            placeholder="Digite sua senha"
            />
            
            <TouchableOpacity onPress={Logar}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTxt}>
                        Logar
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ ()  => navigation.navigate('Cadastrar')}>
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
    marginTop: 150,
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

