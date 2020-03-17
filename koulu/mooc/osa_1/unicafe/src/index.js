import ReactDOM from 'react-dom'
import React, { useState } from 'react';

const Statistic = props => {
    if (props.text === "Positive: ") {
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Button = ({ onClick, text }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

const Statistics = props => {
    if ((props.good + props.bad + props.neutral) === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic text="Good: " value={props.good} />
                <Statistic text="Neutral: " value={props.neutral} />
                <Statistic text="Bad: " value={props.bad} />
                <Statistic text="All: " value={props.good + props.bad + props.neutral} />
                <Statistic text="Average: " value={(props.good + (-1 * props.bad)) / (props.good + props.bad + props.neutral)} />
                <Statistic text="Positive: " value={((props.good) / (props.good + props.bad + props.neutral)) * 100} />
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text="Good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
            <Button onClick={() => setBad(bad + 1)} text="Bad" />
            <h1>Stats</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));