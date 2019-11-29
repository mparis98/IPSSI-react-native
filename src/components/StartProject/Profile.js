import React from 'react';
import {StyleSheet, Text, View, LayoutAnimation, TouchableOpacity, Button} from 'react-native';

class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    state= {
        firstname: "Matthieu",
        lastname: "Paris",
    }

    render() {
        const {navigate} = this.props.navigation;
        return (<View style={styles.Animated}>
            <View style={styles.AnimatedOne}>
                <Text>Bonjour {this.state.firstname} {this.state.lastname}</Text>
                <Button
                    title="Views my history"
                    onPress={() => navigate('History', {name: 'Matthieu'})}
                />
            </View>
        </View>);
    }

}

const styles = StyleSheet.create({
    AnimatedOne: {
        flex:2,
        backgroundColor: '#97ff98',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Animated: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Profile;

