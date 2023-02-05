import { Autocomplete, TextField } from "@mui/material";


function TopSideBar(props) {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
      ];
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
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
        />
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={days}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="When are you leaving ?" />}
        />
    </div> 
    );
}

export default TopSideBar;