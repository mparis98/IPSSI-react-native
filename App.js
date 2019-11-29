import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/components/Project/navigation/Navigation';
import {FindCoordinatesProvider} from './src/components/Project/actions/MyContext';

export default function App() {
    return (
        <FindCoordinatesProvider style={styles.container}>
                <Navigation></Navigation>
       </FindCoordinatesProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
