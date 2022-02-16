// import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('check if element', () => {
  it('list of task is in the document', async () => {
    render(<App />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
  it('input for task title is in the document', async () => {
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Task Title' });
    expect(input).toBeInTheDocument();
  });
  it('input for task details is in the document', async () => {
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Task Details' });
    expect(input).toBeInTheDocument();
  });
  it('button is in the document', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('check if list', () => {
  it('has a new task', async () => {
    render(<App />);
    const title = screen.getByRole('textbox', { name: 'Task Title' });
    const details = screen.getByRole('textbox', { name: 'Task Details' });
    const button = screen.getByRole('button');
    fireEvent.change(title, { target: { value: 'A new Task Title' } });
    fireEvent.change(details, { target: { value: 'A new Task Detail' } });
    fireEvent.click(button);
    await expect(screen.getByText('A new Task Title')).toBeInTheDocument();
  });
});
