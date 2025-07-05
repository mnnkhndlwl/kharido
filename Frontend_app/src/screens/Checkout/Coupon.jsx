import React from 'react'
import { Image, Text, View,Dimensions } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

export const Coupon = ({screenWidth}) => {
    
  return (
    <View style={{
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:screenWidth*0.95,
        paddingVertical:12,
        paddingHorizontal:10,
        borderRadius:20
    }} >
        <View style={{
            flexDirection:'row',
            alignItems:"center"
        }} >
            <Image style={{
                height:25,
                width:25
            }} source={{
                uri:"https://i.postimg.cc/3JxhPQyN/discount.png"
            }} />
            <Text style={{
                fontWeight:"bold",
                color:"black",
                fontSize:20
            }} > Use Coupons </Text>
        </View>
        <ChevronRightIcon size={20} color="black" />
    </View>
  )
}
