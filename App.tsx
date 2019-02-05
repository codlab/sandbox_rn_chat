import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TextInput } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import InputField from "./InputField";

const ARRAY:number[] = [];
ARRAY.length = 1000000;

interface Props2 {
  index: number;
};

interface Props {

};

var i = 0;

class Comp extends Component<Props2> {

  original_index: number;
  calculated_random: number;

  constructor(props: Props2) {
    super(props);

    this.original_index = ++i;
    this.calculated_random = Math.round(Math.random()*100);
  }

  render() {
    const {index} = this.props;

    if(this.calculated_random % 2 == 0) {
      return (
        <View style={{flexDirection: "row"}}>
          <View style={styles.avatar}>
          <Text style={styles.text}>T</Text>
          </View>
          <View style={[styles.card, styles.left]}>
            <Text style={styles.text}>{index} {this.original_index}</Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      )
    }

    return (
      <View style={{flexDirection: "row"}}>
        <View style={{flex: 1}} />
        <View style={[styles.card, styles.right]}>
          <Text style={styles.text}>{this.calculated_random}</Text>
        </View>
      </View>
    )
  }
}

interface State {
  dataProvider: DataProvider;
}

export default class App extends Component<Props> {

  _layoutProvider: LayoutProvider;
  state: State;

  constructor(props: Props) {
    super(props);

    this._layoutProvider = new LayoutProvider(
      index => 0,
      (type, dim) => {
        dim.width = 300;
        dim.height = 100;
      }
    );

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this.state = {
      dataProvider: dataProvider.cloneWithRows(ARRAY)
    };
  }

  _rowRenderer(type: string|number, data: any, index: number) {
    return <Comp index={index} />
  }

  /**
  <View style={{flexDirection: "column", flex: 1}}>
    { this.renderRecycler() }
  </View>
   */
  render() {
    return (
      <View style={{flexDirection: "column", flex: 1, backgroundColor: "white"}}>

        <View style={{flexDirection: "column", flex: 1}}>
          { this.render2() }
        </View>
        <InputField />
      </View>
    )
  }
  renderRecycler() {
    return (
      <RecyclerListView
        canChangeSize={true}
        style={styles.container}
        layoutProvider={this._layoutProvider}
        forceNonDeterministicRendering={true}
        dataProvider={this.state.dataProvider}
        rowRenderer={(t, d, i) => this._rowRenderer(t, d, i)} />
    );
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
        renderItem={({index}) => <Comp index={index} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  text: {
    color: "white"
  },

  card:{
    margin:10,
    padding:10,
    backgroundColor: "#0042ec",
    borderRadius:10,
    flexDirection: "column",
    color: "white"
  },

  left: {
    marginLeft: 10
  },

  right: {
    marginRight: 40,
    backgroundColor: "#18E300"
  },

  avatar: {
    marginLeft:40,
    marginTop:10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E31100",
    justifyContent: "center"
  }
});
