import React from 'react';
import UserContextWrapper from './setup/contexts/UserContext/UserContextWrapper';
import IntlProviderWrapper from './setup/intl/IntlProviderWrapper';
import TabNavigation from './setup/navigation/TabNavigation';
import UiWrapper from './setup/ui/UiWrapper';

const App: React.FC = () => {
  return (
    <IntlProviderWrapper>
      <UiWrapper>
        <UserContextWrapper>
          <TabNavigation />
        </UserContextWrapper>
      </UiWrapper>
    </IntlProviderWrapper>
  );
};

export default App;
