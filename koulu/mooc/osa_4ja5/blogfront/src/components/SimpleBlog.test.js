import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'blog title',
    author: 'blog author',
    url: 'blog url',
    likes: 1
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  /*component.debug()*/

  expect(component.container).toHaveTextContent(
    'blog title', 'blog author', 'blog url', 1
  )
  
})

test('button click', () => {

    const blog = {
        title: 'blog title',
        author: 'blog author',
        url: 'blog url',
        likes: 1
      }

    const mockHandler = jest.fn()

    const { getByText } = render(
        <SimpleBlog blog={blog} onClick={mockHandler} />
    )

    const button = getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
})

/*

 Tee oman sovelluksesi komponentille Blog testit,
  jotka varmistavat, että oletusarvoisesti
   blogista on näkyvissä ainoastaan nimi ja
    kirjoittaja, ja että klikkaamalla niitä
     saadaan näkyviin myös muut osat blogin tiedoista.
*/