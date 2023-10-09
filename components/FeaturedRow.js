import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import ResturantCard from './ResturantCard'

export default function FeaturedRow({title, description, restaurants}) {
   
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-sm">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text}}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {restaurants.map((restaurant, index) => (
          <ResturantCard key={index} item={restaurant} />
        ))}
       </ScrollView>
    </View>
  )
}