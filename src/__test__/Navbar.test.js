/* eslint-disable no-unused-vars */
import  React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import logo from '../images/burger.png';

describe('Componente <Navbar/>', () => {
    it('Debería mostrar el Logo descriptivo de Burger Queen', () => {
        const descriptiveLogo = () =>  <div>
                                            <span>Burger</span><span>Queen</span>
                                            <img src={logo} alt="Logo"/>
                                        </div>
        const { debug } = render(<Navbar />)
        debug();
    })
})


