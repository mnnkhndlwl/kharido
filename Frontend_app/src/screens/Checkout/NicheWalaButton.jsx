import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

export const NicheWalaButton = ({screenWidth,show,setShow }) => {

  
  return (
    <SafeAreaView style={{
        backgroundColor:"white",
        width:screenWidth,
        padding:20,
        position:"absolute",
        bottom:0,
        zIndex:1,
    }} >
    <TouchableOpacity style={{
        backgroundColor:"#018f14",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }} onPress={() => setShow(!show)} >
        <Text style={{
            color:"white",
            fontSize:20
        }} >
            Choose address at next step
        </Text>
        <ChevronRightIcon size={20} color={"white"} />
    </TouchableOpacity>
    
    </SafeAreaView>
  )
}
