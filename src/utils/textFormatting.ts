import { TAB_WIDTH } from '@/constants/formatting';

export const formatJson = (text: string): string => {
  try {
    const parsedJson = JSON.parse(text);
    return JSON.stringify(parsedJson, null, TAB_WIDTH);
  } catch (error) {
    return text;
  }
};

export const prettifyQuery = (query: string[], tab = TAB_WIDTH): string => {
  let level = 0;
  let parenthesesIsOpen = false;
  let bracesIsOpen = false;
  let writeInLine = false;

  const getCurrentPadding = () => ' '.repeat(level * tab);

  const result: string[] = query.map((queryElement, i, queryArray) => {
    const nextElement = queryArray[i + 1];

    if (queryElement === '{') bracesIsOpen = true;
    if (queryElement === '}') bracesIsOpen = false;
    if (queryElement === '(') parenthesesIsOpen = true;
    if (queryElement === ')') parenthesesIsOpen = false;
    if (queryElement === '...' || nextElement === '@') writeInLine = true;

    if (/[()$!@]/.test(queryElement)) {
      return queryElement;
    }

    if (queryElement === ',') {
      if (nextElement === ',') return '';
      return parenthesesIsOpen ? `${queryElement} ` : `\n${getCurrentPadding()}`;
    }

    if (/[:]/.test(queryElement)) {
      return `${queryElement} `;
    }

    if (i === 0 && queryElement === '{') {
      level++;
      return `${queryElement}\n${getCurrentPadding()}`;
    } else if (queryElement === '{') {
      writeInLine = false;
      level++;
      return ` ${queryElement}\n${getCurrentPadding()}`;
    }

    if (queryElement === '}') {
      level--;

      if (level === 0 && nextElement) return `\n${queryElement}\n\n`;

      const padding = getCurrentPadding();
      return nextElement === '}'
        ? `\n${padding}${queryElement}`
        : `\n${padding}${queryElement}\n${padding}`;
    }

    if (!/[:,!${}()]/.test(nextElement)) {
      if (!bracesIsOpen || writeInLine) return `${queryElement} `;
      if (!parenthesesIsOpen) return `${queryElement}\n${getCurrentPadding()}`;
    }

    return queryElement;
  });

  return result.join('');
};

export const getQueryArray = (query: string): string[] => {
  return query
    .replace(/#.*(?=\n|$)|[\r\n\s]+/g, ' ')
    .replace(/[{}():,!$@]/g, (match) => ` ${match} `)
    .split(' ')
    .filter((s) => s !== '');
};

export const isQueryBracketsBalanced = (query: string[]): boolean => {
  const stack: string[] = [];

  if (!query.includes('{')) return false;

  for (let i = 0; i < query.length; i++) {
    const currentElement = query[i];

    if (/[{(]/.test(currentElement)) {
      stack.push(currentElement);
    }

    if (/[})]/.test(currentElement)) {
      if (stack.length === 0) {
        return false;
      }

      const lastElement = stack.pop();

      if (
        (lastElement === '(' && currentElement !== ')') ||
        (lastElement === '{' && currentElement !== '}')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
