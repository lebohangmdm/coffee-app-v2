import { GridOn, ViewList } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";

const DisplayOptions = ({ displayType, setDisplayType }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleList = () => {
    setDisplayType("list");
    searchParams.set("coffee_view_mode", "list");
    setSearchParams(searchParams);
  };

  const handleGrid = () => {
    setDisplayType("list");
    searchParams.set("coffee_view_mode", "grid");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <GridOn
        style={{
          cursor: "pointer",
          marginRight: "10px",
          color: "#3c1b08",
        }}
        value={displayType}
        onClick={handleGrid}
      />
      <ViewList
        style={{
          cursor: "pointer",
          color: "#3c1b08",
        }}
        value={displayType}
        onClick={handleList}
      />
    </div>
  );
};

export default DisplayOptions;
