import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../contexts/auth';

//header
import Header from './Header';

//console.disableYellowBox=true;

export default function Painel(){

    const { user, sair } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Header />
            <Text>
                HOME
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});