import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

afterEach( () => {
  cleanup();
  // reset our spy function between each test for prevent errors
  console.error.mockClear();
});

//<Movie /> requires props.  If no props, display an error.  Create Spy Function //
console.error = jest.fn();


test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: 'hi',
  title: 'Level Up Big Day Out',
  poster_path: 'adlkfjsld',
};

test('Movie /> with movie', () => {
  const { debug, getByTestId} = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>,
  );
  expect(console.error).not.toHaveBeenCalled();
  // We want to make sure that the link is linking to the proper place
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
  debug();
});
