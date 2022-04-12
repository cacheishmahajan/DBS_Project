import { TextField,Button } from "@mui/material";
import Menubar from "../MenuBar/Menubar";


const ItemDetails = ({image,name,category,description,minimum_bid_price,current_bid,start_date,end_date}) => {
  return (
    <div id = "bid-details">
        <div className="item-image">
        <img src = {image} alt='item' />
        </div>
        
        <div className="item-details">
            <p>{name}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Minimum Bid Price:{minimum_bid_price}</p>
            <p>Current Bid{current_bid}</p>
            <TextField id="outlined-basic" label="Place your bid" variant="outlined" />
            <Button variant="outlined">BID 🔨</Button>
        </div>
        
        
    
</div>

    
  )
}

export default ItemDetails