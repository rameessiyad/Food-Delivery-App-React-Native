import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme'
import Icon from 'react-native-vector-icons/Feather'

const DeliveryScreen = () => {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    return (
        <View className="flex-1">
            {/* map view */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                className="flex-1"
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View className="">
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival time</Text>
                        <Text className="text-3xl font-extrabold text-gray-700">35-45 Minutes</Text>
                        <Text className="mt-2 text-gray-700 font-semibold">Your order is on the way</Text>
                    </View>
                </View>
                <View
                    style={{ backgroundColor: themeColors.bgColor(0.8) }}
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
                >
                    <View className="p-1 rounded-full"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        <Image className="h-16 w-16 rounded-full" source={require('../assets/images/deliveryboy.png')} />
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">Ramees Siyad</Text>
                        <Text className="text-lg font-semibold text-white">Your Rider</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity
                            className="bg-white rounded-full p-2"
                        >
                            <Icon name="phone" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            className="bg-white rounded-full p-2"
                        >
                            <Icon name="x" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DeliveryScreen