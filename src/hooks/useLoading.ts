import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useLoading = () => {
  const { loading } = useSelector((state: RootState) => state.loading);

  return { loading };
};
