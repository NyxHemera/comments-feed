import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './button.component';

const user = userEvent.setup()

test('calls onClick', async () => {
  const testOnClick = vi.fn()
  render(<Button onClick={testOnClick}>Press Me</Button>);
  const button = await screen.findByRole('button');
  await user.click(button);
  expect(testOnClick).toHaveBeenCalledOnce();
});