import { Mock } from 'vitest';

import flagEn from '@/assets/svg/EN.svg?react';
import flagRu from '@/assets/svg/RU.svg?react';
import { getFlag, translate, translations } from './translate';

beforeEach(() => {
  (fetch as Mock).mockReset();
  Object.keys(translations).forEach((key) => {
    delete translations[key];
  });
});

const language = 'en';
const mockTranslate = { key1: 'value1', key2: 'value2' };

describe('translate', () => {
  test('should translate key to value', () => {
    translations[language] = mockTranslate;
    const t = translate(language);

    expect(t('key1')).toBe('value1');
  });

  test('should return defaultValue if key is not found', () => {
    translations[language] = mockTranslate;
    const t = translate(language);

    expect(t('key3', 'default')).toBe('default');
  });

  test('should return key if translations are not loaded', () => {
    const t = translate(language);
    expect(t('key1')).toBe('key1');
  });
});

describe('getFlag', () => {
  test('should return flag for the given language', () => {
    expect(getFlag('en')).toBe(flagEn);
    expect(getFlag('ru')).toBe(flagRu);
  });
});
