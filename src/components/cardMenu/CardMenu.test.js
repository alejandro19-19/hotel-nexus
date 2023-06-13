import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import CardMenu from './CardMenu';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CardMenu', () => {
  test('navega al hacer clic', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const props = {
      title: 'Título de prueba',
      description: 'Descripción de prueba',
      image: 'imagen_de_prueba.jpg',
      number: 5,
      color: 'red',
      path: '/ruta-de-prueba',
    };

    const { getByTestId } = render(<CardMenu {...props} />);
    const cardMenu = getByTestId('click');

    fireEvent.click(cardMenu);

    expect(mockNavigate).toHaveBeenCalledWith(props.path);
  });
  test('renderiza la clase "red" cuando el color es "red"', () => {
    const props = {
      title: 'Título de prueba',
      description: 'Descripción de prueba',
      image: 'imagen_de_prueba.jpg',
      number: 5,
      color: 'red',
      path: '/ruta-de-prueba',
    };

    const { container } = render(<CardMenu {...props} />);
    const colorBgElement = container.querySelector('.color__bg');

    expect(colorBgElement.classList.contains('red')).toBe(true);
    expect(colorBgElement.classList.contains('purple')).toBe(false);
  });

  test('renderiza la clase "purple" cuando el color no es "red"', () => {
    const props = {
      title: 'Título de prueba',
      description: 'Descripción de prueba',
      image: 'imagen_de_prueba.jpg',
      number: 5,
      color: 'blue',
      path: '/ruta-de-prueba',
    };

    const { container } = render(<CardMenu {...props} />);
    const colorBgElement = container.querySelector('.color__bg');

    expect(colorBgElement.classList.contains('red')).toBe(false);
    expect(colorBgElement.classList.contains('purple')).toBe(true);
  });
});