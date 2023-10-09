import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function ResturantCard({item}) {
    const navigation = useNavigation(); // Call useNavigation to get the navigation object

    return (
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate('Root');('Resturant', {
             ...item})
          }}>
       
        <View 
        
        style={{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }}
        className="rounded-3xl mr-6 bg-white shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
            <View className="px-3 pb-4 space-y-2">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                    ({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                </Text>
            </View>
            </View>
            <View className="flex-row items-center space-x-1 ml-4 pb-2">
                <Icon.MapPin color="gray" width="15" height="15"/>
                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}