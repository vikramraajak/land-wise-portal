
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 bg-white shadow-sm z-10">
      <div className="container mx-auto flex justify-center items-center">
        <nav>
          <ul className="flex space-x-10 items-center">
            <li>
              <Link
                to="/"
                className="text-urban-green-600 text-xl font-bold font-mono"
              >
                Urban2Farm
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-urban-green-600 transition-colors font-medium text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="text-gray-600 hover:text-urban-green-600 transition-colors font-medium text-base"
              >
                Browse Properties
              </Link>
            </li>
            <li>
              <Link
                to="/document-review"
                className="text-gray-600 hover:text-urban-green-600 transition-colors font-medium text-base"
              >
                Document Review
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
