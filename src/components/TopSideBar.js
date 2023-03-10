import { Autocomplete, Stack, TextField } from "@mui/material";
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
    <Stack sx={{width: "100%"}} spacing={5}>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list}
        sx={{ 
          width: "100%",
          bgcolor: "#fff",
          borderRadius: "9px"
        }}
        onChange={
          (event, city) => {
            props.setCity(city);
          }
        }
        renderInput={(params) => <TextField {...params} label="Where do you live ?" />}
        />
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        className="autocomplete-box"
        options={days}
        sx={{ 
          width: "100%",
          bgcolor: "#fff",
          borderRadius: "9px"
        }}
        onChange={
          (event, dayInFuture) => {
            props.setDayInFuture(dayInFuture);
          }
        }
        renderInput={(params) => <TextField {...params} label="When are you leaving ?" />}
        />
    </Stack> 
    );
}

export default TopSideBar;