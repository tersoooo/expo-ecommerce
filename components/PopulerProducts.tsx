import React, {useEffect, useState} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { fetchProducts,truncateText } from "@/utils/helpers";

export default function PopulerProducts() {

    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        }
        loadProducts();
    }, []);


    const toggleFavorite = (id) => {
        if (favorites.includes(id)){
            setFavorites(favorites.filter((item) => item !== id))
        }else{
            setFavorites([...favorites, id]);
        }
    }

    if(loading){
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#FF6720" />
            </View>
        )
    }

    return (
        <View className="flex-1 h-20">
            <Text className="text-lg font-medium text-gray-700 mt-4 py-4">Popüler Ürünler</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 16 }}
            >
                {products.map((product) => (
                    <View
                        key={product.id}
                        className="w-40 h-60 bg-white rounded-lg shadow-md overflow-hidden relative"
                    >
                        <Image
                            source={{ uri: product.image }}
                            className="w-full h-40 object-cover"
                        />

                        <TouchableOpacity
                            className="absolute top-2 left-32"
                            onPress={() => toggleFavorite(product.id)}
                        >
                            <Ionicons
                                name={favorites.includes(product.id) ? 'heart' : 'heart-outline'}
                                size={24}
                                color="#FF6720"
                            />
                        </TouchableOpacity>

                        <Text className="text-sm font-medium mt-2 px-2">{truncateText(product.title, 6)}</Text>
                        <Text className="text-sm font-medium mt-2 px-2">{product.price}$</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
