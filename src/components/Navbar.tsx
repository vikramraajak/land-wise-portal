
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-urban-green-600 text-xl font-bold">
          Urban2Farm
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-urban-green-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="text-gray-600 hover:text-urban-green-600 transition-colors"
              >
                Browse Properties
              </Link>
            </li>
            <li>
              <Link
                to="/document-review"
                className="text-gray-600 hover:text-urban-green-600 transition-colors"
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
