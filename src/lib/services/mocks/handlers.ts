import { rest } from 'msw'

import mockArticles from './resolvers/mockArticles'


const handlers = [
  rest.get(
    'https://hoge.sample.com/backend/api/articles',
    mockArticles
  ),
]


export default handlers
