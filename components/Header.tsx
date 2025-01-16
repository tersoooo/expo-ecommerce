import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default function Header() {
    return (
        <>
            <View className="flex-1 flex-row items-center bg-white border border-gray-300 rounded px-3">
                <Ionicons name="search" size={20} color="#FF6720"/>
                <TextInput
                    placeholder="Ara..."
                    className="flex-1 ml-2 text-base h-full"
                />
            </View>
            <View className="flex-row ml-4">
                <TouchableOpacity
                    onPress={() => console.log('Bildirimlere tıklandı!')}
                >
                    <Ionicons name="notifications-outline" size={24} className="mr-4"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Sepete tıklandı!')}
                >
                    <Ionicons name="cart-outline" size={24}/>
                </TouchableOpacity>
            </View>
        </>
    )
}
