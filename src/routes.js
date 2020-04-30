import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';

import Main from './pages/home/Home';
import Cliente from './pages/cliente/index';
import Produto from './pages/produto/index';
import Pedido from './pages/pedido/index';
import ClienteDetalhes from './pages/cliente/detalhes';
import ProdutoDetalhes from './pages/produto/detalhes';
import PedidoDetalhes from './pages/pedido/detalhes';
import IncluirCliente from './pages/cliente/incluir';
import EditarCliente from './pages/cliente/editar';
import IncluirProduto from './pages/produto/incluir';
import EditarProduto from './pages/produto/editar';
import IncluirPedido from './pages/pedido/incluir';
import EditarPedido from './pages/pedido/editar';

const Routes = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cliente" component={Cliente} />
            <Route exact path="/produto" component={Produto} />
            <Route exact path="/pedido" component={Pedido} />
            <Route path="/cliente/detalhes/:id" component={ClienteDetalhes} />
            <Route path="/cliente/incluir" component={IncluirCliente} />
            <Route path="/cliente/editar/:id" component={EditarCliente} />
            <Route path="/produto/detalhes/:id" component={ProdutoDetalhes} />
            <Route path="/produto/incluir" component={IncluirProduto} />
            <Route path="/produto/editar/:id" component={EditarProduto} />
            <Route path="/pedido/detalhes/:id" component={PedidoDetalhes} />
            <Route path="/pedido/incluir" component={IncluirPedido} />
            <Route path="/pedido/editar/:id" component={EditarPedido} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
