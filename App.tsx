import React from 'react';
import IntlProviderWrapper from './setup/intl/IntlProviderWrapper';
import Navigation from './setup/navigation/Navigation';
import UiWrapper from './setup/ui/UiWrapper';

const App: React.FC = () => {
  return (
    <IntlProviderWrapper>
      <UiWrapper>
        <Navigation />
      </UiWrapper>
    </IntlProviderWrapper>
  );
};

export default App;
