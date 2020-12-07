import { rest } from 'msw';
import { mockMovies, aNewHopeMock } from './mockMovies';
import { peopleMock, C3PO } from './peopleMock';

const handlers = [
  rest.get(`${process.env.REACT_APP_ENDPOINT}/movies`, (_, res, ctx) =>
    res(ctx.json(mockMovies))
  ),
  rest.get(`${process.env.REACT_APP_ENDPOINT}/movies/1`, (_, res, ctx) =>
    res(ctx.json(aNewHopeMock))
  ),
  rest.post(`${process.env.REACT_APP_ENDPOINT}/people`, (_, res, ctx) =>
    res(ctx.json(peopleMock))
  ),
  rest.get(`${process.env.REACT_APP_ENDPOINT}/people/2`, (_, res, ctx) =>
    res(ctx.json(C3PO))
  )
];

export { handlers };
