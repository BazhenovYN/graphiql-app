export type Language = 'en' | 'ru';

export type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};

export interface ISignInValues {
  password: string;
  email: string;
}

export interface INestedObject {
  [key: string]: INestedObject | string;
}

export interface IApiResponse {
  data: {
    [key: string]: INestedObject;
  };
}

export interface ISchema {
  queryType: {
    name: string;
  };
  types: IGraphQLType[];
}

export interface IApiSchemaResponse {
  data: {
    __schema: ISchema;
  };
}

export type KindsOfTypes = 'OBJECT' | 'SCALAR' | 'NON_NULL' | 'LIST' | 'INPUT_OBJECT' | 'ENUM';

export interface IArgument {
  name: string;
  type: IGraphQLTypeRef;
}

export interface IField {
  name: string;
  description: string | null;
  type: IGraphQLTypeRef;
  args: IArgument[];
}

export interface IEnum {
  name: string;
}

export interface IGraphQLType {
  name: string | null;
  description: string | null;
  kind: KindsOfTypes;
  fields: IField[] | null;
  inputFields: IField[] | null;
  enumValues: IEnum[] | null;
  ofType?: IGraphQLTypeRef | null;
}

export type IGraphQLTypeRef = Pick<IGraphQLType, 'name' | 'kind' | 'ofType'>;
