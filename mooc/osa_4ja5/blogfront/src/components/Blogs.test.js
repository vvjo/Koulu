import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blogs from './Blogs'

describe('Togglable content', () => {
    let component

    const blogs = [
        {
            title: 'titl1',
            author: 'au1',
            url: 'url1',
            likes: 1,
            user: { username: 'aaa', name: 'aaa' }
        },
        {
            title: 'titl2',
            author: 'au2',
            url: 'url2',
            likes: 2,
            user: { username: 'aaa', name: 'aaa' }
        },
        {
            title: 'titl3',
            author: 'au3',
            url: 'url3',
            likes: 3,
            user: { username: 'ccc', name: 'ccc' }
        }
    ]

    const user = {
        username: 'aaa',
        name: 'aaa'
    }

    const mockService = jest.fn()

    beforeEach(() => {
        component = render(
            <Blogs
                blogs={blogs}
                blogService={mockService}
                setMsg=''
                setColor=''
                user={user}
            />
        )
    })

    test('renders its children', () => {
        component.container.querySelector('.showWhenClicked')
    })

    test('at start the children are not displayed', () => {
        const div = component.container.querySelector('.showWhenClicked')

        expect(div).toHaveStyle('display: none')
    })

    test('after clicking the button, children are displayed', () => {
        const div = component.container.querySelector('.clickable')
        fireEvent.click(div)

        const div2 = component.container.querySelector('.showWhenClicked')
        expect(div2).not.toHaveStyle('display: none')
    })

})