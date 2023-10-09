import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';

export default function ResturantScreen() {
  const {params} = useRoute
  let item = params
 
 // console.log('restaurant:', item)
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image}/>
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
        
          >
            <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}