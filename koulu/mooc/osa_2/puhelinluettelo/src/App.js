import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import perService from './services/personServices'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [notifyMsg, setNotifyMsg] = useState(null)
  const [errOrNotify, setErrOrNotify] = useState("notification")

  useEffect(() => {
    perService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const updOverlay = () => {
    perService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }

  const personsToShow = persons.some(e => e.name.includes(newFilter)) ? persons.filter(e => e.name.includes(newFilter)) : persons

  const deletePerson = (id) => {
    if (window.confirm("Delete this person?")) {
      setPersons(persons.filter(person => person.id !== id))
      perService.del(id)
        .catch(erro => {
          setErrOrNotify("error")
          setNotifyMsg("This person doesn't exist in database")
          setTimeout(() => {
            setErrOrNotify("notification")
            updOverlay()
          }, 5000)
        })
      setNotifyMsg(`${id}. deleted`)
      setTimeout(() => {
        setNotifyMsg(null)
      }, 5000)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
      key: newName
    }

    if (persons.some(e => e.name === personObj.name)) {
      if (window.confirm(`${personObj.name} is already added to phonebook. Want to update?`)) {
        perService
          .update(persons[persons.findIndex(person => newName === person.name)].id, personObj)
          .then(ok => {
            updOverlay()
          })
          .catch(er => {
            setErrOrNotify("error")
            setNotifyMsg(`${personObj.name} doesn't exist in database`)
            setTimeout(() => {
              setNotifyMsg(null)
              setErrOrNotify("notification")
              updOverlay()
            }, 5000)
          })
        setNotifyMsg(`${personObj.name} phonenumber updated`)
        setTimeout(() => {
          setNotifyMsg(null)
        }, 5000)
      }
    } else {
      perService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotifyMsg(`Added ${personObj.name}`)
          setTimeout(() => {
            setNotifyMsg(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error.response.data)
          setErrOrNotify("error")
            setNotifyMsg(error.response.data.error)
            setTimeout(() => {
              setNotifyMsg(null)
              setErrOrNotify("notification")
              updOverlay()
            }, 5000)
        })
    }
    setNewName('')
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifyMsg} className={errOrNotify} />
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} delete={deletePerson} />
    </div>
  )

}

export default App