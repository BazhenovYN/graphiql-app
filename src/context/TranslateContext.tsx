import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import type { Language } from '@/types';
import { translate } from '@/utils/translate';

interface ITranslateContext {
  language: Language;
  availableLanguages: Language[];
  setLanguage: (newLanguage: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const TranslateContext = createContext<ITranslateContext>({} as ITranslateContext);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const t = translate(language);

  const context = {
    language,
    availableLanguages: AVAILABLE_LANGUAGES,
    setLanguage,
    t,
  };

  return <TranslateContext.Provider value={context}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => useContext(TranslateContext);
