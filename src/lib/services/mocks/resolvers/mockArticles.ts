import { ResponseResolver, MockedRequest, restContext } from 'msw';

import {Article} from 'lib/types/articles'


const mockArticles: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const articles: Article[] = [{
    id: 1,
    title: 'Next.js is awesome.',
    body: 'Next.js is pretty awesome'
  }]

  return res(ctx.json(articles));
};

export default mockArticles;
