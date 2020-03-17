import React from 'react'
import { useField } from '../hooks/index'

const Newblog = (props) => {
  const ftitle = useField('text')
  const fauthor = useField('text')
  const furl = useField('text')

  const addBlog = async () => {
    const title = ftitle.value
    const author = fauthor.value
    const url = furl.value
    const blogObj = {
      title, author, url
    }
    try {
      await props.blogService
        .create(blogObj)
      ftitle.reset()
      fauthor.reset()
      furl.reset()
      props.setColor('notification')
      props.setMsg(`New blog ${title} added!`)
      setTimeout(() => {
        props.setMsg(null)
      }, 5000)
    } catch (error) {
      console.log(error)
      props.setColor('error')
      props.setMsg('Error while creating a new blog')
      setTimeout(() => {
        props.setMsg(null)
      }, 5000)
    }
  }

  return (
    <form onSubmit={addBlog}>
      <div>
        title: <input {...ftitle}  /><br />
        author: <input {...fauthor} /><br />
        url: <input {...furl} />
      </div>
      <div>
        <button type="submit">create</button>
      </div>
    </form>
  )
}

export default Newblog