import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Restaurant from './screens/Restaurant';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Restaurant' component={Restaurant} />
                <Stack.Screen name='Cart' component={CartScreen} options={{ presentation: 'transparentModal', animation: 'slide_from_bottom' }} />
                <Stack.Screen name='OrderPreparing' component={OrderPreparingScreen} options={
                    { presentation: 'transparentModal', animation: 'slide_from_bottom', gestureEnabled: true, cardStyle: '{ backgroundColor: "transparent' }} />
                <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ presentation: 'transparentModal', animation: 'slide_from_bottom', gestureEnabled: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}