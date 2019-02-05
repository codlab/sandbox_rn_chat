import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import InputField from "./InputField";
import ChatItem from "./ChatItem";

const ARRAY:number[] = [];
ARRAY.length = 1000000;

interface Props {

};

interface State {

}

export default class App extends Component<Props> {

  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.recycler_container}>
          { this.render2() }
        </View>
        <InputField />
      </View>
    )
  }
  
  render2() {
    return (
      <FlatList
        style={styles.container}
        data={ARRAY}
        maxToRenderPerBatch={4}
        inverted={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={true}
        key="array"
        keyExtractor={(item, index) => ""+index}
        renderItem={({index}) => <ChatItem index={index} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white"
  },

  recycler_container: {
    flexDirection: "column",
    flex: 1
  },
});
