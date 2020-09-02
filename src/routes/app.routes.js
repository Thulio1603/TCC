import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Painel from '../app/Painel';
import PesquisaEscrita from '../app/PesquisaEscrita';
import PesquisaCam from '../app/PesquisaCam';
import Calendario from '../app/Calendario';
import Estoque from '../app/Estoque';
import Settings from '../app/Settings';

const Tab = createBottomTabNavigator();

const icons = {
    Painel: {
        name: 'ios-home'
    },
    PesquisaEscrita: {
        name: 'ios-search'
    },
    PesquisaCam: {
        name: 'ios-camera'
    },
    Calendario: {
        name: 'ios-calendar'
    },
    Estoque: {
        name: 'ios-medical'
    },
    Settings:{
        name: 'ios-settings'
    }
};

function AppRoutes(){
    return(
        <Tab.Navigator 
        screenOptions={ ({route}) => ({
            tabBarIcon: ({ color, size }) => {
                const { name } = icons[route.name];
                return <Icon name={name} calor={color} size={size} />
            }
        }) }
        tabBarOptions={{
            style:{
                backgroundColor: '#35aafc',
            },
            activeTintColor: '#ffffff',
            showLabel: false,
            keyboardHidesTabBar: true,
        }}
        >
            <Tab.Screen name="Painel" component={Painel}/>
            <Tab.Screen name="PesquisaEscrita" component={PesquisaEscrita}/>
            <Tab.Screen name="PesquisaCam" component={PesquisaCam}/>
            <Tab.Screen name="Calendario" component={Calendario}/>
            <Tab.Screen name="Estoque" component={Estoque}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}

export default AppRoutes;