import { NavigationContainer, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home screen</Text>
        </View>
    )    
}

const stack = createStackNavigator()

function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='home' component={HomeScreen} options={{title: "tela principal"}} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default App;