import React from 'react';
import searchIcon from "../assets/search.svg";


const SearchBar = ({setSearchText}) => {
  const onKeyHandler = (e) => {
    if(e.key == "Enter"){
      console.log(e.target.value);
      setSearchText(e.target.value);
    }
  }
  return (
    
       <div className="searchBarContainer">
          <input type="text" className='searchBar' placeholder='Search Movie Here' onKeyDown={onKeyHandler}  />
           <img src={searchIcon} className='searchIcon' alt='searchIcon'  />
       </div>
    
  )
}

export default SearchBar