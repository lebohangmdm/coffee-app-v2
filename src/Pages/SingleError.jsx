import { Link, useNavigate, useRouteError } from "react-router-dom";

const SingleError = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log(error);
  return (
    <section className="py-16 height-dvh">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8 md:mb-12  ">
          Opps! Something went wrong
        </h3>

        <p className="text-bold  md:text-lg">{error.message}</p>
        <ul className="mt-4">
          <li className="text-sm list-disc ml-8">
            Go{" "}
            <Link className="font-bold" to={() => navigate(-1)}>
              back
            </Link>{" "}
            to the previous page.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SingleError;
