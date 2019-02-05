import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    index: number;
  };

var i = 0;
  
export default class ChatItem extends Component<Props> {

    original_index: number;
    calculated_random: number;
  
    constructor(props: Props) {
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
  

const styles = StyleSheet.create({
  
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