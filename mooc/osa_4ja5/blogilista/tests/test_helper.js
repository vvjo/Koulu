const Blog = require('../models/blog')
const User = require('../models/user')

const blogtestSchemas = [
    {
        title: "Eka title",
        author: "Väinö k",
        url: "www.wikipedia.fi",
        likes: 10
    },
    {
        title: "Toka title",
        author: "Väinö v",
        url: "www.google.fi",
        likes: 0
    }
]

const nonExistingId = async () => {
  const blog = new Blog({
    title: "removedsoon",
    author: "removedsoon",
    url: "removedsoon",
    likes: 0
})
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  blogtestSchemas, nonExistingId, blogsInDb, usersInDb
}