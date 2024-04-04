import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const label = "Sort By";
const value = "";

const SortSelectOptions = () => {
  const options = ["a-z", "z-a", "high", "low"];
  // props = { label, value, options }
  return (
    <FormControl className="w-[200px]">
      <InputLabel shrink>{label}</InputLabel>
      <Select
        // value={value}
        defaultValue={"a-z"}
        variant="standard"
        size="small"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
              width: "20ch",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelectOptions;
