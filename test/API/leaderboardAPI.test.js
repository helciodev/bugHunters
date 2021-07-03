import 'regenerator-runtime/runtime';
import fetchMock from 'jest-fetch-mock';
import Leaderboard from '../../src/leaderboardAPI/leaderboardAPI';

const response = [
  {
    user: 'Mario Ballot',
    score: 42,
  },
  {
    user: 'Peter Griffin',
    score: 35,
  },
];

const leaderboard = new Leaderboard();

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.doMock();
});

test('returns user scores', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'Mario Ballot',
        score: 42,
      },
      {
        user: 'Peter Griffin',
        score: 35,
      },
    ],
  }));

  const scores = await leaderboard.getScores();

  expect(scores.result).toEqual(response);
  expect(scores.result.length).toEqual(2);
  expect(scores.result[0].user).toEqual('Mario Ballot');
  expect(fetch.mock.calls.length).toEqual(1);
});

test('set the users score with success', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ result: 'Leaderboard score created correctly.' }]));
  const data = {
    user: 'John',
    score: 100,
  };

  const scores = await leaderboard.setScore(data);

  expect(scores[0].result).toEqual('Leaderboard score created correctly.');
});

test('should throw error with message', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ message: 'You need to provide a valid user for the score' }]));

  const scores = await leaderboard.setScore({});

  expect(scores[0].message).toEqual('You need to provide a valid user for the score');
});
