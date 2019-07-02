import React from 'react'

const Todo = ({item, removeItem}) => {
    return (
        <li onClick={ ()=> removeItem(item.id)}>
            {item.text}
        </li>
    )
}

const TodoList = ({tasks, remove}) => {
    const todoListMapped = tasks.map(task => {
        return <Todo item={task} removeItem={remove} key={task.id} />
    })
    return (
        <ul>
            {todoListMapped}
        </ul>
    )
}

export default TodoList