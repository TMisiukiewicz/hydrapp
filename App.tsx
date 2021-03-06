import React from 'react';
import IntlProviderWrapper from './setup/intl/IntlProviderWrapper';
import TabNavigation from './setup/navigation/TabNavigation';
import UiWrapper from './setup/ui/UiWrapper';

const App: React.FC = () => {
  return (
    <IntlProviderWrapper>
      <UiWrapper>
        <TabNavigation />
      </UiWrapper>
    </IntlProviderWrapper>
  );
};

export default App;
