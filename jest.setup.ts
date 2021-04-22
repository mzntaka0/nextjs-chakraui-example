import '@testing-library/jest-dom/extend-expect';
import next from 'next'
import {cache} from 'swr'
import {resolve} from 'path'

import {server} from 'lib/services/mocks/server'

next({
  dev: true,
  dir: resolve(__dirname, './')
})

beforeEach(() => cache.clear())
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cache.clear()
})
afterAll(() => server.close())
