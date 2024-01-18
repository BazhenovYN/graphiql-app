import { Flex, List, ListProps, Typography } from 'antd';
import { TbSquareRoundedChevronRight } from 'react-icons/tb';

interface IProps<T> extends ListProps<T> {
  readonly title: string;
}

export function FieldList<T>({ title, ...rest }: IProps<T>) {
  return (
    <>
      <Flex align="center" gap="small">
        <TbSquareRoundedChevronRight />
        <Typography.Text>{title}:</Typography.Text>
      </Flex>
      <List size="small" split={false} {...rest} />
    </>
  );
}
