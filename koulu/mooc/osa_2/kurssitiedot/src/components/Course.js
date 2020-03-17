import React from 'react'

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({parts}) => {
    const rows = () => parts.map(part =>
        <Part
            key={part.id}
            osa={part}
        />
    )
    return (
        <>
            {rows()}
        </>
    )
}

const Total = ({ parts }) => {
    const sum = parts.map(tulos => tulos.exercises)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
        <>
            <p>
                Total of {sum.reduce(reducer)} exercises
            </p>
        </>
    )
}

const Part = ({ osa }) => {
    return (
        <>
            <p>{osa.name}, {osa.exercises} exercises</p>
        </>
    )
}

const Course = ({ course }) => {
    const courses = () => course.map(cours => <li>
        <Header name={cours.name} />
        <Content parts={cours.parts} />
        <Total parts={cours.parts} /> </li>)
    return (
        <ul>
            {courses()}
        </ul>
    )
}

export default Course