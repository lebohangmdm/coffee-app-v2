import DisplayOptions from "../ui/DisplayOptions";
import SortSelectOptions from "../ui/SortSelectOptions";
import Card from "../ui/Card";

const Menu = () => {
  return (
    <>
      <section className="py-16 bg-menu">
        <div className="align-element mb-12 md">
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-3/4 lg:w-1/2">
            <h1 className="text-4xl text-brownish-2  uppercase md:text-5xl lg:text-6xl">
              Our Coffee and Crafting
            </h1>
            <p className="md:text-lg">
              It takes many hands to craft the perfect cup of coffee – from the
              farmers who tend to the red-ripe coffee cherries, to the master
              roasters who coax the best from every bean, and to the barista who
              serves it with care. We are committed to the highest standards of
              quality and service, embracing our heritage while innovating to
              create new experiences to savor.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="align-element">
          <div className="grid-container">
            <div className="">
              <p className="text-xl font-semibold mb-4">Drinks</p>
              <ul className="flex flex-col space-y-2">
                <li>All</li>
                <li>Hot Coffee</li>
                <li>Cold Coffee</li>
                <li>Hot Tea</li>
                <li>Cold Tea</li>
                <li>Frappuccino</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 md:spacey-6">
              <div className="flex justify-between items-center">
                <DisplayOptions />
                <SortSelectOptions />
              </div>
              <div className="grid item-center gap-8 md:grid-2-cols md:gap-10 lg:gap-12 lg:grid-cols-3 ">
                <Card full={"full"} />
                <Card full={"full"} />
                <Card full={"full"} />
                <Card full={"full"} />
                <Card full={"full"} />
                <Card full={"full"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
