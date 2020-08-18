import React, { Fragment } from 'react'
import NavbarPedido from './Navbar-Pedido'
import {firebase} from  '../firebase'
import './styles/ordenes-espera.css'

const OrdenesAtendidas = () => {
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        firebase.firestore().collection('orders')
                .onSnapshot((snap) => {
                    const data = [];
                    snap.forEach((doc) => {
                        data.push({
                            id: doc.id,
                            ...doc.data(),
                        })
                    })
                    setState(data)
                })
    }, [])
    // console.log(state)
    return (
        <Fragment>
            <NavbarPedido />
            <div className="container__orderList">
                {
                    state.filter((x) => x.Status === 'Pedido Listo').map((item) => (
                        <ul key={item.id}>
                            <p className="p--Cliente">Cliente:{item.orderBD.Cliente}</p>
                            <p className="p--Fecha">Fecha de Pedido: <span>{item.orderBD.Fecha}</span></p>
                            <div className="status--checkbox">
                                <label>Estado de Pedido: {item.Status}</label>
                            </div>
                            <p className="p--Cliente">Detalle de Pedido</p>
                            <hr className="list__hr"/>
                            {
                                item.orderBD.Order.map((ele) => (
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

export default OrdenesAtendidas
