import CartWidget from "../CartWidget/CartWidget";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <div className="container-fluid"> 
                <Link to="/" className="navbar-brand">
                <img className={styles['logo']} src="/imgLogo/coder.png" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles["categorias"]}`}>
                        <Link to="/categoria/rock" className={`nav-item nav-link ${location.pathname === "/categoria/rock" ? "active" : ""}`}>Rock</Link>
                        <Link to="/categoria/electronica" className={`nav-item nav-link ${location.pathname === "/categoria/electronica" ? "active" : ""}`}>Electronica</Link>
                        <Link to="/categoria/jazz" className={`nav-item nav-link ${location.pathname === "/categoria/jazz" ? "active" : ""}`}>Jazz</Link>
                        <Link to="/categoria/pop" className={`nav-item nav-link ${location.pathname === "/categoria/pop" ? "active" : ""}`}>Pop</Link>
                    </div>
                </div>
                <Link to="/historial" className={`nav-item nav-link ${location.pathname === "/historial" ? "active" : ""}`}>Ver Historial</Link>
                <CartWidget />
            </div>
        </nav>
    );
}
