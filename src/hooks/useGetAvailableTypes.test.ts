import { act, renderHook } from '@testing-library/react';

import { typeList } from '@/mocks/graphql';
import { useGetAvailableTypes } from './useGetAvailableTypes';

vi.mock('@/services/graphqlApi', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/services/graphqlApi')>();
  return {
    ...actual,
    getAvailableTypes: vi.fn().mockResolvedValue(typeList),
  };
});

describe('useGetAvailableTypes', () => {
  test('returns default value', () => {
    const { result } = renderHook(() => useGetAvailableTypes());
    expect(result.current.availableTypes).toEqual([]);
  });

  test('returns correct result', async () => {
    const url = 'https://example.com/graphql';
    const { result } = renderHook(() => useGetAvailableTypes());
    const isSuccess = await act(async () => result.current.getTypes(url));
    expect(isSuccess).toBe(true);
    expect(result.current.availableTypes).toEqual(typeList);
  });
});
