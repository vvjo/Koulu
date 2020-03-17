import React, { useState, useEffect } from 'react'
import Loginform from './components/Loginform'
import Notification from './components/Notification'
import login from './services/login'
import Blogs from './components/Blogs'
import Newblog from './components/Newblog'
import Toggle from './components/Toggle'
import blogService from './services/blogs'
import './index.css'

function App() {
  const [msg, setMsg] = useState(null)
  const [color, setColor] = useState('notification')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService
      .getAll()
      .then(response => {
        setBlogs(response)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggeduser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const updOverlay = () => {
    blogService
      .getAll()
      .then(response => {
        setBlogs(response)
      })
  }

  const logout = () => {
    window.localStorage.clear()
    setUser(null)
    setColor('notification')
    setMsg(`User ${user.name} logged out`)
    setTimeout(() => {
      setMsg(null)
    }, 5000)
  }

  return (
    <div>
      <h1>Blogs</h1>
      <Notification msg={msg} color={color} />
      {user === null ?
        <>
          <h2>Login</h2><br />
          <Loginform
            setUser={setUser}
            setMsg={setMsg}
            setColor={setColor}
            login={login} />
        </> :
        <>
          <p className='usertext' >{user.name} logged in</p><button onClick={() => logout()}>Logout</button><br />
          <Blogs
            updOverlay={updOverlay}
            blogs={blogs}
            blogService={blogService}
            setMsg={setMsg}
            setColor={setColor}
            user={user}
          />
          <Toggle buttonLabel='new blog'>
            <Newblog
              blogService={blogService}
              setMsg={setMsg}
              setColor={setColor}
            />
          </Toggle>
        </>
      }

    </div>

  )
}

export default App