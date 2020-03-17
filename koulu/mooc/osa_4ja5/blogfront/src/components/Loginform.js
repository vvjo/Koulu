import React from 'react'
import { useField } from '../hooks/index'

const Loginform = (props) => {
  const fusername = useField('text')
  const fpassword = useField('password')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const username = fusername.value
      const password = fpassword.value
      const user = await props.login.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggeduser', JSON.stringify(user)
      )
      props.setUser(user)
      fusername.reset()
      fpassword.reset()
      props.setColor('notification')
      props.setMsg(`User ${user.name} logged in!`)
      setTimeout(() => {
        props.setMsg(null)
      }, 5000)
    } catch (exception) {
      console.log(exception)
      props.setColor('error')
      props.setMsg('wrong credentials')
      setTimeout(() => {
        props.setMsg(null)
      }, 5000)
    }
  }

  return (
    <form className='login' onSubmit={handleLogin}>
      <div>
        username
        <input
          {...fusername}
        />
      </div>
      <div>
        password
        <input
          {...fpassword}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default Loginform