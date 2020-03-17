import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className='eka'>
      {blog.title} {blog.author}
    </div>
    <div className='toka'>
      blog has {blog.likes} likes
      <button className='btn' onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog