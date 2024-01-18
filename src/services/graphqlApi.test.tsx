import { Mock } from 'vitest';

import { createFetchResponse } from '@/mocks/utils';
import { getAvailableTypes, getData } from './graphqlApi';

beforeEach(() => {
  (fetch as Mock).mockReset();
});

describe('getData', () => {
  test('returns the correct result', async () => {
    const url = 'https://example.com/api';
    const options = {
      query: 'exampleQuery',
      variables: '{"var1": "value1", "var2": "value2"}',
      headers: '{"Authorization": "Bearer Token"}',
    };
    const mockData = { data: 'exampleData' };
    (fetch as Mock).mockResolvedValue(createFetchResponse(mockData));

    const result = await getData(url, options);
    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(JSON.stringify(mockData, null, 2));
  });
});

describe('getAvailableTypes', () => {
  test('returns the correct result', async () => {
    const url = 'https://example.com/api';
    const mockData = {
      data: {
        __schema: {
          types: [
            { name: 'regularType1' },
            { name: 'regularType2' },
            { name: 'regularType3' },
            { name: '__systemType1' },
            { name: '__systemType2' },
          ],
        },
      },
    };
    (fetch as Mock).mockResolvedValue(createFetchResponse(mockData));

    const result = await getAvailableTypes(url);
    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual([
      { name: 'regularType1' },
      { name: 'regularType2' },
      { name: 'regularType3' },
    ]);
  });
});
