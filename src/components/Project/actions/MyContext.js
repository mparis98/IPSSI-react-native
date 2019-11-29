import React, {useState, useEffect} from 'react';
import {Alert, AsyncStorage} from 'react-native';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

export const MyContext = React.createContext(null);

export const FindCoordinatesProvider = props => {
    const [location, setLocation] = useState(null);

    const getData = (latitude,longitude,distance)=> {
        return `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=200&geofilter.distance=${latitude}%2C${longitude}%2C${distance}`;
    };

    const get = async (url, networkPriority = false) => {
        const key = encodeURIComponent(url);
        const value = await AsyncStorage.getItem(key)

        try {
            if (value !== null && !networkPriority) {
                return {data: JSON.parse(value), from: "Cache"};
            } else {
                const response = await fetch(url);
                const json = await response.json();
                await AsyncStorage.setItem(key, JSON.stringify(json));

                return {data: json, from: 'API'}
            }

        } catch (error) {
            return {
                data: JSON.parse(value),
                from: 'CACHE',
                error: error.message
            }
        }
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    const fetchData = (networkPriority,position) => {
        setLoading(true);
            get(getData(position.coords.latitude,position.coords.longitude,1000), networkPriority).then(data => {
                setData(data);
                setLoading(false);
            });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    distance: 1000
                });
                fetchData(false,position);
                fetchData(true,position);

            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }, [])


    return <MyContext.Provider value={{ location, setLocation, data, setData, loading, setLoading }} {...props} />;
};

