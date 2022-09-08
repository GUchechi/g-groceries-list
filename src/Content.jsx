import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'John', 'Dave']
        const int = Math.floor(Math.random() * names.length);
        return names[int];
      }

    const handleClick = () => {
      console.log("You clicked it!")
    }
    const handleClick2 = (name) => {
      console.log(`${name} was clicked also!`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() =>handleClick2("Dave")}>Click it</button>
        <button onClick={ (e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content
