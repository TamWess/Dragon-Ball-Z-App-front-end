import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Style from "../Style.js";

import CharactersScreen from "./CharactersScreen";
import ProfileScreen from "./ArcsScreen.jsx";

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	FlatList,
	Button,
	TouchableOpacity,
	ImageBackground,
  } from "react-native";

//   const { Navigator, Screen } = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();

  const HomeScreen = ({navigation})=>{

		return(
			<>
				<View style={Style.container}>
					<ImageBackground source={require('../assets/img/home-background.jpg')} style={Style.container}>
						<Text style={Style.titreZ}>Z app</Text>
						<View style={Style.Bouton}>
								<Button 
								title="Characters"
								onPress={() => navigation.navigate("Characters")}
								color="#841584"
								/>
						</View>
						<View style={Style.Bouton}>
								<Button 
								title="Arcs"
								onPress={() => navigation.navigate("Profile")}
								/>
						</View>
						<View style={Style.Bouton}>
								<Button 
								title="News"
								onPress={() => navigation.navigate("News")}
								color="#E05E0E"
								/>
						</View>
					</ImageBackground>
				</View>
			</>
			
		)
  }

  export default HomeScreen