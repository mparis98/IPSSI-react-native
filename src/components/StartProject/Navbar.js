import React from 'react';
import {StyleSheet, Text, View, LayoutAnimation, TouchableOpacity, Button} from 'react-native';
import AnimatedView from './AnimatedView';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Nav}>
                {/*<Button*/}
                {/*    title="Go to my profile"*/}
                {/*    onPress={() => navigate('Profile', {name: 'Matthieu'})}*/}
                {/*/>*/}
                <AnimatedView/>
            </View>
        )
    }

}

const styles = {
    Nav: {
        flex: 1,
    },
}

export default Navbar;
