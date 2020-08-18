import React, { Fragment } from 'react'
import {firebase} from  '../firebase'
import NavbarPedido from './Navbar-Pedido'
import './styles/ordenes-espera.css'
import { useHistory } from "react-router-dom";

const OrdenesEspera = () => {
    const [orderEspera, setOrderEspera] = React.useState([])
    React.useEffect(()=>{
        const dataListPedidos =firebase.firestore().collection("orders")
        .onSnapshot((doc) => {
            const data = [];
            doc.forEach((ele) => {
                data.push({
                    id:ele.id,
                    ...ele.data()
                })
            })
            setOrderEspera(data)
    });
    return dataListPedidos
    }, [])
    console.log(orderEspera)

    let history = useHistory();
    const checkListOrder = (e) => {
        const id = e.target.value
        console.log(id)
        firebase.firestore().collection("orders").doc(id).update({
                    Status: 'Pedido Listo',
                })
        history.push('/OrdenesAtendidas')
    }
    return (
        <Fragment>
            <NavbarPedido />
            <div className="container__orderList">
                {
                    orderEspera.filter((x) => x.Status === 'Pendiente').map((ele) => (
                        <ul key={ele.id}>
                            <p className="p--Cliente">Cliente:{ele.orderBD.Cliente}</p>
                            <p className="p--Fecha">Fecha de Pedido: <span>{ele.orderBD.Fecha}</span></p>
                            <div className="status--checkbox">
                                <label>Estado de Pedido: </label>
                                <input 
                                    type="checkbox"
                                    name="checkbox"
                                    value={ele.id}
                                    onChange={checkListOrder}
                                />
                            </div>
                            <p className="p--Cliente">Detalle de Pedido</p>
                            <hr className="list__hr"/>
                            {
                                ele.orderBD.Order.map((ele) => (
                                    <p className="p--Cantidad" key={ele.id}>
                                        <span>👨🏿‍🍳</span>
                                        {`${ele.Cantidad} ${ele.Descripcion}`}
                                    </p>
                                ))
                            }
                        </ul>
                    ))
                }    
            </div>

            
        </Fragment>
    )
}

export default OrdenesEspera
