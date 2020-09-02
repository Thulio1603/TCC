import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../auth/Login';
import Cadastro from '../auth/Cadastrar';

const AuthSatck = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthSatck.Navigator>
            <AuthSatck.Screen 
            name="Login" 
            component={Login}
            options={{headerShown: false}}
            />

            <AuthSatck.Screen 
            name="Cadastrar" 
            component={Cadastro}
            options={{ 
                headerStyle:{ backgroundColor: '#3095db' },
                headerTintColor: '#000000',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar' }}
            />
        </AuthSatck.Navigator>
    );
}

export default AuthRoutes;