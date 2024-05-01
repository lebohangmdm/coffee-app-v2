import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <section className="py-16 height-dvh">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8 md:mb-12  ">
          Opps! Something went wrong
        </h3>
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-bold  md:text-lg">
              The page you requested was not found, and we have a fine guess
              why.
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm list-disc ml-8">
                If you typed the URL directly, please make sure the spelling is
                correct.
              </li>
              <li className="text-sm list-disc ml-8 ">
                If you clicked on a link to get here, the link is outdated.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-bold md:text-lg ">What can you do?</p>
            <ul className="space-y-2">
              <li className="text-sm list-disc ml-8">
                Go <Link to={() => navigate(-1)}>back</Link> back to the
                previous page.
              </li>
              <li className="text-sm list-disc ml-8">
                Use the search bar at the top of the page to search for your
                products.
              </li>
              <li className="text-sm list-disc ml-8">
                Follow these links to get you back on track{" "}
                <Link
                  className="block font-semibold text-brownish-2 underline"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
