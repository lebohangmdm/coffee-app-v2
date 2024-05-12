import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
// import { getCoffeeByName } from "../../services/apiCoffee";
import { useNavigate } from "react-router-dom";
import { getCoffees } from "../../services/apiCoffee";

const SearchBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (!searchTerm) return;
    await getCoffees(searchTerm);
    navigate("/menu");
  };

  return (
    <div className="hidden lg:block">
      <form onSubmit={handleSubmit}>
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
            value={searchTerm}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
