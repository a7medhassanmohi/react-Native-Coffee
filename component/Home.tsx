
  import React, { useState } from "react";
  import { Entypo, MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
  import Carousel from 'react-native-snap-carousel-v4';
  import CoffeeCard from "./CoffeeCard";
import { FlatList, Image, Text, View,TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";
  export const categories = [
    {
      id: 1,
      title: "Cappuccino",
    },
    {
      id: 2,
      title: "Latte",
    },
    {
      id: 3,
      title: "Espresso",
    },
    {
      id: 4,
      title: "Mocha",
    },
    {
      id: 5,
      title: "Americano",
    },
  ];

export interface CoffeeItem{
    id:number,
    name:string,
    price:string,
    volume:string,
    stars:string,
    image:any,
    desc:string,
  }
  
  export const coffeeItems: CoffeeItem[] = [
    {
      id: 1,
      name: 'Black Coffee',
      price: '25.50',
      volume: '116 ml',
      stars: '4.6',
      image: require('../assets/images/coffee1.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
    },
    
    {
      id: 2,
      name: 'Cappuccino',
      price: '15.50',
      volume: '110 ml',
      stars: '4.3',
      image: require('../assets/images/coffee2.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
    },
    
    {
      id: 3,
      name: 'Espresso',
      price: '30.00',
      volume: '100 ml',
      stars: '4.0',
      image: require('../assets/images/coffee3.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
    {
      id: 4,
      name: 'Latte',
      price: '10.30',
      volume: '80 ml',
      stars: '3.5',
      image: require('../assets/images/coffee4.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
    {
      id: 5,
      name: 'Mocha',
      price: '23.10',
      volume: '120 ml',
      stars: '4.7',
      image: require('../assets/images/coffee5.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
  
  ];
  type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

  type Props = {
    navigation: HomeScreenNavigationProp;
  };
  
  
  const Home:React.FC<Props> = ({navigation}) =>{
    const navigate=useNavigation()
    const [activeCategory, setActiveCategory] = useState<Number>(1);
    const renderItem = ( {item} : { item: CoffeeItem }) => {
      return (
        <TouchableOpacity onPress={()=>navigation.navigate("product",{item})}>
          <CoffeeCard items={item} />
        </TouchableOpacity>
      );
    };

    return (
      //header
      <View className="py-[40] px-2 relative bg-gray-100">
        <Image
          source={require("../assets/images/beansBackground1.png")}
          resizeMode="cover"
          className="h-[150] absolute opacity-40 "
        />
        {/* header icons */}
        <View className="HeaderIcon flex-row justify-between items-center">
          <View>
            <Image
              source={require("../assets/images/avatar.png")}
              className="w-[45] h-[45] rounded-full"
            />
          </View>
          <View className="flex-row gap-1">
            <Entypo name="location-pin" size={30} color="#8c5319" />
            <Text className="text-[20px]">Alexandria</Text>
          </View>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={25}
            color="#8c5319"
          />
        </View>
        {/* search */}
        <View className="Search  justify-center bg-gray-200 mt-8   rounded-full h-[50] relative shadow-md ">
          <TextInput
            placeholder="your text"
            className="w-full text-[15px]  p-3"
            placeholderTextColor="black"
          />
          <TouchableOpacity className="absolute right-3 rounded-full bg-[#8c5319] w-10 h-10 items-center justify-center">
            <EvilIcons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* category */}
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => {
            const { item } = itemData;
            let isActive = item.id === activeCategory;
            let activeClass = isActive ? "bg-[#8c5319]" : "bg-gray-200";
            return (
              <View   className={` ${activeClass} mx-2 shadow items-center justify-center py-3 px-5 rounded-full`}>
                <TouchableOpacity
                
                  onPress={() => setActiveCategory(item.id)}
                >
                  <Text
                    className={`text-[17px] text-center ${
                      isActive ? "text-gray-200" : "text-black"
                    }`}
                  >
                
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          className="category mt-3 "
        />
     <Carousel<CoffeeItem>
         vertical={false}
         data={coffeeItems}
         renderItem={renderItem }
         sliderWidth={374}
         loop={true}
         containerCustomStyle={{overflow: 'visible',}}
         itemWidth={270}
         firstItem={1}
         slideStyle={{display: 'flex', alignItems: 'center' ,marginTop:70}}
         inactiveSlideOpacity={0.75}
         inactiveSlideScale={0.8}
  
        />
        {/* carousel */}
     
      </View>
    );
  };
  
  export default Home