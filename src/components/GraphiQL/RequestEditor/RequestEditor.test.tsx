import { fireEvent, render } from '@testing-library/react';
import { RequestEditor } from './RequestEditor';

describe('RequestEditor', () => {
  test('renders correctly', () => {
    const { getByRole } = render(
      <RequestEditor
        query=""
        onChangeQuery={vi.fn()}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the variables tab', () => {
    const { getByRole } = render(
      <RequestEditor
        query=""
        onChangeQuery={vi.fn()}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );
    const tab = getByRole('tab', { name: /variables/i });
    expect(tab).toBeInTheDocument();
  });

  test('displays the headers tab', () => {
    const { getByRole } = render(
      <RequestEditor
        query=""
        onChangeQuery={vi.fn()}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );
    const tab = getByRole('tab', { name: /headers/i });
    expect(tab).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const query = 'Testing query';
    const { getByText } = render(
      <RequestEditor
        query={query}
        onChangeQuery={vi.fn()}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );

    expect(getByText('Testing')).toBeInTheDocument();
    expect(getByText('query')).toBeInTheDocument();
  });

  test('changes query value', () => {
    const newQuery = 'New query';
    const changeHandler = vi.fn();
    render(
      <RequestEditor
        query=""
        onChangeQuery={changeHandler}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );

    changeHandler(newQuery);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith(newQuery);
  });

  test('shows hidden panel after clicking the button', () => {
    const { getByRole, getByTestId } = render(
      <RequestEditor
        query=""
        onChangeQuery={vi.fn()}
        variables=""
        onChangeVariables={vi.fn()}
        headers=""
        onChangeHeaders={vi.fn()}
      />
    );
    const btn = getByTestId('btn-show-panel');
    fireEvent.click(btn);
    const tabPanel = getByRole('tabpanel');
    expect(tabPanel).toBeInTheDocument();
  });
});
