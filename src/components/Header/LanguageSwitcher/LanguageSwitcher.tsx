import Icon from '@ant-design/icons';
import { Flex, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useTranslate } from '@/context/TranslateContext';
import { Language } from '@/types';
import { getFlag } from '@/utils/translate';
import styles from './LanguageSwitcher.module.scss';

export function LanguageSwitcher() {
  const { language, availableLanguages, setLanguage } = useTranslate();

  const handleChange = (value: Language) => {
    setLanguage(value);
  };

  const getOptions = (): SelectProps['options'] => {
    return availableLanguages.map((lang) => ({
      value: lang,
      label: lang.toLocaleUpperCase(),
      flag: getFlag(lang),
    }));
  };

  return (
    <Select
      className={styles.switcher + ' ' + styles.languageSwitcher + ' ' + styles.overwrite}
      defaultValue={language}
      onChange={handleChange}
      dropdownStyle={{ width: 'min-content' }}
      placement="bottomRight"
      options={getOptions()}
      optionRender={(option) => (
        <Flex justify="flex-end" gap="small">
          {option.data.flag && <Icon component={option.data.flag} />}
          {option.data.label}
        </Flex>
      )}
    />
  );
}
