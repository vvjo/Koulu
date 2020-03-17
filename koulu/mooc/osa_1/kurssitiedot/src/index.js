import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <p>{props.course.name}</p>
        </>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <>
            <Part osa={props.parts[0]} />
            <Part osa={props.parts[1]} />
            <Part osa={props.parts[2]} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>
                Yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää
            </p>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.osa.name}, {props.osa.exercises} tehtävää</p>
        </>
    )
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: "10"
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
