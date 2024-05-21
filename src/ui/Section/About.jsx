import Btn from "../Btn";

const About = () => {
  return (
    <section className="pt-16 pb-8">
      <div className="align-element">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="space-y-4 md:space-y-6 lg:space-y-8 lg:w-[40%]">
            <h3 className="text-xl sm:text-2xl capitalize font-semibold text-brownish-1 md:text-3xl mb-6">
              About our coffee
            </h3>
            <p className="max-w-2xl">
              Whether you're searching for something new to warm your mug,
              seeking the best brew method for your favorite blend or exploring
              our rarest offerings, you’ve come to the right place.Exceptional
              coffees from around the world
            </p>

            <Btn to={"/menu"} type={"rounded"}>
              Order now
            </Btn>
          </div>

          <div className="grid grid-cols-2  gap-4 lg:w-[60%] lg:gap-12">
            <div className="grid  lg:justify-end ">
              <h3 className="text-xl sm:text-2xl font-semibold text-brownish-1 md:text-3xl mb-6">
                Opening Hours
              </h3>
              <ul className="space-y-2">
                <li className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">Saturday </span>: 9.00am-4pm
                </li>
                <li className="text-sm sm:text-base md:text-lg ">
                  <span className="font-bold">Sunday </span>: 9.00am-4pm
                </li>
                <li className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">Monday </span>: 6.00am-5pm
                </li>
                <li className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">Tuesday </span>: 6.00am-5pm
                </li>
                <li className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">Wednesday </span>: 6.00am-5pm
                </li>
                <li className="text-sm sm:text-base  md:text-lg">
                  <span className="font-bold">Thursday </span>: 6.00am-5pm
                </li>
                <li className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">Friday </span>: 6.00am-5pm
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/irish-coffee.jpg"
                alt=""
                className=" object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
