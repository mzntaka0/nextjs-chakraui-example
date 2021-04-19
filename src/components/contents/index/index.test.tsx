import React from 'react'
import {RecoilRoot} from 'recoil'
import {render, screen, waitFor, waitForElementToBeRemoved} from 'lib/tests/utils'
import {cache, SWRConfig} from 'swr'

import {server} from 'lib/services/mocks/server'
import {fetcher} from 'lib/services'
import Content from './index'


beforeEach(() => cache.clear())
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cache.clear()
})
afterAll(() => server.close())


describe('test', () => {
  it('msw test', async () => {
    render(<Content />)
    await waitFor(() => screen.getByRole("msw"));
    screen.findByText('Next.js')
    expect(screen.getByRole("msw")).toHaveTextContent("Next.js");
  });
})
