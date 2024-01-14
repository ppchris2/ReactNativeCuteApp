import React, { useMemo } from "react";
import { Text, View } from 'react-native';
import { useTransition, animated } from '@react-spring/native';


interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = (props) => {
    const items = useMemo(
        () =>
            props.message.split("").map((letter, index) => ({
                item: letter,
                key: `${letter}${index}`
            })),
        [props.message]
    );

    const transitions = useTransition(items, {
        from: { display: "none" },
        enter: { display: "" },
        trail: 55,
    });

    return <View style={{ flexDirection: 'row' }}>{
        transitions((style, item) => (
            <animated.Text key={item.key} style={style}>
                {item.item}
            </animated.Text>
        )
        )}</View>;
};
export default Message;

