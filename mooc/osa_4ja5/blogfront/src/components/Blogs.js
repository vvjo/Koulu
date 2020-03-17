import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Fullblog = (props) => {
  const [vis, setvis] = useState(false)
  const showWhenVisible = { display: vis ? '' : 'none' }

  const toggleVisibility = () => {
    setvis(!vis)
  }

  const checkusr = () => {
    if (props.user.username === props.plog.user.username) {
      return(
        <button onClick={() => deleteBlog()}>remove</button>
      )
    }
  }

  const addLike = async () => {
    const blogObj = {
      title: props.plog.title,
      author: props.plog.author,
      url: props.plog.url,
      likes: props.plog.likes + 1
    }
    try {
      await props.blogService
        .like(props.plog.id, blogObj)
      props.plog.likes += 1
      props.setColor('notification')
      props.setMsg(`${blogObj.title} liked!`)
      setTimeout(() => {
        props.setMsg(null)
      }, 1000)
    } catch (error) {
      props.setColor('error')
      props.setMsg('Error while liking the blog')
      setTimeout(() => {
        props.setMsg(null)
      }, 5000)
    }
  }

  const deleteBlog = async () => {
    if (window.confirm('Delete this blog?')) {
      try {
        await props.blogService.del(props.plog.id)
        props.setColor('notification')
        props.setMsg(`${props.plog.title}. deleted`)
        props.updOverlay()
        setTimeout(() => {
          props.setMsg(null)
        }, 5000)
      }
      catch (erro) {
        console.log(erro)
        props.setColor('error')
        props.setMsg('unauthorized')
        setTimeout(() => {
          props.setMsg(null)
        }, 5000)
      }
    }
  }

  return (
    <li>
      <div className='clickable' onClick={() => toggleVisibility()}>
        {props.plog.title}
        <br />
        {props.plog.author}
      </div>
      <div className="showWhenClicked" style={showWhenVisible} >
        {props.plog.url}
        <br />
        {props.plog.likes}<button onClick={() => addLike()}>like this</button>
        <br />
        added by {props.plog.user.name}
        <br />
        {checkusr()}
      </div>
    </li>
  )
}

const Blogs = (props) => {
  props.blogs.sort((a, b) => Number(b.likes) - Number(a.likes))

  const blogilista = props.blogs.map((plog) => 
    <Fullblog 
      updOverlay={props.updOverlay}
      key={props.blogs.indexOf(plog)}
      id={props.blogs.indexOf(plog)}
      plog={plog}
      blogService={props.blogService}
      setMsg={props.setMsg}
      setColor={props.setColor}
      user={props.user}
    />
    )
  return (
    <ul>
      {blogilista}
    </ul>
  )
}

Blogs.propTypes = {
  blogService: PropTypes.func.isRequired,
  setMsg: PropTypes.string.isRequired,
  setColor: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default Blogs