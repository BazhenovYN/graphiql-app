import { TAB_WIDTH } from '@/constants/formatting';
import type { IApiResponse, IApiSchemaResponse, IGraphQLType } from '@/types';
import { OPERATION_NAME, QUERY } from './introspectionQuery';

interface IRequestOptions {
  query: string;
  variables: string;
  headers: string;
  operationName?: string;
}

const buildRequestBody = (options: IRequestOptions) => {
  const { query, variables, operationName } = options;
  const requestBody = {
    query,
    variables: variables === '' ? {} : JSON.parse(variables),
    operationName: operationName ?? null,
  };
  return JSON.stringify(requestBody);
};

const buildRequestHeaders = (options: IRequestOptions) => {
  const { headers } = options;
  return headers === '' ? {} : JSON.parse(headers);
};

const isValidTypeName = (type: IGraphQLType): boolean => {
  if (!type.name) {
    return false;
  }
  return /^(?!__).*/.test(type.name);
};

const fetchData = async <T>(
  url: string,
  body: string,
  headers: Record<string, string> = {}
): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });
  const data = (await response.json()) as T;
  return data;
};

export const getData = async (url: string, options: IRequestOptions): Promise<string> => {
  const requestBody = buildRequestBody(options);
  const headers = buildRequestHeaders(options);

  const responseData = await fetchData<IApiResponse>(url, requestBody, headers);

  return JSON.stringify(responseData, null, TAB_WIDTH);
};

export const getAvailableTypes = async (url: string): Promise<IGraphQLType[]> => {
  const options = {
    query: QUERY,
    variables: '',
    headers: '',
    operationName: OPERATION_NAME,
  };
  const requestBody = buildRequestBody(options);
  const { data } = await fetchData<IApiSchemaResponse>(url, requestBody);
  return data.__schema.types.filter(isValidTypeName);
};
