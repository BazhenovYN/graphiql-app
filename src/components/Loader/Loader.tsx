import { Flex, Spin, SpinProps } from 'antd';

export function Loader({ ...rest }: SpinProps) {
  return (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
      <Spin size="large" delay={500} {...rest} data-testid="loader" />
    </Flex>
  );
}
