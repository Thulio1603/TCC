import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/auth';

//header
import Header from './Header';

console.disableYellowBox=true;

export default function Estoque(){

    const { user, sair } = useContext(AuthContext);
    
    async function Sair() {
        sair();
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text>
                SEUS MEDICAMENTOS
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
});