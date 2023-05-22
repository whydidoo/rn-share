import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './src/routes/Navigator';

export const Application: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={style.rootView}>
        <Navigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  rootView: { flex: 1 },
});
