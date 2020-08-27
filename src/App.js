import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Inicio from './components/Inicio';
import OrdenesEspera from './components/OrdenesEspera';
import ListProducts from './components/List-Products';
import BoxPedidos from './components/Box-Pedidos';
import OrdenesAtendidas from './components/OrdenesAtendidas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/OrdenesAtendidas">
          <OrdenesAtendidas />
        </Route>
        <Route exact path="/OrdenesEspera">
          <OrdenesEspera />
        </Route>
        <Route exact path="/Pedidos">
          <BoxPedidos />
        </Route>
        <Route exact path ="/ListMenu">
          <ListProducts />
        </Route>
        <Route exact path="/" >
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
