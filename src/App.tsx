import React from 'react';
import { SafeAreaView } from 'react-native';
import ThemeProvider from './providers/ThemeProvider';
import Router from './components/globals/Router/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
