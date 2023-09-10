import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import {SearchBar} from '../../components/SearchBar';
import {mapKey} from '../../constants/environment';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {LocationData} from './LocationData';
import {EnterAddress} from './EnterAddress';

MapboxGL.setAccessToken(mapKey);
//MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);
MapboxGL.setWellKnownTileServer('Mapbox');
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
});

export const AddAddress = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [show, setShow] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [coords, setCoords] = useState({
    lon: 12,
    lat: 36,
  });

  async function getPermissionLocation() {
    try {
      const geo = await Geolocation.getCurrentPosition(
        info =>
          setCoords({
            lon: info?.coords?.longitude,
            lat: info?.coords?.latitude,
          }),
        err => console.log(err),
        {enableHighAccuracy: true},
      );
      // console.log(geo);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lon},${coords.lat}.json?access_token=${mapKey}`;

  async function fetchData() {
    try {
      const res = await axios.get(url);
      setLocationData(res.data?.features[0]);
    } catch (error) {
      console.error(error);
    }
    // await fetch(url)
    // .then(response => response.json())
    // .then(data => setLocationData(data.features[0]));
  }

  useEffect(() => {
    //setLocationData();
    fetchData();
    // getPermissionLocation();
    console.log(locationData);
  }, [url]);

  useEffect(() => {
    //setLocationData();
    fetchData();
    getPermissionLocation();
    console.log(locationData);
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View>
          <SearchBar place={'Start Typing to search'} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: screenHeight * 0.63,
              width: screenWidth,
            }}>
            <MapboxGL.MapView
              zoomEnabled={true}
              logoEnabled={true}
              styleURL="mapbox://styles/mapbox/navigation-day-v1"
              rotateEnabled={true}
              style={{
                flex: 1,
              }}
              onPress={e => {
                //setLocationData();
                const [lon, lat] = e.geometry.coordinates;
                setCoords({
                  lat: lat,
                  lon: lon,
                });
                fetchData();
              }}>
              <MapboxGL.Camera
                zoomLevel={15}
                centerCoordinate={[coords.lon, coords.lat]}
                pitch={50}
                // animationMode="flyTo"
                // animationDuration={6000}
              />
              <MapboxGL.PointAnnotation
                id="marker"
                coordinate={[coords.lon, coords.lat]}
              />
            </MapboxGL.MapView>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.4,
            width: screenWidth,
            padding: 20,
            gap: 10,
          }}>
          <LocationData locationData={locationData} />
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              padding: 15,
              borderRadius: 10,
            }} onPress={() => setShow(!show)} >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {' '}
              Enter complete address{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <EnterAddress show={show} setShow={setShow} longitude={coords?.lon} latitude={coords?.lat} />
    </>
  );
};
