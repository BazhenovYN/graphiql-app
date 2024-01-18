import { render } from '@testing-library/react';
import { CodeMirrorTextArea } from './CodeMirrorTextArea';

describe('TextArea', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<CodeMirrorTextArea value="text" language="json" />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });
});
