import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const SelectComponentLocation = ({ handleChangeLocation, location }) => {
  const { setUniqueLocation } = useSelector((state) => state.loadJobs);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChangeLocation}
        >
          <MenuItem value="">All</MenuItem>
          {setUniqueLocation &&
            setUniqueLocation.map((location, i) => (
              <MenuItem key={i} value={location}>
                {location}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponentLocation;
