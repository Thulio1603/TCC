import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/auth';

//header
import Header from './Header';

console.disableYellowBox=true;

export default function Painel(){

    const { user, sair } = useContext(AuthContext);
    
    async function Sair() {
        sair();
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text>
                Configurações
            </Text>
            <TouchableOpacity onPress={Sair}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTxt}>
                        SAIR
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
    },
    btnArea: {
        margin: 10,
        padding: 10,
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