import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {

    let component

    const user = {
        token: '1231231214',
        username: 'tester',
        name: 'Donald Tester'
    }

    beforeEach(() => {
        component = render(
            <App />
        )
    })


    test('login if not logged in', async () => {

        await waitForElement(
            () => component.container.querySelector('.login')
        )
        const login = component.container.querySelector('.login')
        expect(login).toHaveTextContent('login', 'username', 'password')

    })
    test('renders all blogs it gets from backend if logged in', async () => {

        localStorage.setItem('loggeduser', user)

        component.rerender(<App />)

        component.debug()

        console.log(localStorage.getItem('loggeduser'))

        await waitForElement(
            () => component.container.querySelector('.usertext')
        )

        expect(component.container).toHaveTextContent(
            'HTML is easy'
        )

        const blogit = component.queryAllByText('.clickable')
        expect(blogit.length).toBe(3)

    })
})