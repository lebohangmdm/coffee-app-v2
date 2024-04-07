const Product = () => {
  return (
    <section className="pt-16">
      <div className="align-element">
        <div className="grid items-center md:grid-cols-2 gap-8">
          <div>
            <img src="/coffee.jgp" alt="coffee" className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl mb-6">Coffee</h3>
            <p className="text-lg md:text-2xl mb-8 md:mb-10">
              <span className="font-bold">$</span>17
            </p>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, cumque. Alias quaerat eos at quibusdam laboriosam
              impedit accusantium, quo sunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
