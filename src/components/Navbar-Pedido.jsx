import React, { Fragment } from 'react'
import logo from '../images/burger.png'
import './styles/navbar-pedidos.css'

const NavbarPedido = () => {
    return (
        <Fragment>
            <nav className="container__header--pedidos">
                <div className="container__logo">
                    <span>Burger</span><span>Queen</span>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="btn--estado">
                    <button className="btn--espera">Ordenes en Espera</button>
                    <button className="btn--atendido">Atendidos</button>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavbarPedido