import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchContext } from '../components/SearchContext';







const AppLayout = () => {
   const [searchTerm,setSearchTerm] = useState({text:"",data:[] , page:1 , pageData:[],category:"popular"});

   const setSearchData = (text , data) => {
      setSearchTerm({...searchTerm , text,data})
   }

   const setPage = ({page,pageData,category}) => {
    setSearchTerm({...searchTerm,page,pageData,category});
   }
    
  return (
    <SearchContext.Provider value={{searchTerm,setSearchData,setPage}} >
        <Outlet />
    </SearchContext.Provider>
  )
}

export default AppLayout