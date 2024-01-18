import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';
import * as context from './context/TranslateContext';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

afterEach(() => {
  cleanup();
});

const tMock = vi.fn().mockImplementation((key: string, value?: string) => value ?? key);

vi.mock('@/context/TranslateContext', async () => {
  const actual: typeof context = await vi.importActual('@/context/TranslateContext');
  return {
    ...actual,
    useTranslate: () => ({
      language: DEFAULT_LANGUAGE,
      availableLanguages: AVAILABLE_LANGUAGES,
      t: tMock,
      setLanguage: vi.fn(),
    }),
  };
});

global.fetch = vi.fn();
