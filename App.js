import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function App(){
    return(
        <NavigationContainer>
            <AuthProvider>
              <Routes/>
            </AuthProvider>
        </NavigationContainer>
    );
}










/*const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Cadastrar" component={Cadastrar}/>
      <Tab.Screen name="Login"  component={Login}/>
    </Tab.Navigator>
  );  
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ 
                                                                        headerStyle:{ backgroundColor: '#3095db' },
                                                                        headerTintColor: '#000000',
                                                                        headerBackTitleVisible: false,
                                                                        headerTitle: 'Voltar' }}/>
        <Stack.Screen name="Painel" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/