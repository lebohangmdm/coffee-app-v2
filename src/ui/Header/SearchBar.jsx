import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="hidden lg:block">
      <IconButton onClick={toggleSearch}>
        {!searchVisible && <SearchIcon />}
      </IconButton>
      {searchVisible && (
        <TextField
          autoFocus
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#333" },
              "&:hover fieldset": { borderColor: "#3c1b08" },
              "&.Mui-focused fieldset": { borderColor: "#3c1b08" },
              borderRadius: "11px",
              maxWidth: "240px",
            },
          }}
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
