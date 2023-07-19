import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import Home from "./Home";
import { AntDesign,Feather } from '@expo/vector-icons'; 
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';
import Product from "./Product";
import { CoffeeItem } from "../App";
export type RootStackParamList = {
  home: undefined;
  product: { item: CoffeeItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const NavigationScreen = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{contentStyle:{
      
      backgroundColor:"rgb(243 244 246/1)"
  
  }}}>
        <Stack.Screen name="home" component={TabNavigations} options={{headerShown: false}} />
        <Stack.Screen name="product" component={Product} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>;
};

function TabNavigations(){
return (
  <>
<Tab.Navigator screenOptions={({route})=>({headerShown:false,tabBarShowLabel:false,tabBarStyle:{
  marginBottom: 20,
  minHeight: 75,
  marginVertical:0,
  borderRadius: 100,
  marginHorizontal: 20,
justifyContent:"center",
    backgroundColor:"#8c5319",
  },
  
  tabBarIcon:({focused})=>menuIcon(focused,route),
  
  })}

  >
    <Tab.Screen name="HomeTab" component={Home}/>
    <Tab.Screen name="favorite" component={Home}/>
    <Tab.Screen name="cart" component={Home}/>
   
  </Tab.Navigator>
  </>
  

)

}
function menuIcon(focused:boolean,route:RouteProp<ParamListBase, string>){
let icon:JSX.Element=<HomeSolid size="30" color="#8c5319" />
if (route.name === 'HomeTab') {
  icon =  focused? <HomeSolid size="30" color="#8c5319" /> : <HomeOutline size="30" strokeWidth={2} color="white" />
} else if (route.name === 'favorite') {
  icon =  focused? <HeartSolid size="30" color="#8c5319" /> : <HeartOutline size="30" strokeWidth={2} color="white" />
}else if(route.name==='cart'){
  icon =  focused? <BagSolid size="30" color="#8c5319" /> : <BagOutline size="30" strokeWidth={2} color="white" />
}


  return <View className={`${focused?"bg-white":""} flex-row p-3 rounded-full justify-center items-center`}>
    {icon}
  </View>
}
export default NavigationScreen;
