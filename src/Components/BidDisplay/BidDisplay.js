import { useState } from "react"
import BidItem from "../BidItem/BidItem"



const BidDisplay = ({biditems}) => {

  const statehandler = () => {

  }

    return (
    <div>

        {biditems.map((item) => (
        <BidItem statehandle={statehandler}  img = {item.image} name = {item.name} category = {item.category} description = {item.description} current_bid = {item.current_bid} min_bid_price = {item.min_bid_price} location = {item.Location} start_date = {item.start_date} end_date={item.end_date} sold = {item.sold} defaultheartstate = {true} flag = {false}/>
        ))}
        
    </div>
  )
}

export default BidDisplay