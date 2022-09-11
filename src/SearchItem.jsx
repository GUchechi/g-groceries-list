import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
        type="text"
        placeholder='Search...'
        id='search'
        role="searchbox"
         />
    </form>
  )
}

export default SearchItem
