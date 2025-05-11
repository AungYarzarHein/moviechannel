import React, { useContext, useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import { SearchContext } from './SearchContext';




const DropdownSelector = ({setFilter}) => {
    const [show,setShow] = useState(false);
    const { searchTerm, setPage } = useContext(SearchContext);
    
    const [text,setText] = useState(searchTerm.category);

    
    const onChoose = () => {
        setShow(true);
    }

    const chooseItem = (text) => {
        setText(text);
        setShow(false);
    }

    const onFilterSearch = (text) => {
        // console.log("Hello Filter")
        setFilter(text);
    }

  return (
    <div className="dropContainer">
        <div className="selector" onClick={onChoose}  >
            <span> {text} </span>
            <IoChevronDownSharp />
        </div>
        <button className="allMovieBtn"  onClick={() => onFilterSearch(text)} > Search </button>


       {
              show && <div className="select-Items"  >
                  <button onClick={() => chooseItem("popular")} className="select-item"> Popularity </button>
                  <button onClick={() => chooseItem("action")} className="select-item"> Action </button>
                  <button onClick={() => chooseItem("adventure")} className="select-item"> Adventure </button>
                  <button onClick={() => chooseItem("animation")} className="select-item"> Animation </button>
                  <button onClick={() => chooseItem("adult")} className="select-item"> Adult </button>
                  <button onClick={() => chooseItem("comedy")} className="select-item"> Comedy </button>
                  <button onClick={() => chooseItem("horror")} className="select-item"> Horror & Chrime </button>
                  <button onClick={() => chooseItem("drama")} className="select-item"> Drama </button>
              </div>
       }
    </div>
  )
}

export default DropdownSelector