import React from 'react'
import MenuBar from "../MenuBar/Menubar"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import Searchicon from "../Searchicon/Searchicon"
import FilterBar from "../FilterBar/FilterBar"
import BidDisplay from '../BidDisplay/BidDisplay'   
import { useState } from 'react'

const Homepage = ({biditems}) => 
{   
  const statehandle = () => {
  
  }
  // State for dropdown menu
  const[dropdown,setdropdown] = useState(false);


// method for altering dropdown state
const menudown = () => {
 setdropdown(true)  
  }

const menuup = () =>{
 setdropdown(false)
}

  return (
    <div className='main-div'>
      <MenuBar onmouseover = {menudown} onmouseout = {menuup} dropdown = {dropdown}/>
    <div className='logo-search-filter'>
       <Logo/>
       <SearchBar/>
       <Searchicon/> 
       <FilterBar/>
     </div>
       <div className='display'>
       <BidDisplay statehandler = {statehandle} biditems = {biditems}/>  
        </div>  
    </div>
  )
}

export default Homepage