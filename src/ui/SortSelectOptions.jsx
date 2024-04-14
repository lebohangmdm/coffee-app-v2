import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortSelectOptions = ({ selectedValue, setSelectedValue }) => {
  const options = ["input", "a-z", "z-a", "high", "low"];

  return (
    <FormControl
      className="w-[200px]  "
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:focus-within": {
            borderColor: "#180b03",
          },
        },
      }}
    >
      <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SortSelectOptions;
