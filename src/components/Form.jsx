import React, { useState } from 'react'

export const Form = ({handleAddItems}) => {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false }

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }



  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}
