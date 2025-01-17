import React, { useState } from 'react'
import { View, Text, ScrollView,Image,TouchableOpacity } from "react-native";

export default function Services() {

    const [activeItem, setActiveItem] = useState(null);


    const items = [
        { id: 1, title: 'Yemek', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }, // Yemek
        { id: 2, title: 'Hızlı Market', icon: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png' }, // Market
        { id: 3, title: 'Canlı Yayınlar', icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png' }, // Kamera
        { id: 4, title: 'Kuponlar', icon: 'https://cdn-icons-png.flaticon.com/512/2845/2845586.png' }, // Kupon
        { id: 5, title: 'Kategoriler', icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920343.png' }, // Menü
        { id: 6, title: 'Krediler', icon: 'https://cdn-icons-png.flaticon.com/512/3061/3061158.png' }, // Para
    ];

    return (
       <View>
           <Text className="text-lg font-medium text-gray-700">Hizmetlerimizi Keşfet</Text>
           <View className="">
               <ScrollView
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   contentContainerStyle={{ gap: 16 }}
               >
                   {items.map((item) => (
                       <TouchableOpacity
                           key={item.id}
                           className={`w-28 items-center pt-4 ${
                               activeItem === item.id ? 'rounded-lg' : ''
                           }`}
                           onPress={() => setActiveItem(item.id)}
                       >
                           <Image
                               source={{ uri: item.icon }}
                               className="w-16 h-16 rounded bg-white"
                               resizeMode="cover"
                           />
                           <Text
                               className={`text-center text-sm font-medium mt-2`}
                           >
                               {item.title}
                           </Text>
                       </TouchableOpacity>
                   ))}
               </ScrollView>
           </View>
       </View>
    )
}
