import { useCallback, useState } from 'react';

import { App } from 'antd';

import { useTranslate } from '@/context/TranslateContext';
import { getAvailableTypes } from '@/services/graphqlApi';
import { IGraphQLType } from '@/types';

export function useGetAvailableTypes() {
  const { notification } = App.useApp();
  const { t } = useTranslate();

  const [isTypesLoading, setIsTypesLoading] = useState(false);
  const [availableTypes, setAvailableTypes] = useState<IGraphQLType[]>([]);

  const getTypes = useCallback(
    async (url: string) => {
      try {
        setIsTypesLoading(true);
        setAvailableTypes([]);
        const types = await getAvailableTypes(url);
        setAvailableTypes(types);
        return true;
      } catch (error) {
        notification.error({
          message: t('Errors.UnexpectedError', 'Unexpected error'),
          description: t('Errors.FailedGetData', 'Failed to get data from the selected API'),
        });
        return false;
      } finally {
        setIsTypesLoading(false);
      }
    },
    [notification, t]
  );

  return { isTypesLoading, availableTypes, getTypes };
}
