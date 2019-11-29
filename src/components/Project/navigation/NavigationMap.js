import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map from "../Map";

export default class NavigationMap extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Map/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
});
