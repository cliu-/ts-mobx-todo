import React from 'react';
import NewTodoTextInput from './index';
// eslint-disable-next-line import/named
import { fireEvent, render, screen } from '@testing-library/react';
import { rootStore } from '../../store';

test('NewTodoTextInput', () => {
  render(<NewTodoTextInput appStore={rootStore} />);

  const input = screen.getByTestId('new-todo-input-text') as HTMLInputElement;

  // Header big text
  expect(screen.getByText('todos')).toBeInTheDocument();

  // Placeholder
  expect(
    screen.getByPlaceholderText('What needs to be done?')
  ).toBeInTheDocument();

  // type 'tidying my room'
  fireEvent.change(input, {
    target: { value: 'tidying my room' },
  });

  // assert input tag
  expect(input.value).toBe('tidying my room');

  // submit
  fireEvent.keyPress(input, {
    key: 'Enter',
    code: 13,
    charCode: 13, // I had issue that doesn't trigger keyPress event relevant charCode. https://github.com/testing-library/react-testing-library/issues/269
  });

  // text cleard
  expect(input.value).toBe('');
});
