import { GridOn, ViewList } from "@mui/icons-material";

const DisplayOptions = ({ displayType, setDisplayType }) => {
  return (
    <div>
      <GridOn
        style={{
          cursor: "pointer",
          marginRight: "10px",
          color: "#3c1b08",
        }}
        value={displayType}
        onClick={() => setDisplayType("grid")}
      />
      <ViewList
        style={{
          cursor: "pointer",
          color: "#3c1b08",
        }}
        value={displayType}
        onClick={() => setDisplayType("list")}
      />
    </div>
  );
};

export default DisplayOptions;
