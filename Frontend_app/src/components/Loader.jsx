import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';

export const Loader = ({screenWidth}) => {
  return (
   <View style={{
    padding:20
   }} >
        <Progress.Bar height={5} progress={0.3} width={screenWidth*0.7} color='green' useNativeDriver={true} animated={true} indeterminate={true} animationType='spring' />
   </View>
    
  )
}
