import React, { Fragment } from 'react';
import logo from '../images/burger.png';
import './styles/navbar-pedidos.css';
import { useHistory } from "react-router-dom";

const NavbarPedido = () => {
    let history = useHistory()
    const backToMenu = () =>{
        history.push('/ListMenu');
    }
    const orderEspera = () =>{
        history.push('/OrdenesEspera');
    }
    const orderAtendidos = () =>{
        history.push('/OrdenesAtendidas');
    }
    return (
        <Fragment>
            <nav className="container__header--pedidos">
                <div className="container__logo" onClick={backToMenu}>
                    <span>Burger</span><span>Queen</span>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="btn--estado">
                    <button className="btn--espera" onClick={orderEspera}>Ordenes en Espera</button>
                    <button className="btn--atendido" onClick={orderAtendidos}>Atendidos</button>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavbarPedido