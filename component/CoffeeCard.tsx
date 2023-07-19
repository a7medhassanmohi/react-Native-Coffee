import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CoffeeItem } from "../App";
import { AntDesign, Entypo} from '@expo/vector-icons'; 

interface Props {
  items: CoffeeItem;
}
const CoffeeCard: React.FC<Props> = ({ items }) => {
  return (
    <View
      className="bg-[#8c5319] w-[270] h-[350]   p-5   "
      style={{
        borderRadius: 40,
        elevation: 5,
        
      }}
    >
      <View
        className=" -mt-[35%] flex-row justify-center "
        style={{
            
            elevation: 30,
            zIndex:999,  
            borderRadius:100
            // background color must be set
        }}
      >
        <Image
          source={items.image}
          resizeMode="contain"
            style={{
            borderRadius:10

            }}
          className=" w-[200] h-[200]"
        />
      </View>
      <Text className="text-[25px] text-white">{items.name}</Text>
      <View className="flex-row items-center space-x-2 p-2 bg-white/10 my-3 max-w-[100]  rounded-3xl ">
      <AntDesign name="star" size={24} color="white" />
      <Text className="text-white text-lg">{items.stars}</Text>
      </View>
      <View className="flex-row space-x-3 items-center">
        <Text className="text-white/60 text-[18px]">volume</Text>
        <Text className="text-white text-[18px]">{items.volume}</Text>
      </View>
      <View className="flex-row space-x-3 items-center justify-between mt-auto ">
        <Text className="text-white text-[22px] font-bold ">{items.price} $</Text>
        <TouchableOpacity className="w-[60] h-[60] bg-white rounded-full justify-center items-center" style={{elevation:9}}>
        <Entypo name="plus" size={34} color="#8c5319" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;
