import * as React from "react";
import db from '../config';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class WriteStory extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',
      author:'',
      content:'',
    }
  }

  saveStory=async()=>{
   var {title}=this.state;
   var {author}=this.state;
   var {content}=this.state;
   console.log('Title: '+title+' Author: '+author+' Content: '+content);
   console.log('Saving...');
   await db.collection('Stories').add({
     "Title":title,
     "Author":author,
     "Content":content,
   });
   console.log('Story successfully saved!!')
  }

  updateStoryDetails(text,type){
    if(type==='title'){
      this.setState({title:text});
    }else if(type==='author'){
      this.setState({author:text});
    }else if(type==='content'){
      this.setState({content:text});
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: "gold" }}>
          <Header
            containerStyle={{ backgroundColor: "teal" }}
            centerComponent={{
              text: "Story Hub",
              style: {
                fontSize: 20,
                color: "white",
                fontStyle: "italic",
              },
            }}
          />
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Title" onChangeText={(text)=>this.updateStoryDetails(text,'title')} />
            <TextInput style={styles.input} placeholder="Author" onChangeText={(text)=>this.updateStoryDetails(text,'author')}/>
            <TextInput
              style={styles.storyInput}
              placeholder="Write Story"
              multiline={true}
              onChangeText={(text)=>this.updateStoryDetails(text,'content')}
            />

            <TouchableOpacity style={styles.submitBtn} onPress={()=>{this.saveStory();}}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
  },
  input: {
    margin: 20,
    width: 200,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
  storyInput: {
    margin: 15,
    width: 200,
    height: 170,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
  submitBtn: {
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 30,
  },
  submitBtnText: {
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationColor: "grey",
    fontWeight: "bold",
    color: "grey",
  },
});
