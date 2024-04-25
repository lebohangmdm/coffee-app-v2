import ViewCard from "./ViewCard";

const ViewList = ({ coffees }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-8">
      {coffees.map((coffee) => {
        return <ViewCard key={coffee.id} coffee={coffee} />;
      })}
    </div>
  );
};

export default ViewList;
