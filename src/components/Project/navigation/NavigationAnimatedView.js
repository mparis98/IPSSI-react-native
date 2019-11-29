import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedView from "../../StartProject/AnimatedView";

export default class NavigationAnimatedView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AnimatedView/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
    },
});
