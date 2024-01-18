import type { IArgument, IEnum, IField, IGraphQLType } from '@/types';

export const argList: IArgument[] = [
  {
    name: 'lang',
    type: {
      kind: 'SCALAR',
      name: 'String',
      ofType: null,
    },
  },
  {
    name: 'id',
    type: {
      kind: 'NON_NULL',
      name: null,
      ofType: {
        kind: 'SCALAR',
        name: 'ID',
        ofType: null,
      },
    },
  },
];

export const nameField: IField = {
  name: 'name',
  description: null,
  args: argList,
  type: {
    kind: 'SCALAR',
    name: 'String',
    ofType: null,
  },
};

export const countriesField: IField = {
  name: 'countries',
  description: 'Test description',
  args: [],
  type: {
    kind: 'NON_NULL',
    name: null,
    ofType: {
      kind: 'LIST',
      name: null,
      ofType: {
        kind: 'NON_NULL',
        name: null,
        ofType: {
          kind: 'OBJECT',
          name: 'Country',
          ofType: null,
        },
      },
    },
  },
};

export const languageField: IField = {
  name: 'languages',
  description: null,
  args: [],
  type: {
    kind: 'NON_NULL',
    name: null,
    ofType: {
      kind: 'LIST',
      name: null,
      ofType: {
        kind: 'OBJECT',
        name: 'Language',
        ofType: null,
      },
    },
  },
};

export const codeField: IField = {
  name: 'code',
  description: null,
  args: [],
  type: {
    kind: 'NON_NULL',
    name: null,
    ofType: {
      kind: 'SCALAR',
      name: 'ID',
      ofType: null,
    },
  },
};

export const fields: IField[] = [codeField, countriesField, nameField, languageField];

export const enumValues: IEnum[] = [
  {
    name: 'defaultValue1',
  },
  {
    name: 'defaultValue2',
  },
];

export const scalarType: IGraphQLType = {
  kind: 'SCALAR',
  name: 'Boolean',
  description: 'The `Boolean` scalar type description',
  fields: null,
  inputFields: null,
  enumValues: null,
};

export const objectType: IGraphQLType = {
  kind: 'OBJECT',
  name: 'Continent',
  description: 'Test type description',
  fields: fields,
  inputFields: fields,
  enumValues: enumValues,
};

export const typeList: IGraphQLType[] = [scalarType, objectType];
