import React, { Fragment } from 'react'
import waiter from '../images/waiter.svg'
import err from '../images/delete.svg'
import './styles/box-pedidos.css'
import { useHistory } from "react-router-dom";

const BoxPedidos = ({order, eventChange, client, ProductItemOrder, sendOrderBD}) => {
    const clientRegister = client;
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
    let history = useHistory();
    let today = new Date()
    const date = today.toLocaleString([], { hour12: true});
    const sendOrder = () =>{
        if(clientRegister===''){
            alert('Ingrese nombre del cliente');
        } else {
            const orderBD = {
                Cliente: clientRegister,
                Order: order,
                Total: getTotalSum(),
                Fecha: date,
        }
        sendOrderBD(orderBD)
        alert('Se envió la orden');
        }
        history.push("/OrdenesEspera");
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
                    <button className="button-pedidos" onClick={sendOrder}>Enviar Pedido<img className="waiter" src={waiter} alt="waiter"/>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default BoxPedidos
