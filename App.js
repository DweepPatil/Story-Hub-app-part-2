import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WriteStory from "./Screens/WriteStoryScreen";
import ReadStory from "./Screens/ReadStoryScreen";

var TabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: WriteStory,
    ReadStoryScreen: ReadStory,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === "WriteStoryScreen") {
          return <Image source={require("./assets/screenImages/write.png")} style={{width:40,height:40}} />;
        } else if (routeName === "ReadStoryScreen") {
          return <Image source={require("./assets/screenImages/read.png")} style={{width:40,height:40}} />;
        }
      },
      tabBarLabel:()=>{
        const { routeName } = navigation.state;
        if (routeName === "WriteStoryScreen") {
          return <Text style={styles.label}>Write a Story!</Text>
        } else if (routeName === "ReadStoryScreen") {
          return <Text style={styles.label}>Read a Story!</Text>
        }
      },
    }),
    tabBarOptions: {
      tabStyle: { width: 200 },
      inactiveBackgroundColor:'rgba(10,10,10,0.1)',
      activeBackgroundColor:'rgba(0,125,125,0.3)'
    },
  }
);

var AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label:{
    textAlign:'center',
    fontSize:16,
    color:'slateblue'
  }
});
