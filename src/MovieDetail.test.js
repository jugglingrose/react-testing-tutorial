import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MovieDetail from './MovieDetail';

//set our global fetch mock for the entire test suite //
global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
});

const match = {
  params: {
    id: 'hi',
  }
}

test('<MovieDetail />', () => {
  // mock our api called and return mock json data when called //
  /* This is still an async function. therefore, debug() below will be called
  before the data is returned so you won't see the data in your debug console */
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'Level up rules!',
      },
    }),
  );
  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
