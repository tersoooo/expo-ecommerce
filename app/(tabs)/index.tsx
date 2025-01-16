import { View, TextInput, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
    return (
        <ThemedView style={{ padding: 16, flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                <TextInput
                    placeholder="Ara..."
                    style={{
                        flex: 1,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 8,
                        marginRight: 8,
                    }}
                />
                <Ionicons name="notifications-outline" size={24} />
                <Ionicons name="cart-outline" size={24} style={{ marginLeft: 12 }} />
            </View>

            {/* Ana içerik */}
            <View>
                <Text>Anasayfa</Text>
            </View>
        </ThemedView>
    )
}
