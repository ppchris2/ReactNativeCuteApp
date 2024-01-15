import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,

} from 'react-native';
// import sample from 'lodash.sample';

import AnimatedSprite from 'react-native-animated-sprite';
import { catSprite } from '../../assets/Images';

interface Props {
  onPress: () => void
}

export const AnimatedSpriteExample: React.FC<Props> = (props) => {


  const [hasBeenClicked, useHasBeenClicked] = React.useState(false);
  const ref = React.useRef();

  const onPress = () => {
    useHasBeenClicked(true)
    props.onPress()
  }



  return (
    <View style={styles.container}>
      <View style={{ width: 10, flex: 1 }}>
        <Text style={{ display: hasBeenClicked ? "none" : "flex", fontWeight: "bold", fontSize: 30 }}>Click Me 😘 -></Text>
      </View>
      <View style={styles.sprite}>
        <AnimatedSprite
          ref={ref}
          sprite={catSprite}
          animationFrameIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
          loopAnimation={true}
          coordinates={{
            top: 0,
            left: 0,
          }}
          size={{
            width: catSprite.size.width,
            height: catSprite.size.height,
          }}
          draggable={false}
          // tweenOptions = {this.state.tweenOptions}
          tweenStart={'fromMethod'}
          onPress={onPress}
        />


      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

  },
  placeholder: {
    flex: 1,
  },
  sprite: {
    flex: 0.5,
  },
});

