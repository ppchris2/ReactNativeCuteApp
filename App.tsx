import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DialogBox from './src/MessageBox/DialogBox';
import Slideshow from 'react-native-image-slider-show';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 3, }} >

      </View>

      <DialogBox

        messages={[


          "Note!",

          "new note!",


        ]} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
