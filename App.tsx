import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import DialogBox from './src/MessageBox/DialogBox';
import { SliderBox } from "react-native-image-slider-box";
import { slideShowImages, backgroundImage } from './assets/Images';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage.image} resizeMode="cover" style={{
        flex: 1,
        justifyContent: 'center',
        opacity: 1
      }}>
        <View style={{ flex: 1 }} >
          <StatusBar style="auto" />
        </View>
        <View style={{ flex: 2 }} >
          <SliderBox
            images={slideShowImages.images}
            circleLoop={true}
            autoplay={true}
            dotStyle={{ display: "none" }}
          />
        </View>

        <DialogBox
          messages={[
            "Γεια σου μπουμπιτσα μου 😎!!",
            "Ελπιζω να εισαι καλα σημερα 💓",
            "Ηθελα να μαθω πως να φτιαχνω αυτο που κρατας στα χερια σου και μου εδωσες εμπνευση ",
            "Ηθελα να σου πω ποσο πολυ σαγαπαω και οτι εισαι ενα πολυ γλυκο και καλο ατομο ",
            "Και οτι σαγαπαω πολυ πολυ πολυ ",
          ]} />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
