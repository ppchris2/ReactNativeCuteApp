// DialogBox.js
import React, { useState, useEffect } from "react"; //highlight-line

import { Pressable, View, Text, Animated } from "react-native";
import { Message } from "./MessageBox";
import { AnimatedSpriteExample } from "../Sprites/SpriteWidget";

interface Props {
  messages: string[]
}

const DialogBox: React.FC<Props> = (props) => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleClick = () => {
    if (currentMessage < props.messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: 'skyblue',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: "space-between",
        width: 300,
        height: 100
      }}>
        <Message message={props.messages[currentMessage]} />
      </View>


      <AnimatedSpriteExample onPress={handleClick} />

    </View>
  );
};
export default DialogBox;