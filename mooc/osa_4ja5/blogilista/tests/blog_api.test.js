const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')
const User = require('../models/user')
const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})

    for (let blog of helper.blogtestSchemas) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
})

describe.skip("api testit", () => {
    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs returned', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body.length).toBe(helper.blogtestSchemas.length)
    })

    test('first blog url is wiki', async () => {
        const response = await api.get('/api/blogs')

        const contents = response.body.map(r => r.url)
        expect(contents).toContain('www.wikipedia.fi')
    })
    test('a valid blog can be added ', async () => {
        const newBlog = helper.blogtestSchemas[0]

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd.length).toBe(helper.blogtestSchemas.length + 1)

        const contents = blogsAtEnd.map(r => r.author)
        expect(contents).toContain(
            'Väinö k'
        )
    })

    test('blog with no title or url wont be saved', async () => {
        const newplog = {
            author: "vk",
            likes: 10
        }

        await api
            .post('/api/blogs')
            .send(newplog)
            .expect(400)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd.length).toBe(helper.blogtestSchemas.length)

    })

    test('a specific blog can be viewed', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToView = blogsAtStart[0]
        const resultBlog = await api
            .get(`/api/blogs/${blogToView.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(resultBlog.body).toEqual(blogToView)
    })

    test('a blog can be deleted', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)

        const blogsAtEnd = await helper.blogsInDb()

        expect(blogsAtEnd.length).toBe(
            helper.blogtestSchemas.length - 1
        )

        const contents = blogsAtEnd.map(r => r.title)

        expect(contents).not.toContain(blogToDelete.title)
    })

})

describe.skip('apitesti 2', () => {
    test('id on id?', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToView = blogsAtStart[0]
        expect(blogToView.id).toBeDefined()
    })
    test('jos like null, niin 0', async () => {
        const blog = {
            title: "asd",
            author: "asd",
            url: "asd",
        }
        await api
            .post('/api/blogs')
            .send(blog)
            .expect(200)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd[2].likes).toBeDefined()
    })
    test('yksittäisen blogin muokkaus', async () => {
        const blog = {
            title: "asd",
            author: "asd",
            url: "asd",
            likes: 7
        }

        const blogsNow = await helper.blogsInDb()

        await api
            .put(`/api/blogs/${blogsNow[0].id}`)
            .send(blog)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()

        expect(blogsAtEnd).not.toBe(blogsNow[0])
    })
})

describe.skip('when there is initially one user at db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const user = new User({ username: 'root', password: 'asd' })
        await user.save()
    })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()
        console.log(usersAtStart)
        const newUser = {
            username: 'mluukkai',
            name: 'Matti Luukkainen',
            password: 'salainen',
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })
})

describe('New user validation', () => {
    beforeEach(async () => {
        await User.deleteMany({})
    })

    const newUser1 = {
        username: 'a',
        name: 'aaa',
        password: 'asd',
    }
    const newUser2 = {
        username: 'asd',
        name: 'aaa',
        password: 'a',
    }
    const newUser3 = {
        username: '',
        name: 'aaa',
        password: 'asd',
    }
    const newUser4 = {
        username: 'asd',
        name: 'aaa',
        password: '',
    }
    test('creation failed with too short username', async () => {
        const usersAtStart = await helper.usersInDb()
        console.log(usersAtStart)
        await api
            .post('/api/users')
            .send(newUser1)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
    test('creation failed with too short pass', async () => {
        const usersAtStart = await helper.usersInDb()
        console.log(usersAtStart)
        await api
            .post('/api/users')
            .send(newUser2)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
    test('creation failed with empty usrnme', async () => {
        const usersAtStart = await helper.usersInDb()
        console.log(usersAtStart)
        await api
            .post('/api/users')
            .send(newUser3)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
    test('creation failed with empty pswrd', async () => {
        const usersAtStart = await helper.usersInDb()
        console.log(usersAtStart)
        await api
            .post('/api/users')
            .send(newUser4)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})