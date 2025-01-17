import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';

export default function Slider() {
    const items = [
        { id: 1, title: 'Item 1', url: 'https://picsum.photos/200/300?random=1' },
        { id: 2, title: 'Item 2', url: 'https://picsum.photos/200/300?random=2' },
        { id: 3, title: 'Item 3', url: 'https://picsum.photos/200/300?random=3' },
    ];


    return (
        <View className="">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
            >
                {items.map((item) => (
                    <View
                        key={item.id}
                        className="w-40 h-28 rounded-lg shadow-lg overflow-hidden mt-2"
                    >
                        <TouchableOpacity
                            onPress={() => console.log('Kampanyalar')}
                        >
                            <Image
                                source={{ uri: item.url }}
                                className="w-full h-full"
                                resizeMode="cover"
                                onLoad={() => console.log(`Image Loaded: ${item.url}`)}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
