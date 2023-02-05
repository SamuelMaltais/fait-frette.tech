import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';
import { cities} from "../cities.js"


export default function VirtualizedList(props) {
  var arr = []
  console.log(cities["Sherbrooke"][0])
  for(var i =0; i< props.cities.length; i++){
    var population = ""
    if(props.cities[i].name){
      population = "3519595"
    }
    try{
      population = cities[props.cities[i].name][0].population
    }
    catch{

    }
  arr.push(
  <ListItem component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${props.cities[i].name}`} 
        secondary={`Coords: ${props.cities[i].lat } , ${props.cities[i].lng }
        Population: ${population}'
        `} 
    
        
        />
      </ListItemButton>
    </ListItem>
  )
  }
  return (
    <List
      sx={{ width: '100%', height: 450, maxWidth: 250, bgcolor: 'background.paper', position: "absolute", bottom:"50px",left:"50px" }}
    >
        {arr}

    </List>
  );
}