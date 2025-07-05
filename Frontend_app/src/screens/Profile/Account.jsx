import React from 'react'
import { Text, View } from 'react-native'

export const Account = () => {
  return (
   <View style={{
    flexDirection:"column",
    gap:10
   }} >
    <Text style={{
        color:"black",
        fontSize:25,
        fontWeight:"bold"
    }} >
        My account
    </Text>
    <Text>
        Test@test.com
    </Text>
   </View>
  )
}
