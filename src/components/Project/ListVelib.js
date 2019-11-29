import {AsyncStorage, View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MyContext} from "./actions/MyContext";

const Velib = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <View style={styles.container}>
                    {!context.data && <Text>Chargement...</Text>}
                    {context.data && (
                        <>
                            {console.log(context.data)}
                            <View style={styles.view}>
                            {context.data.data && <Text>{context.data.data.nhits} résultats</Text>}
                            <Text>From {context.data.from}</Text>
                            {context.data.error && <Text>Error: {JSON.stringify(context.data.error)}</Text>}
                            </View>
                            <FlatList data={context.data.data.records} renderItem={({ item }) =>
                                <View style={styles.item}>
                                <Text>{item.fields.station_name}</Text>
                                    <Text>{item.fields.station_state}</Text>
                                    <Text>Vélo disponible : {item.fields.nbbike}</Text>
                                    <Text>Vélo électrique disponible : {item.fields.nbebike}</Text>
                                </View>
                            }
                                      keyExtractor={item => item.fields.station_code} />
                        </>
                    )}
                </View>
            )}
        </MyContext.Consumer>
    )

};

const styles = {
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#bcffac',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    view: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        justifyContent: 'center'
    },
};


export default Velib;
