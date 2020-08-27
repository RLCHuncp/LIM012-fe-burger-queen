import React from 'react';
import BoxPedidos from '../components/Box-Pedidos';
import { render, getAllByTestId, getNodeText } from '@testing-library/react';

describe('<BoxPedidos />', () => {
    it('Debería mostrar la lista de pedidos marcados', () => {
        const eliminar = jest.fn();
        const listProduct = {
            Descripcion: 'Hamburguesa doble',
            Precio: 15, 
            Cantidad: 2,
            id: 'AeYaJUiQbMhKGjEVblwu',
        };
        const container = render(<BoxPedidos order={listProduct} ProductItemOrder={eliminar}/>);
        const listaDeNodos = container.getAllByTestId('item');

    })
})