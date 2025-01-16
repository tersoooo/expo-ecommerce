import {View, Text} from "react-native";
import Header from "@/components/Header";
import Categories from "@/components/Categories";

export default function Index() {
    return (
        <View className="p-4 flex-1">
            <View className="flex-row items-center mb-4">
                <Header />
            </View>
            <View>
                <Categories />
            </View>
        </View>
    )
}
