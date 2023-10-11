import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, SafeAreaView, TouchableOpacity, PixelRatio, StatusBar,ToastAndroid, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { axiosInstance } from '../../config';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { useSelector } from "react-redux";
import { Home } from '../Home/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc421"
  },
  pic: {
    flex: 0.5,
    objectFit:"cover"
  },
  loginContainer: {
    flex: 0.5,
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logo: {
    width: "20%",
    height: "20%",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    objectFit: "contain",
    borderRadius:10
  },
  input: {
    height: 40,
    margin: 12,
    width: "80%",
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
  },
  mainheading: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    fontWeight: "bold",
    color: "black"
  },
  dusriheading: {
    fontWeight: "bold",
    color: "black"
  },
  button: {
    height: 40,
    width: "80%",
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#0d9903",
    color: "white",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  }


});

export const Login = ({ }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);
  console.log(currentUser);
  const screenWidth = Dimensions.get('window').width;

  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = {
        email: email,
        password: password,
      };
      dispatch(loginStart());
      const response = await axiosInstance.post('/customer/login', data);
      if (response.data.message) {
        setLoading(false);
        ToastAndroid.show('Authentication failed !', ToastAndroid.SHORT);
        dispatch(loginFailure());
        return;
      }
      dispatch(loginSuccess(response.data));
      ToastAndroid.show('Authentication Success !', ToastAndroid.SHORT);
      setLoading(false);
    } catch (error) {
      dispatch(loginFailure());
      ToastAndroid.show('Authentication failed !', ToastAndroid.SHORT);
      setLoading(false);
    }
  };

  return (
    <>
      {
        currentUser ? <Home /> :
          <>
            <StatusBar backgroundColor='#ecfa23' barStyle={'dark-content'} />

            <SafeAreaView style={styles.container} >
              <Image style={styles.pic}
                source={{
                  uri: 'https://i.postimg.cc/Hkd3yCBN/bg.png',
                }}
              />
              <View style={styles.loginContainer} >
                <Image style={styles.logo} source={require("../../images/logo.png")} />
                <Text style={styles.mainheading} > India's last minute app </Text>
                <Text style={styles.dusriheading} > Log in or sign up </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  placeholder="Enter your Email"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                  placeholder="Enter your password"
                />
                  <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                  >
                    <Text style={
                      {
                        color: "white",
                        fontWeight: "bold",
                      }
                    } >Continue</Text>
                  </TouchableOpacity>
                
              </View>
              <Text style={{
                backgroundColor: "#d3d3d3",
                fontSize: PixelRatio.getPixelSizeForLayoutSize(4),
                textAlign: "center",
                padding: 5
              }} > By continuing, you agree to our Terms of service & Privacy policy </Text>
            </SafeAreaView>


          </>
      }
    </>
  );
};
