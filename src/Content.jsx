import React, { useState } from 'react'
import {  FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
  },
  {
      id: 2,
      checked: false,
      item: "Item 2"
  },
  {
      id: 3,
      checked: false,
      item: "Item 3"
  }
]);

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {
    ...item, checked: !item.checked} : item);
    setItems(listItems)
    localStorage.setItems('shoppingList', JSON.stringify(listItems));
  }


  return (
    <main>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item">
              <input type="checkbox" 
                checked={item.checked}
                onChange={() => {handleCheck(item.id)}}
              />
              <label>{item.item}</label>
              < FaTrashAlt 
                  role="button" 
                  tabIndex="0"             
              />
            </li>
          ))}
        </ul>
    </main>
  )
}

export default Content
