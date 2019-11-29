import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Api from "../ListVelib";

export default class NavigationApi extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Api/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
});
