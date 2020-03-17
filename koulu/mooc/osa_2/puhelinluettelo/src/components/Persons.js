import React from 'react'

const Persons = (props) => {
    const personsLi = () => props.personsToShow.map(pers =>
    <li>{pers.name} {pers.number} <button onClick={() => props.delete(pers.id)}>delete</button></li>)
    return (
        <ul>
            {personsLi()}
        </ul>
    )
}

export default Persons