import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Restaurant', {...item})}
        >
            <View
                style={{
                    elevation: 5,
                    backgroundColor: 'white', 
                }}
                className="mr-6 rounded-3xl my-3">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/star.png')} className="w-5 h-5" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars} </Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review)  -  <Text className="font-semibold">{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon name="map-pin" size={15} color="gray" />
                        <Text className="text-gray-700 text-xs">Nearby - {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard
