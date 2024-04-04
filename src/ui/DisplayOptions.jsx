import { GridOn, ViewList } from "@mui/icons-material";

const DisplayOptions = () => {
  //  props= { displayType, setDisplayType }
  // color = displayType === "list" ? "blue" : "bl1ack",
  // onClick={() => setDisplayType("grid")}
  return (
    <div>
      <GridOn
        style={{
          cursor: "pointer",
          marginRight: "10px",
        }}
      />
      <ViewList
        onClick={() => setDisplayType("list")}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default DisplayOptions;
