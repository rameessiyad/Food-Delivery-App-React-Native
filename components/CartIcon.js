import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-2xl"
      >
        <View className="p-2 rounded-full px-4"
          style={{ backgroundColor: 'rgba(251, 146, 60, 0.5)' }}
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">
          ₹ 200
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon