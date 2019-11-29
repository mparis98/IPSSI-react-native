import React from 'react';
import {Button, StyleSheet, View, Text} from "react-native";
import {AsyncStorage} from 'react-native';
import {getData} from "../Project/actions/api";

class Station extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLoading: true, dataSource: null}
    }

    render() {
        return (
            <View>
{/*                <Text>{JSON.parse(AsyncStorage.getItem('DATA')).map(function (item,i) {*/}
{/*console.log(item)                })}</Text>*/}
            </View>
        )
    }
}

export default Station;
