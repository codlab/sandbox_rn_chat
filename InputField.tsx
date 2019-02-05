import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import TextInputLines from './TextInputLines'
import LinearGradient from 'react-native-linear-gradient';

const CAMERA = "a";
const PHOTO = "b";
const PLUS = "c";
const CHAT = "chat";

interface PropsInput {

};

interface State {
    text?: string;
}

export default class InputField extends Component<PropsInput, State> {
    state: State;

    constructor(props: PropsInput) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const { text } = this.state;

        const has = !!(text && text.length > 0);

        return (
        <View style={styles.input_field}>
            <View style={styles.padding}>
                <View style={{flex: 1}} />
                <LinearGradient 
                    style={styles.add_photo}
                    colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text style={[styles.custom_chat, styles.custom_white]}>{CAMERA}</Text>
                </LinearGradient>
                <View style={{flex: 1}} />
            </View>

            <View style={{width: 16}} />

            <TextInputLines
                autoFocus={true}
                style={{flex: 1, marginTop: 6}}
                placeholder="Input value"
                onChangeText={(text:string) => this.setState({text})}
                numberOfLines={3}
                />

            {
                has &&
                <View style={{flexDirection: "row"}}>
                    <View style={{width: 16}} />
                    <View style={styles.padding}>
                        <View style={{flex: 1}} />
                        <Text style={[styles.send_text]}>Send</Text>
                        <View style={{flex: 1}} />
                    </View>
                </View>
            }


            {
                !has &&
                <View style={{flexDirection: "row"}}>
                    <View style={{width: 16}} />
                    <View style={styles.padding}>
                        <View style={{flex: 1}} />
                        <Text style={[styles.custom_chat, styles.custom_gray]}>{PHOTO}</Text>
                        <View style={{flex: 1}} />
                    </View>
                    <View style={{width: 16}} />
                    <View style={styles.padding}>
                        <View style={{flex: 1}} />
                        <Text style={[styles.custom_chat, styles.custom_gray]}>{PLUS}</Text>
                        <View style={{flex: 1}} />
                    </View>
                </View>
            }
        </View>
        );
    }
}


const styles = StyleSheet.create({
    input_field: {
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: "row",
      borderRadius: 32,
      borderColor: "#aaaaaa",
      borderWidth: 1
    },

    custom_chat: {
        fontFamily: "chat"
    },

    custom_white: {
        color: "white",
        textAlign: 'center',
    },

    custom_gray: {
        color: "gray",
        textAlign: 'center',
        fontSize: 22
    },

    add_photo: {
        borderRadius: 16,
        width: 32,
        height: 32,
        justifyContent: "center"
    },

    padding: {
        flexDirection: "column",
        paddingTop: 10,
        paddingBottom: 10,
    },

    send_text: {
        color: "green",
        fontSize: 16,
        fontWeight: "bold"
    }
  });  