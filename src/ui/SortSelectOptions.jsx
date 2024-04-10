import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const label = "Sort By";
const value = "";

const SortSelectOptions = () => {
  const options = ["a-z", "z-a", "high", "low"];
  // props = { label, value, options }
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>{"a-z"}</MenuItem>
        <MenuItem value={20}>{"z-a"}</MenuItem>
        <MenuItem value={30}>{"high"}</MenuItem>
        <MenuItem value={30}>{"low"}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelectOptions;
