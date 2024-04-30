import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="py-16 bg-light-brown-5 height-dvh">
      <div className="align-element">
        <div className="mt-8 flex flex-col justify-center items-center lg:mt-16">
          <h1 className="text-2xl text-brownish-2 text-center md:text-4xl lg:text-5xl">
            Sorry, something went wrong
          </h1>
          <p className="mt-4 md:mt-6">{error.message}</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
