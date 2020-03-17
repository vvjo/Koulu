const dummy = blogs => {
    return 1
}

const totalLikes = blogs => {
    return blogs.length === 0 ? 0 : blogs.map(y => y.likes).reduce((a, b) => a + b)
}

const favoriteBlog = blogs => {
    const enitenTykkäyksiä = blogs.map(x => x.likes)
    const mostTykätty = Math.max(...enitenTykkäyksiä)
    return blogs.length === 0 ? 0 : blogs.find(ele => ele.likes === mostTykätty)
}

const mostBlogs = blogs => {
    const mostBlokeja = {
        author: String,
        blogs: Number
    }
    const blogit = blogs.map(x => x.author)
    const arra = blogit.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1
        return a
    }, [])
    const h = Object.values(arra)
    const u = h.findIndex(a => a === Math.max(...Object.values(arra)))
    mostBlokeja.author = Object.keys(arra)[u]
    mostBlokeja.blogs = Object.values(arra)[u]
    return mostBlokeja
}

const mostLikes = blogs => {
    var mostLiked = {
        author: String,
        likes: Number
    }
    const blogit = blogs.map(x => x.author)
    const blogaajat = [...new Set(blogit)]
    const b = blogs.map(b => b = { author: b.author, likes: b.likes })
    const bloggerCountedLikes = blogaajat.map(a => a = {author: a, likes: (b.filter(b => b.author === a).map(c => c.likes).reduce((x, y) => x + y))})
    const id = bloggerCountedLikes.findIndex(e => e.likes === Math.max(...bloggerCountedLikes.map(a => a.likes)))
    mostLiked = bloggerCountedLikes[id]
    
    return mostLiked
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}