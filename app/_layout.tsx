import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FF6720',
                tabBarInactiveTintColor: '#757575',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                },
            }}
        >
            <Tabs.Screen
                name="(tabs)/index"
                options={{
                    headerShown: false,
                    title: 'Anasayfa',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(tabs)/favorites"
                options={{
                    headerShown: false,
                    title: 'Favorilerim',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(tabs)/cart"
                options={{
                    headerShown: false,
                    title: 'Sepet',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(tabs)/account"
                options={{
                    headerShown: false,
                    title: 'hesabım',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
