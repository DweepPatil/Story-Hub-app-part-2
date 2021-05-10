import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ReadStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This read story screen</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'silver'
    }
});
