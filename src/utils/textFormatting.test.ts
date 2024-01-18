import {
  formatJson,
  getQueryArray,
  isQueryBracketsBalanced,
  prettifyQuery,
} from './textFormatting';

const TAB_WIDTH = 2;

describe('formatJson', () => {
  test('correctly formats valid JSON', () => {
    const tab = ' '.repeat(TAB_WIDTH);
    const input = '{ "key":\n\t  "value"  \n\n  }';
    const expectedOutput = `{\n${tab}"key": "value"\n}`;
    expect(formatJson(input)).toBe(expectedOutput);
  });

  test('returns the input text when JSON parsing fails', () => {
    const invalidInput = 'invalid json';
    expect(formatJson(invalidInput)).toBe(invalidInput);
  });

  test('getQueryArray function should split array to separate elements', () => {
    const query = `auth{secure { public_key } }`;
    const queryArray = getQueryArray(query);

    expect(queryArray).toStrictEqual(['auth', '{', 'secure', '{', 'public_key', '}', '}']);
  });

  test('getQueryArray function should remove comments', () => {
    const query = `auth{#comment\n secure #comment\n { public_key } }`;
    const queryArray = getQueryArray(query);

    expect(queryArray).toStrictEqual(['auth', '{', 'secure', '{', 'public_key', '}', '}']);
  });

  test('getQueryArray function should remove line breaks and multiple spaces', () => {
    const query = `auth     {\n \n \n   secure {\n    public_key    }\n }`;
    const queryArray = getQueryArray(query);

    expect(queryArray).toStrictEqual(['auth', '{', 'secure', '{', 'public_key', '}', '}']);
  });

  test('isQueryBracketsBalanced function should correctly check that for every open bracket there is a corresponding closed bracket', () => {
    expect(isQueryBracketsBalanced(['auth', '{', 'secure', '{', 'key', '}', '}'])).toBe(true);
    expect(isQueryBracketsBalanced(['{', '{', '{', '{', '{', 'key', '}', '}'])).toBe(false);
    expect(isQueryBracketsBalanced(['{', '}', '}', '}', '}'])).toBe(false);
    expect(isQueryBracketsBalanced(['{', '}'])).toBe(true);
    expect(isQueryBracketsBalanced(['1', '1'])).toBe(false);
    expect(isQueryBracketsBalanced([])).toBe(false);
  });

  test('isQueryBracketsBalanced function should detect if brackets of different types are used incorrectly', () => {
    expect(isQueryBracketsBalanced(['{', ')'])).toBe(false);
    expect(isQueryBracketsBalanced(['{', ')', '}'])).toBe(false);
    expect(isQueryBracketsBalanced(['{', '(', ')', '}'])).toBe(true);
    expect(isQueryBracketsBalanced(['{', '(', '}', ')'])).toBe(false);
    expect(isQueryBracketsBalanced(['{', '{', ')', '}', ')'])).toBe(false);
  });

  test('prettifyQuery function should format query correctly', () => {
    const query = ['auth', '{', 'email', '}'];
    const expected = `auth {\n  email\n}\n`;

    expect(prettifyQuery(query, TAB_WIDTH)).toBe(expected);
  });

  test('prettifyQuery function should handle nested query blocks', () => {
    const query = ['query', 'myQuery', '{', 'user', '{', 'firstName', '}', '}'];
    const expected = `query myQuery {\n  user {\n    firstName\n  }\n}\n`;

    expect(prettifyQuery(query, TAB_WIDTH)).toBe(expected);
  });

  test('prettifyQuery function should join parentheses colons and dollar sign to element', () => {
    const query = [
      'query',
      'myQuery',
      '{',
      '$',
      'user',
      '(',
      'name',
      ':',
      'alex',
      ')',
      '{',
      'firstName',
      '}',
      '}',
    ];
    const expected = `query myQuery {\n  $user(name: alex) {\n    firstName\n  }\n}\n`;

    expect(prettifyQuery(query, TAB_WIDTH)).toBe(expected);
  });

  test('prettifyQuery function should not use line breaks between words before braces', () => {
    const query = ['query', 'myQuery', '{', '}'];
    const expected = `query myQuery {\n  \n}\n`;

    expect(prettifyQuery(query)).toBe(expected);
  });

  test('prettifyQuery function should remove duplicate commas', () => {
    const query = ['query', 'myQuery', '{', 'name', ',', ',', ',', 'age', '}'];
    const expected = `query myQuery {\n  name\n  age\n}\n`;

    expect(prettifyQuery(query)).toBe(expected);
  });

  test('prettifyQuery function should remove duplicate commas without line break inside () brackets', () => {
    const query = ['query', 'myQuery', '(', 'name', ',', ',', ',', ',', 'age', ')'];
    const expected = `query myQuery(name, age)`;

    expect(prettifyQuery(query)).toBe(expected);
  });
});
