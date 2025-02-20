import React, {useState} from "react";
import {View, Text, FlatList, TouchableOpacity, Dimensions} from "react-native";
import Slider from './Slider'
import Services from "@/components/Services";
import PopulerProducts from "@/components/PopulerProducts";

export default function Categories() {

    const [activeCategory, setActiveCategory] = useState('Kadın');

    const categories = [
        'Kadın',
        'Erkek',
        'Ev & Yaşam',
        'Anne & Çocuk',
        'Ayakkabı & Çanta',
        'Elektronik',
    ];


    const renderContent = () => {
        switch (activeCategory) {
            case 'Kadın':
                return(
                    <View className="-mt-2 h-screen">
                        <View className="pb-5 pt-2">
                            <Slider />
                        </View>
                        <Services />
                        <PopulerProducts />
                    </View>
                )
            case 'Erkek':
                return (
                    <View>
                        <Text>Burası erkek kategorisi</Text>
                    </View>
                )
            case 'Ev & Yaşam':
                return <Text className="text-lg text-gray-800">Ev & Yaşam kategorisi içeriği</Text>;
            case 'Anne & Çocuk':
                return <Text className="text-lg text-gray-800">Anne & Çocuk kategorisi içeriği</Text>;
            case 'Ayakkabı & Çanta':
                return <Text className="text-lg text-gray-800">Ayakkabı & Çanta kategorisi içeriği</Text>;
            case 'Elektronik':
                return <Text className="text-lg text-gray-800">Elektronik kategorisi içeriği</Text>;
            default:
                return <Text className="text-lg text-gray-800">Kategori seçin</Text>;
        }
    };

    return (
        <View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <TouchableOpacity
                        className={`px-4 py-2 rounded-lg border  ${
                            activeCategory === item
                                ? 'bg-[#FF6720] border-[#ddd]'
                                : 'bg-white border-gray-300'
                        }`}
                        onPress={() => setActiveCategory(item)}
                    >
                        <Text className={`text-sm ${activeCategory === item ? 'text-white font-bold' : null}`}>{item}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ gap: 10 }}
            />
            <View className="mt-6 bg-white p-4 rounded-lg">
                {renderContent()}
            </View>
        </View>
    )
}
