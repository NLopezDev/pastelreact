import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <div className="navbar">
            <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#ini"
                >Inicio</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosot">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pedido.html">Realiza tu pedido</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link" href="#cont" tabindex="-1" aria-disabled="true">Visitanos</a>
            </li>
          </ul>
          <CartWidget />
        </nav>
        </div>
    );
}

export default NavBar;