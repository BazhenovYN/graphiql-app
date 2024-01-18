import { Flex } from 'antd';

import { IArgument } from '@/types';

import { TypeName } from '../TypeName';

interface IProps {
  readonly args: IArgument[];
  readonly onSelectType: (name: string | null) => void;
}

export function ArgsList({ args, onSelectType }: IProps) {
  return (
    <Flex align="center" data-testid="args">
      <span>(</span>
      <Flex align="center" gap="0.2em" wrap="wrap">
        {args.map((arg, index) => (
          <Flex key={arg.name} align="center" gap="0.2em">
            <span style={{ color: '#FF6B8B' }}>{arg.name}:</span>
            <TypeName type={arg.type} onSelectType={onSelectType} />
            {index < args.length - 1 && <span>,</span>}
          </Flex>
        ))}
      </Flex>
      <span>)</span>
    </Flex>
  );
}
