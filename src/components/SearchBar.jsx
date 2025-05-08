import React, { useContext } from 'react';
import searchIcon from "../assets/search.svg";
import { SearchContext } from './SearchContext';



const SearchBar = ({setSearchText,searchText}) => {
  const {searchTerm} = useContext(SearchContext);


  const onKeyHandler = (e) => {
    if(e.key == "Enter"){
      // console.log(e.target.value);
      setSearchText(e.target.value);
    }
  }
  return (
    
       <div className="searchBarContainer">
      <input type="text" className='searchBar' placeholder={searchTerm?.text || "Search Movie Here"} onKeyDown={onKeyHandler}  />
           <img src={searchIcon} className='searchIcon' alt='searchIcon'  />
       </div>
    
  )
}

export default SearchBar