import React from 'react'

export const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
    return (
        <li>
            <input value={item.packed} onChange={() => handleToggleItem(item.id)} type="checkbox" />
            <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        </li>
    )
}
