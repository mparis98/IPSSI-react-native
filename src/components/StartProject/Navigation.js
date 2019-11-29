import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import {Button, StyleSheet, View} from "react-native";
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
    }
});

export const ListScreen = ({navigation}) => (
    <View style={styles.container}>
        <Button onPress={()=>navigation.push("Detail")} title="Profile"></Button>
    </View>
);

export const DetailScreen = ({navigation}) => (
    <View style={styles.container}>
        <Button onPress={()=>navigation.push("Detail")} title="Profile"></Button>
        <Button onPress={()=>navigation.popToTop()} title="Reset"></Button>
    </View>
);

const ListStack = createStackNavigator({
    List:ListScreen,
    Detail:DetailScreen,
});

const Navigator = createBottomTabNavigator({
    List: ListStack,
},{
    initialRouteName:'List',
})

const App = createAppContainer(Navigator);

export default App;
