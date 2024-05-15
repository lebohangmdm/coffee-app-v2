import { Link } from "react-router-dom";

const Btn = ({ type, onClick, children, to }) => {
  const base = `text-base font-medium uppercase   bg-brownish-1 text-white hover:brightness-200 transition-all duration-160 `;

  const styles = {
    full:
      base + " w-full text-center rounded-sm py-1.5 px-1.5  sm:py-2 sm:px-4",
    medium: base + " md:px-6 rounded-sm py-1.5 px-1.5  sm:py-2 sm:px-4",
    base: base,
    rounded:
      base + "rounded-full inline-block py-1.5 px-4 sm:py-2 sm:px-4 md:px-5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
};

export default Btn;
