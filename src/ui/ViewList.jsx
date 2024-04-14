const ViewList = ({ coffees }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-8">
      {coffees.map((coffee) => {
        return (
          <div
            key={coffee.id}
            className="flex gap-8 md:gap-10 lg:gap-14
          "
          >
            <div className="w-[40%] ">
              <img src={coffee.image} alt={coffee.name} />
            </div>
            <div className="w-[60%] ">
              <div className="space-y-3 mb-12">
                <h3 className="text-xl font-medium font-serif">
                  {coffee.name}
                </h3>
                <p className="text-xl md:text-3xl font-bold ">
                  R {coffee.unitPrice}
                </p>

                <p className="text-sm">{coffee.description}</p>
              </div>
              <button
                className={`text-lg font-semibold rounded-sm capitalize py-2 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160`}
              >
                Add to Cart
              </button>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewList;
