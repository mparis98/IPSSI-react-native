import {AsyncStorage, View, Text, StyleSheet, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MyContext} from "./actions/MyContext";

const Map = () => {

    return (
        <MyContext.Consumer>
            {context => (
                <View style={styles.container}>
                    {!context.data && <Text>Chargement...</Text>}
                    {context && (
                        <>
                            {!context.location && context.data && (
                                <MapView style={styles.map}
                                         provider={PROVIDER_GOOGLE}
                                         initialRegion={{
                                             latitude: 37.78825,
                                             longitude: -122.4324,
                                             latitudeDelta: 0.0922,
                                             longitudeDelta: 0.0421,
                                         }}
                                         showsUserLocation={true}
                                >
                                    {context.data.data && context.data.data.records.map(function (item, i) {
                                        var station = JSON.parse(item.fields.station);
                                        return <Marker key={i} coordinate={station.gps}
                                                       title={station.name}
                                                       description={station.state}/>
                                    })}
                                </MapView>
                            )}
                            {context.location && context.data && (
                                <MapView style={styles.map}
                                         provider={PROVIDER_GOOGLE}
                                         initialRegion={{
                                             latitude: context.location.latitude,
                                             longitude: context.location.longitude,
                                             latitudeDelta:0.0100,
                                             longitudeDelta:0.0100
                                         }}
                                         showsUserLocation={true}
                                >
                                    {context.data.data && context.data.data.records.map(function (item, i) {
                                        var station = JSON.parse(item.fields.station);
                                        return <Marker key={i} coordinate={station.gps}
                                                       title={station.name}
                                                       description={station.state}/>
                                    })}
                                </MapView>

                            )}
                        </>
                    )}
                </View>

            )}

        </MyContext.Consumer>
    )

};

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    button:{
        position:'relative',
        top:0,
        right:0,
    }
};


export default Map;
