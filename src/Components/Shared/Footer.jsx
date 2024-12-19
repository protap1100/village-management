import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-200 mt-5 py-8">
      <section className="grid grid-cols-3 gap-8 container mx-auto">
        <div className="col-span-3 px-3 lg:col-span-1 flex items-center">
          <h1 className="text-3xl font-bold text-blue-900 text-center">
            Village Management
          </h1>
        </div>
        <div className="col-span-3 flex flex-col text-center justify-center  px-3 lg:col-span-1">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">About Us</h2>
          <p className="text-gray-700 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue.
          </p>
          <p className="text-gray-700 mb-2">
            Sed posuere consectetur est at lobortis. Donec sed odio dui.
          </p>
          <p className="text-gray-700 mb-2">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </div>
        <div className="col-span-3  px-3 flex justify-center items-center">
          <ul className="flex gap-4 flex-col lg:flex-row">
            <li className="text-center">
              <Link
                to="#"
                className="text-blue-900 text-center hover:text-blue-600 transition duration-300"
              >
                Terms of Service
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="#"
                className="text-blue-900 text-center hover:text-blue-600 transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>{" "}
            <li className="text-center">
              <Link
                to="/rules"
                className="text-blue-900 text-center hover:text-blue-600 transition duration-300"
              >
                Rules
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/contactUs"
                className="text-blue-900 text-center hover:text-blue-600 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
