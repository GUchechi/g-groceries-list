import React from 'react'
import { FaPlus} from 'react-icons/fa';

const AddItem = () => {
  return (
    <form className="addForm">
      <label htmlFor='additem'>Add Item</label>
      <input
        autoFocus
        id='additem'
        type='text'
        placeholder='Add Item'
        required
    />
        <button type="submit" aria-label='Add Item'>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
