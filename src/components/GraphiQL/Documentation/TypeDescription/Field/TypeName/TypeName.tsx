import { Button, Flex } from 'antd';

import { IGraphQLTypeRef } from '@/types';

interface IProps {
  readonly type: IGraphQLTypeRef;
  readonly onSelectType: (name: string | null) => void;
}

const getTypeName = (type?: IGraphQLTypeRef | null): string => {
  if (!type) {
    return 'null';
  }
  return type.name ?? getTypeName(type.ofType);
};

const getIsNonNull = (type: IGraphQLTypeRef): boolean => {
  if (type.name) {
    return false;
  }
  if (type.kind === 'NON_NULL' && type.ofType && type.ofType.name) {
    return true;
  }
  if (!type.ofType) {
    return false;
  }
  return getIsNonNull(type.ofType);
};

const getTypeProps = (type: IGraphQLTypeRef) => {
  const name = getTypeName(type);
  const isValueNonNull = getIsNonNull(type);
  const isList = type.kind === 'LIST' || type.ofType?.kind === 'LIST';
  const isListIsNonNull = type.kind === 'NON_NULL' && type.ofType?.kind === 'LIST';
  return {
    name,
    isValueNonNull,
    isList,
    isListIsNonNull,
  };
};

export function TypeName({ type, onSelectType }: IProps) {
  const typeProps = getTypeProps(type);

  return (
    <Flex align="center" data-testid="type-name">
      {typeProps.isList && '['}
      <Button
        type="link"
        style={{ height: 'max-content', padding: 0 }}
        onClick={() => onSelectType(typeProps.name)}
      >
        {typeProps.name}
      </Button>
      {typeProps.isValueNonNull && '!'}
      {typeProps.isList && ']'}
      {typeProps.isListIsNonNull && '!'}
    </Flex>
  );
}
