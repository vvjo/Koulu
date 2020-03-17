import React from 'react'

const Notification = ({ msg, color }) => {
  if (msg === null) {
    return null
  }

  return (
    <div className={color}>
      {msg}
    </div>
  )
}

export default Notification