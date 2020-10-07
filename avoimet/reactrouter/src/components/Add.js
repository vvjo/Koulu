import React, {useState} from 'react'
import axios from 'axios'


const Add = () => {
    const [value, setValue] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const einputHandler = (e) => {
        setFirstName(e.target.value)
    }
    const sinputHandler = (e) => {
        setLastName(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()

        const nimi = {
            "firstName": firstName,
            "lastName": lastName
        }
        try{
            axios.post("http://localhost:3001/tyontekijat", nimi)
        }catch(e){
            console.log(e)
        }
        setFirstName("")
        setLastName("")
        alert("Tiedot lähetetty")
    }

    return (
        <div className="container">
            <div>
                <form onSubmit={submitHandler}>
                    <label>Nimi</label>
                    <input value={firstName} onChange={einputHandler} required type="text" autoFocus/>
                    <label>Sukunimi</label>
                    <input value={lastName} onChange={sinputHandler} required type="text" />
                    <button type="submit">add</button>
                </form>

            </div>
        </div>
    )
}

export default Add