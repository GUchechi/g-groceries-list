import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
        type="text"
        placeholder='Search...'
        id='search'
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem
