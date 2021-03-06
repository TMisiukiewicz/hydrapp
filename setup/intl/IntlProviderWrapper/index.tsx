import React from 'react';
import { IntlProvider } from 'react-intl';
import AppLocale from '../AppLocale';
import 'intl';
import 'intl/locale-data/jsonp/en';

const IntlProviderWrapper: React.FC = ({ children }) => {
  const currentLang = 'en-GB';

  return (
    <IntlProvider locale={currentLang} messages={AppLocale[currentLang]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
