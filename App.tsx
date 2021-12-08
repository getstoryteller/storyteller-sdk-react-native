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
     flex: 1
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             flex: 1,
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
             <Storyteller
               style={styles.storyContainer}
               apiKey={"test-key"}
               externalUserId={"test-user"}

              // learn more - https://docs.getstoryteller.com/documents/react-native-sdk/StorytellerComponent

              // Categories for which stories will be preloaded
              // categoriesToPreload={}
              
              // Categories for which row will display storie
              // categories={} 
              
              // URL of custom instance to run API
              // customInstanceHost={}

              // Style of the cell in the row - can be 'round' or 'square'
              // cellType={} 

              // Horizontal spacing of the cells in the row - default is 0
              // cellSpacing={} 

              // Left inset of cells in the row - default is 0
              // leftInset={} 

              // Right inset of cells in the row - default is 0
              // rightInset={} 

              // SDK specific appearance customization
              // theme={} 

              // Callback for initialization errors
              // onInitializationFailure={} 

              // Callback for when the SDK starts loading story data
              // onDataLoadStarted={} 

              // Callback for when the SDK finishes loading story data
              // onDataLoadCompleted={} 

              // Callback for when the user exits the story player view
              // onStoryDismiss={} 

              // Callback for when the user interacts with the SDK
              // onUserActivityOccurred={} 

              // Callback for when the user swipes up on a page configured as inApp link
              // onUserSwipedUpToApp={} 

              // Callback for when a tile in the row becomes visible
              // onTileBecameVisible={} 

              // Callback for when the SDK needs ads to render, if your integration uses ads
              // onGetAdsForRow={} 

              // Callback for when the SDK opens a deep link and reports success
              // onOpenDeeplinkResult={} 
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