import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../contexts/auth';
import { useNavigation } from '@react-navigation/native';

//console.disableYellowBox=true;

export default function Header(){

    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={ ()  => navigation.navigate('Painel') }>
                    <Image 
                    source={require('../../assets/atomo.png')} 
                    style={styles.img} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewTxt}>
                <Text style={styles.nomeApp}>Bula Fácil</Text>
                <Text style={styles.nomeUser}> Bem Vindo { user && user.nome } </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#35aafc',
        flexDirection: 'row',
    },
    img: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginLeft: 25,
        marginBottom: 25,
    },
    viewTxt: {
        marginTop: 70,
        marginLeft: 25,
        textAlign: 'center',
    },
    nomeApp: {
        fontSize: 25,
        textAlign: 'center',
    },
    nomeUser: {
        fontSize: 20
    },
});