import React from 'react';
import { Text, View } from 'react-native';
import IntlProviderWrapper from './setup/intl/IntlProviderWrapper';

const App: React.FC = () => {
  return (
    <IntlProviderWrapper>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </IntlProviderWrapper>
  );
};

export default App;
