const blogs = [
    {
        id: '5a451df7571c224a31b5c8ce',
        title: 'HTML is easy',
        author: 'aaa',
        url: 'www.aaa',
        likes: 1,
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'mluukkai',
            name: 'Matti Luukkainen'
        }
    },
    {
        id: '5a451e21e0b8b04a45638211',
        title: 'HTML is',
        author: 'bbb',
        url: 'www.bbb',
        likes: 2,
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'mluukkai',
            name: 'Matti Luukkainen'
        }
    },
    {
        id: '5a451e30b5ffd44a58fa79ab',
        title: 'HTML',
        author: 'ccc',
        url: 'www.ccc',
        likes: 3,
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'mluukkai',
            name: 'Matti Luukkainen'
        }
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

export default { getAll, setToken }