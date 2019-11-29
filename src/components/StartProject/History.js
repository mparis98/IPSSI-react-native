import React from 'react';
import { StyleSheet, Text, View, LayoutAnimation, TouchableOpacity } from 'react-native';

class History extends React.Component{
    state= {
        firstname: "Matthieu",
        lastname: "Paris",
    }

    render() {
        return (<View style={styles.Animated}>
            <View style={styles.AnimatedTwo}>
                <Text>Voici votre historique :</Text>
            </View>
        </View>);
    }

}

const styles = StyleSheet.create({
    AnimatedTwo: {
        flex:2,
        backgroundColor: '#c0c3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Animated: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default History;

