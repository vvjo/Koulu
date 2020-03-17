import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
    return(
    <>
    <h1>{props.text}</h1>
    </>
    )
}

const App = (props) => {
    const header = ["Anecdote of the day", "Anecdote with most votes"]
    const [selected, setSelected] = useState(0)
    const [most, setMost] = useState(0)
    const [pts, setPts] = useState([0, 0, 0, 0, 0, 0])

    const handle = () => {
        const a = Math.floor(Math.random() * (props.anecdotes.length))    
        return setSelected(a)
    }

    const vote = () => {
        const copy = [...pts]
        copy[selected] += 1
        setPts(copy)
        let i = copy.indexOf(Math.max(...copy));
        setMost(i)
    }
   
    return (
        <div>
            <Header text={header[0]} />
            {props.anecdotes[selected]}
            <div>
            <button onClick={vote}>Vote</button>
            <button onClick={handle}>Next anecdote</button>
            </div>
            <Header text={header[1]} />
            {props.anecdotes[most]}
            <p> Has {pts[most]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)