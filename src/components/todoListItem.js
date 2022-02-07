import React from 'react'

export const TodoListItem = ( {label, important = false}) => {
    const listStyle = {
        color: important ? 'tomato' : 'black'
    }
    return(
        <span style={listStyle}>{label}</span>
    )

}