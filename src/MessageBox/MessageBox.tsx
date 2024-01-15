// import React, { useMemo } from "react";
// import { Text, View } from 'react-native';
// import { useTransition, animated } from '@react-spring/native';


// interface MessageProps {
//     message: string;
// }

// const Message: React.FC<MessageProps> = (props) => {
//     const items = useMemo(
//         () =>
//             props.message.split("").map((letter, index) => ({
//                 item: letter,
//                 index: index,
//                 key: `${letter}${index}`
//             })),
//         [props.message]
//     );

//     const transitions = useTransition(items, {
//         from: { display: "none" },
//         enter: { display: "" },
//         trail: 55,
//     });

//     return <View style={{ flexDirection: 'row', padding: 10 }}>{
//         transitions((style, item) => {


//             var test = ""
//             var test2 = ""
//             if (item.index > 30) {
//                 test2 = item.item
//             }
//             else {
//                 test = item.item
//             }


//             if (item.index > 30) {
//                 return <View>
//                     <animated.Text key={item.key} style={{ ...style }}>
//                         {test}
//                     </animated.Text>
//                     <animated.Text key={item.key + "next"} style={{ ...style }}>
//                         {test2}
//                     </animated.Text>
//                 </View>
//             }
//             else {
//                 return <View>
//                     <animated.Text key={item.key} style={{ ...style }}>
//                         {test}
//                     </animated.Text>
//                 </View>
//             }





//         }
//         )}</View>;
// };
// export default Message;


import React, { useRef, useEffect, useMemo } from 'react';
import { Animated, Text } from 'react-native';


interface MessageProps {
    message: string;
}

export const Message: React.FC<MessageProps> = (props) => {
    const writeAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        writeAnimation.setValue(0)
        Animated.timing(writeAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [writeAnimation, props.message]);

    return (
        <Animated.View
            style={{
                padding: 10,
                opacity: writeAnimation,
            }}>
            <Text>{props.message}</Text>
        </Animated.View>
    )
}