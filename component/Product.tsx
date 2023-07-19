import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./Navigation";
import {
  ArrowLeftCircleIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon 
} from "react-native-heroicons/outline";

import { PlusSmallIcon, MinusSmallIcon } from "react-native-heroicons/outline";

import { HeartIcon, StarIcon } from "react-native-heroicons/solid";

interface Sizes {
  id: number;
  name: String;
}
const Sizes: Sizes[] = [
  { id: 1, name: "small" },
  { id: 2, name: "medium" },
  { id: 3, name: "large" },
];

const Product = () => {
  const [activeCategory, setactiveCategory] = useState<number>(1);
  const [CofeeNumber, setCofeeNumber] = useState<number>(0);
  const screenWidth = Dimensions.get("window").width;

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "product">>();
  const { desc, id, image, name, price, stars, volume } = route.params.item;

  function minusFunction() {
    if (CofeeNumber === 0) return;
    setCofeeNumber((prev) => prev - 1);
  }
  function pluseFunction() {
    setCofeeNumber((prev) => prev + 1);
  }

  return (
    <ScrollView className=" relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground2.png")}
        className="h-[250] w-full absolute rounded-b-[40px]"
        resizeMode="cover"
      />
      <View className="py-[40] px-2">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon color={"white"} size="50" strokeWidth={1.1} />
          </TouchableOpacity>
          <TouchableOpacity className=" border-[1px] rounded-full p-1 border-white">
            <HeartIcon color={"white"} size="33" strokeWidth={1.1} />
          </TouchableOpacity>
        </View>
        {/* image */}
        <View className="items-center">
          <View
            className=" items-center h-[250] w-[250] rounded-full"
            style={{
              elevation: 18,
            }}
          >
            <Image
              source={image}
              className="w-full h-full "
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="space-x-2 p-2 bg-[#8c5319]/80 items-center rounded-full flex-row max-w-[100]">
          <StarIcon size={24} color="white" />
          <Text className="text-white text-lg ">{stars}</Text>
        </View>
        {/* name and price */}

        <View className="flex-row justify-between items-center my-2">
          <Text className="text-2xl text-black/75 font-bold">{name}</Text>
          <Text className="text-lg">{price} $</Text>
        </View>

        {/* coffee size */}
        <View>
          <Text className="text-lg mb-2 ">Coffee Size</Text>
          <FlatList
            data={Sizes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(itemData) => {
              const { item } = itemData;
              let isActive = item.id === activeCategory;
              let activeClass = isActive ? "bg-[#8c5319]" : "bg-gray-200";
              return (
                <View
                  className={` ${activeClass}  shadow items-center justify-center py-3 rounded-full mr-2 `}
                  style={{
                    width: screenWidth / 3 - 10,
                  }}
                >
                  <TouchableOpacity onPress={() => setactiveCategory(item.id)}>
                    <Text
                      className={`text-[17px] text-center ${isActive ? "text-gray-200" : "text-black"
                        }`}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            className="category mt-3 "
          />
        </View>
        <View className="my-2">
          <Text className="text-lg mb-2 ">About</Text>
          <Text className="text-sm  ">{desc}</Text>
        </View>

        <View className="my-2 flex-row justify-between items-center ">
          <View className="flex-row space-x-2">
            <Text className="text-lg text-black/25 ">Volume</Text>
            <Text className="text-lg  ">{volume}</Text>
          </View>
          <View className="border-[1px]  rounded-full flex-row items-center p-1 space-x-3  ">
            <TouchableOpacity onPress={minusFunction}>
              <MinusSmallIcon size={30} strokeWidth={1.1} color={"black"} />
            </TouchableOpacity>
            <Text>{CofeeNumber}</Text>
            <TouchableOpacity onPress={pluseFunction}>
              <PlusSmallIcon size={30} strokeWidth={1.1} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center space-x-10 p-x-2 my-3">
          <TouchableOpacity className="border-[1px] border-[#8c5319] rounded-full p-2">
          <ShoppingBagIcon size={30} color={"#8c5319"}  />

          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#8c5319] p-3 rounded-full "><Text className="text-center text-white ">Buy Now</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
