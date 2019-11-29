import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, Button} from 'react-native';

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 360,
                duration: 10000,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={[styles.AnimatedTwo
                ,
                {height: fadeAnim, width: fadeAnim}]         // Bind opacity to animated value
            }
        >
            {props.children}
        </Animated.View>
    );
}

export default () => {
    // const {navigate} = this.props.navigation;
    return (<View style={styles.Animated}>
        <View style={styles.AnimatedOne}>
            <Text>Coucou</Text>
        </View>
        <FadeInView style={{backgroundColor: 'powderblue', flex: 2}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>New block</Text>
        </FadeInView>
    </View>);
};

const styles = StyleSheet.create({
    AnimatedOne: {
        backgroundColor: '#97ff98',
        flex:2,
    },
    AnimatedTwo: {
        backgroundColor: '#c0c3ff',
        flex:2
    },
    Animated: {
        flex:2,
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});



