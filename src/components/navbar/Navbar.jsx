import { Link } from "react-router-dom";
import Logo from "../../assets/cargomda-logo.png";
import "./Navbar.css";
import { BiHome } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'
import { BsDatabaseFillAdd } from 'react-icons/bs'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light d-block">
      <div className="container-fluid">
        <img className="navbar-logo" src={Logo} alt="" />
        <a className="navbar-brand logo-animation ms-5 fs-2 fw-bold" href="#">
          Cargom
          <span className="">da</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-4">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <BiHome /> Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                to="/product-list"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <FaClipboardList /> Product List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product-form"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <BsDatabaseFillAdd /> Product Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
