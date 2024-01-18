import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AVAILABLE_LANGUAGES } from '@/constants/languages';
import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<LanguageSwitcher />, { wrapper: MemoryRouter });
    const langSwitcher = getByRole('combobox');
    expect(langSwitcher).toBeInTheDocument();
  });

  test('renders all available languages', () => {
    const { getByRole, getAllByRole } = render(<LanguageSwitcher />, { wrapper: MemoryRouter });
    const langSwitcher = getByRole('combobox');
    fireEvent.mouseDown(langSwitcher);
    const option = getAllByRole('option');
    expect(option).toHaveLength(AVAILABLE_LANGUAGES.length);
  });
});
