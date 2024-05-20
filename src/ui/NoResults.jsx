import WarningIcon from "@mui/icons-material/Warning";

const NoResults = ({ search }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-[26px] font-semibold">
        Search results for: {search}
      </h2>
      <p className="flex items-center gap-2">
        <WarningIcon style={{ color: "red" }} /> We could not found anything for{" "}
        {search}
      </p>
    </div>
  );
};

export default NoResults;
