import React from 'react'
import {RecoilRoot} from 'recoil'
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import {cache} from 'swr'

import {server} from 'lib/services/mocks/server'
import Content from './index'


beforeEach(() => cache.clear())
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('test', () => {
  test('msw test', async () => {
    render(
      (
        <RecoilRoot>
          <Content />
        </RecoilRoot>
      )
    )


    //await waitFor(() => screen.getByRole("msw"));
    screen.findByText('Next.js')
    expect(screen.getByRole("msw")).toHaveTextContent("Next.js");
  });
})
