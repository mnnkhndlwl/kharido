import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  Alert
} from 'react-native';
import {mapKey} from '../../constants/environment';
import MapboxGL from '@rnmapbox/maps';
import {DeliveryPerson} from './DeliveryPerson';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Santizate} from './Santizate';
import {Orders} from './Orders';
import {Loader} from '../../components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {calculateTotalPrice} from '../../utils/utils';
import {RESET} from '../../redux/cartSlice';
import { useStripe } from '@stripe/stripe-react-native';
import {useNavigation} from '@react-navigation/native';
import { logout } from '../../redux/userSlice';

MapboxGL.setAccessToken(mapKey);
//MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);
MapboxGL.setWellKnownTileServer('Mapbox');

export const DeliveryScreen = () => {
  const route = useRoute();
  const address = route.params?.address;
  const screenWidth = Dimensions.get('window').width;
  const screenheight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {currentUser} = useSelector(state => state.user);
  const cartItems = useSelector(state => state.cart);
  const total = calculateTotalPrice(cartItems);
  const [result, setResult] = useState([]);
  const navigation = useNavigation();
 // const dispatch = useDispatch();

  const [fuck, setFuck] = useState([]);
  var ans = [];

  const startCoordinates = [77.11288116671513, 28.73695862131864]; // e.g., 'longitude,latitude'
  const endCoordinates = [address.longitude, address.latitude]; // e.g., 'longitude,latitude'
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [error,setError] = useState(false);

  const onCheckout = async () => {
    // 1. Create a payment intent
    var response;
    setLoading(true);
    try {
      const resp = await axios.post(
        `http://localhost:8000/shopping/pay`,
        {
          total: total < 99 ? total + 15 : total
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
            // You can also include other headers as needed.
            'Content-Type': 'application/json',
          },
        },
      );
      if (resp?.data?.message === 'Not Authorized') {
        dispatch(logout());
        setLoading(false);
        ToastAndroid.show(
          'Your Session has been expired !',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      }
      response = resp;
    } catch (error) {
      console.log(error);
      setError(false);
    }
    if (response.data.message) {
      Alert.alert('Something went wrong');
      return;
    }

    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: 'GrowGo',
      paymentIntentClientSecret: response.data.client_secret,
      googlePay:true
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      Alert.alert('Something went wrong');
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }

    // 4. If payment ok -> create the order
    saveOrder(response.data.id);
  };

  async function saveOrder(id) {
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:8000/shopping/order`,
        {
          transaction: id,
          products: cartItems,
          total: total < 99 ? total + 15 : total,
          address: address,
          status: 'pending',
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
            // You can also include other headers as needed.
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      setResult(res?.data);
      dispatch(RESET());
      //navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function fetchRoute() {
    try {
      const apiKey = mapKey;
      const profile = 'mapbox/driving';
      setLoading(true);
      const geometries = 'geojson';
      const url = `https://api.mapbox.com/directions/v5/${profile}/${endCoordinates};${startCoordinates}?geometries=${geometries}&banner_instructions=true&overview=full&access_token=${apiKey}`;
      // console.log(url);
      const response = await axios.get(url);
      // console.log(response.data.routes[0]?.geometry?.coordinates);
      ans = response.data.routes[0]?.geometry?.coordinates;
      setFuck(ans);
      // console.log(ans);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    onCheckout();
    fetchRoute();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="green" />
      {loading ? (
        <>
          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Loader screenWidth={screenWidth} />
          </SafeAreaView>
        </>
      ) : (
        <SafeAreaView>
        {
          error ? <>
          <View style={{
            flexDirection:'row' ,alignItems:"center",justifyContent:"space-between",flex:1
          }} >
          <Text>
            Some error occured!
          </Text>
          </View>
          </> : 
          <ScrollView>
            <View
              style={{
                height: 130,
                backgroundColor: 'green',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                width: screenWidth,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 25,
                  textAlign: 'center',
                }}>
                Your Order is on the way
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Arriving in 18 minutes
              </Text>
            </View>
            <View
              style={{
                width: screenWidth,
                height: 800,
                backgroundColor: 'white',
              }}>
              <MapboxGL.MapView
                zoomEnabled={true}
                // styleURL="mapbox://styles/mapbox/navigation-day-v1"
                rotateEnabled={true}
                style={{flex: 1}}>
                <MapboxGL.Camera
                  zoomLevel={6}
                  centerCoordinate={startCoordinates}
                />
                {
                  <MapboxGL.ShapeSource
                    id="lineSource"
                    shape={{
                      type: 'LineString',
                      coordinates: fuck,
                    }}>
                    <MapboxGL.LineLayer
                      id="lineLayer"
                      style={{lineColor: 'black', lineWidth: 2}}
                    />
                  </MapboxGL.ShapeSource>
                }
                <MapboxGL.PointAnnotation
                  id="startMarker"
                  coordinate={endCoordinates}
                />
                <MapboxGL.MarkerView
                  id="endMarker"
                  coordinate={startCoordinates}>
                  <View>
                    {/* <ScaleIcon color="black" size={30} /> */}
                    <Image
                      source={require('../../images/scooter.png')}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </View>
                </MapboxGL.MarkerView>
              </MapboxGL.MapView>

              <DeliveryPerson screenWidth={screenWidth} />
              <Santizate />
              <Orders data={result} />
            </View>
          </ScrollView>
        }
        </SafeAreaView>
      )}
    </>
  );
};
