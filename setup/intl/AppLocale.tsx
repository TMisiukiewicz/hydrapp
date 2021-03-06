import SupportedLanguages from '../../utils/enums/SupportedLanguages';
import flattenObject from '../../utils/functions/flattenObject';
import en from './languages/en.json';

const languages = {
  [SupportedLanguages.English]: en,
};

const AppLocale: { [key: string]: { [key: string]: string } } = {
  ...Object.entries(SupportedLanguages).reduce((all, [, value]) => {
    return {
      ...all,
      [value]: flattenObject(languages[value]),
    };
  }, {}),
};

export default AppLocale;
