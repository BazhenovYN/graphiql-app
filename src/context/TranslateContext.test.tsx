import { act, fireEvent, render } from '@testing-library/react';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import { TranslateProvider, useTranslate } from './TranslateContext';

vi.mock('@/context/TranslateContext', async () => {
  return vi.importActual('@/context/TranslateContext');
});

const TestComponent = () => {
  const { language, availableLanguages, setLanguage } = useTranslate();

  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="available-languages">{availableLanguages.join(',')}</div>
      <button data-testid="set-language-ru" onClick={() => setLanguage('ru')}>
        Set Language to RU
      </button>
    </div>
  );
};

describe('TranslateProvider', () => {
  test('renders children without crashing', async () => {
    const { getByText } = await act(async () =>
      render(
        <TranslateProvider>
          <div>Test Child</div>
        </TranslateProvider>
      )
    );

    const component = getByText('Test Child');
    expect(component).toBeInTheDocument();
  });

  test('provides default values to the context', async () => {
    const { getByTestId } = await act(async () =>
      render(
        <TranslateProvider>
          <TestComponent />
        </TranslateProvider>
      )
    );

    const language = getByTestId('language');
    const allLanguages = getByTestId('available-languages');
    expect(language.textContent).toBe(DEFAULT_LANGUAGE);
    expect(allLanguages.textContent).toBe(AVAILABLE_LANGUAGES.join(','));
  });

  test('updates the language when setLanguage is called', async () => {
    const { getByTestId } = await act(async () =>
      render(
        <TranslateProvider>
          <TestComponent />
        </TranslateProvider>
      )
    );

    await act(async () => fireEvent.click(getByTestId('set-language-ru')));
    const language = getByTestId('language');
    expect(language.textContent).toBe('ru');
  });
});
