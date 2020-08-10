import React, { Fragment } from 'react'
import waiter from '../images/waiter.svg'
import {Link} from 'react-router-dom'
import err from '../images/delete.svg'
import './styles/box-pedidos.css'

const BoxPedidos = ({order, eventChange, client, ProductItemOrder}) => {
    
    const btnEliminarItem = (event) => {
        event.preventDefault();
        ProductItemOrder(event.target.id)
    }

    const getTotalSum = () => {
        return order.reduce(
          (sum,{Precio}) =>sum+Precio,
          0
    );
    }
    return (
        <Fragment>
            <div className="list-pedidos">
                <div className="datos">
                    <p>Nombre del cliente:</p>
                    <input type="text" onChange={eventChange} value={client}/>
                </div>
                <div className="inventario-pedidos">
                    <div className="pedidos--title">
                        <ul>
                            <li>cantidad</li>
                            <li>producto</li>
                            <li>subtotal ($.)</li>
                            <li>eliminar</li>
                        </ul>
                    </div>
                    <div className="pedidos--title listColor">
                        {
                            order.map((product) => (
                            <ul key={product.id}>
                                <li>{product.Cantidad}</li>
                                <li>{product.Descripcion}</li>
                                <li>{product.Precio}</li>
                                <li>
                                    <img src={err} id={product.idOrder}
                                    onClick={btnEliminarItem}
                                    className="img__delete" alt="delete"/>
                                </li>
                            </ul>
                            ))
                        }
                    </div>
                    <p className="total--suma">TOTAL: <span>${getTotalSum(order)}</span></p>
                    <button className="button-pedidos"><img className="waiter" src={waiter} alt="waiter"/>
                        <Link to="/OrdenesEspera" className="links">Enviar Pedido</Link>
                    </button>
                </div>
            </div>           
        </Fragment>
    )
}

export default BoxPedidos
