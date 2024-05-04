import { Link } from "react-router-dom";

const Btn = ({ type, onClick, children, to }) => {
  const base = `text-base block  font-medium rounded-sm uppercase py-2 px-4 bg-brownish-1 text-white hover:brightness-200 transition-all duration-160`;

  const styles = {
    full: base + " w-full text-center",
    medium: base + " md:px-6",
    base: base,
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
