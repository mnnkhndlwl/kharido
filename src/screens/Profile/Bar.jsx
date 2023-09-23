import React from 'react';
import { Text, View } from 'react-native';
import { ChatBubbleBottomCenterTextIcon, CreditCardIcon, WalletIcon } from 'react-native-heroicons/outline';

const data = [
  { icon: WalletIcon, text: 'Wallet' },
  { icon: ChatBubbleBottomCenterTextIcon, text: 'Support' },
  { icon: CreditCardIcon, text: 'Payment' },
];

export const Bar = ({ screenWidth, screenHeight }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: screenWidth * 0.95,
        justifyContent: 'space-between',
        backgroundColor: '#d7f3fa',
        padding: 20,
        marginVertical: 20,
        borderRadius: 20,
      }}
    >
      {data.map((item, index) => (
        <View style={{
            alignItems:"center",
            paddingHorizontal:10
        }} key={index}>
          <item.icon color="black" size={40} />
          <Text>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};
