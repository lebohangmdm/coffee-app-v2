const Pagination = ({ totalOrders, pageSize, paginate, currentPage }) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalOrders / pageSize) },
    (_, i) => {
      return i + 1;
    }
  );

  return (
    <div className="my-4 md:mt-6">
      {/* Display items for the current page */}
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((_, index) => (
          <li key={index}>
            <button
              className={`${
                currentPage === index + 1
                  ? "t bg-light-brown-2 text-brownish-1"
                  : ""
              }   text-base lg:text-xl rounded-full  px-3 py-1 sm:py-2 md:px-4 md:py-2 `}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
