import { Autocomplete, TextField} from "@mui/material";
import { cities } from "../cities";
import "./topSideBar.css"



function TopSideBar(props) {
    var list = [];
    for(var city in cities){
        list.push(city)
    }
      const days = [
        "Today",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
      // or
    return ( 
    <div className="top-side-bar-container">
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        className="autocomplete-box"
        options={list}
        sx={{ width: 300, color: 'success.main', borderBlock:'success.main',borderBlockColor:'success.main'}}
        
        renderInput={(params) => <TextField {...params} label="City" 
        />}
        />
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        className="autocomplete-box"
        options={days}
        color="#ffffff"
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="When are you leaving ?" />}
        />
    </div> 
    );
}

export default TopSideBar;