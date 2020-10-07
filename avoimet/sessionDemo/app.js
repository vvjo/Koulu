const express = require("express")
const session = require("express-session")
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

const TWO_HOURS = 1000 * 60 * 60 * 2

const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sid",
    SESS_SECRET = "sessecret",
    SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === "production"

const users = [
    { id: 1, name: "Asd", email: "asd@gmail.com", password: "secret" },
    { id: 2, name: "Qwe", email: "qwe@gmail.com", password: "secret" },
    { id: 3, name: "Joku", email: "joku@gmail.com", password: "secret" },
]

const app = express()

redisClient.on('error', (err) => {
    console.log('Redis error: ', err)
})

app.use(express.urlencoded({ extended: true }))

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD,
        store: new redisStore({ host: 'localhost', port: 6379, client: redisClient })
    }
}
))

const redirectLogin = (req, res, next) => {
    if (!req.session.key) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.key) {
        res.redirect('/home')
    } else {
        next()
    }
}

app.get("/", (req, res) => {
    const sesKey = req.session.key
    res.send(`
        <h1>Welcome</h1>
        ${sesKey ? `
            <a href="/home">Home</a>
            <form method="post" action="/logout">
                <button>Logout</button>
            </form>
        ` : `
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        `}
    `)
})

app.get("/home", redirectLogin, (req, res) => {
    const user = users.find(user => user.id === req.session.userId)
    res.send(`
        <h1>Home</h1>
        <a href="/">Main</a>
        <ul>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email} </li>
        </ul>
    `)
})

app.get("/login", redirectHome, (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="post" action="/login">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" />
        </form>
        <a href="/register">Register</a>
    `)
})

app.get("/register", redirectHome, (req, res) => {
    res.send(`
        <h1>Register</h1>
        <form method="post" action="/register">
            <input name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" />
        </form>
        <a href="/login">Login</a>
    `)
})

app.post("/login", redirectHome, (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
            req.session.userId = user.id
            req.session.key = user.email
            redisClient.set(`sess:${req.session.id}`, `key:${req.session.key}`)
            redisClient.expire(`sess:${req.session.id}`, 60*10)
            return res.redirect("/home")
        }
    }
    res.redirect("/login")
})

app.post("/register", redirectHome, (req, res) => {
    const { name, email, password } = req.body
    if (name && password && email) {
        const exists = users.some(
            user => user.email === email
        )
        if (!exists) {
            const user = {
                id: users.length + 1,
                name,
                email,
                password
            }
            users.push(user)
            req.session.userId = user.id
            req.session.key = user.email
            return res.redirect("/home")
        }
    }
    res.redirect("/register")
})

app.post("/logout", redirectLogin, (req, res) => {
    redisClient.del(`sess:${req.session.id}`)
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/home")
        }
        res.clearCookie(SESS_NAME)
        res.redirect("/")
    })
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
))