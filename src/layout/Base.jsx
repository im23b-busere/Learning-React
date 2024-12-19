import { Link } from "react-router-dom";

export default function BaseLayout({ children }) {
  return (
    <>
      <header className="p-10 flex items-center justify-between">
        <span className="font-bold text-2xl">Erik Buser</span>
        <nav className="flex items-center justify-between gap-5">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      {children}
    </>
  );
}