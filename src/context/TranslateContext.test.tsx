import { render, fireEvent, act } from '@testing-library/react';
import { TranslateProvider, useTranslate } from './TranslateContext';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import * as utils from '@/utils/translate';

vi.mock('@/context/TranslateContext', async () => {
  return vi.importActual('@/context/TranslateContext');
});

vi.mock('@/utils/translate', async () => {
  const actual: typeof utils = await vi.importActual('@/utils/translate');
  return {
    ...actual,
    loadLanguage: () => vi.fn(),
  };
});

const TestComponent = () => {
  const { language, availableLanguages, setLanguage } = useTranslate();

  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="available-languages">{availableLanguages.join(',')}</div>
      <button data-testid="set-language-ru" onClick={() => setLanguage('ru')}>
        Set Language to ES
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
