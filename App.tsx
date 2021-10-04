/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
 } from 'react-native';
 
 import Storyteller from '@getstoryteller/react-native-storyteller-sdk';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
             <Storyteller
               style={styles.storyContainer}
               apiKey={"3bf2d93c-7a9b-40af-9217-03409c1aadc6"}
               externalUserId={"test-user"}
             />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   storyContainer: {
     height: 168,
     width: 'auto',
   },
 });
 
 export default App;