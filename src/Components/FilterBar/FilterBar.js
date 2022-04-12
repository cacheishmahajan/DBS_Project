import { useState } from "react"

const FilterBar = () => {

    const [showfilter,setshowfilter] = useState(false);
  return (
    <div className="filter-bar">


        
        <button className = "filter_drop_button" onMouseOver = {() => setshowfilter(true)} type="button" >
        <span  class="dropdown-arrow"> {showfilter ? "Filter by ▲":"Filter by ▼"}</span></button>
        {showfilter && (
        <div onMouseLeave={() => setshowfilter(false)} class="dropdown" >
        <div  className = "itemlist"> <p className = "Litext"> Category</p></div>
        <div  className = "itemlist"> <p  className = "Litext"> Number of Bids</p></div>
        <div  className = "itemlist"> <p  className = "Litext"> Price</p></div>
        <div  className = "itemlist"> <p  className = "Litext"> Sellers</p></div>
        <div  className = "itemlist"> <p  className = "Litext"> Location</p></div>
        </div>
        )
        }
        
       
    </div>
  )
}

export default FilterBar