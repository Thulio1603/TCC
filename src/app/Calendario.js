import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/auth';

//header
import Header from './Header';

console.disableYellowBox=true;

export default function Lembrete_remedio(){

    const { user, sair } = useContext(AuthContext);
    
    async function Sair() {
        sair();
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text>
                LEMBRETES
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