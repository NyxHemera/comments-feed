import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TextInput from './text-input.component';

const user = userEvent.setup()

test('calls onChange', async () => {
  const testOnChange = vi.fn()
  render(<TextInput onChange={testOnChange} isLarge={true} name={`Message`} label={`Message`}></TextInput>);
  const textInput = await screen.findByRole('textbox');
  await user.click(textInput);
  await user.type(textInput, 'Hello');
  expect(testOnChange).toHaveBeenCalledTimes(5);
});