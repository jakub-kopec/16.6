import React from 'react'

const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Zadań do zrobienia: {props.number}</h2>
        </div>
    )
}

export default Title