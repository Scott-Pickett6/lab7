import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <header className="border-bottom border-white mb-4 fixed-top bg-dark">
            <nav className="navbar navbar-expand-lg m-4">
                <h4>Scott's Portfolio</h4>
                <ul className="navbar-nav mr-auto ms-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="projects">Projects</Link>
                    </li>
                </ul>
                <a href="https://www.linkedin.com/in/scott-pickett-852330262/" className="nav-link">
                    <img src="linkedin.png" alt="linkedin" className="img-fluid ms-4" style={{width: "30px", height: "auto"}}/>
                </a>
                <a href="https://github.com/Scott-Pickett6" className="nav-link">
                    <img src="github.png" alt="linkedin" className="img-fluid ms-4" style={{width: "30px", height: "auto"}}/>
                </a>
            </nav>
        </header>
    )
}

export default Header;