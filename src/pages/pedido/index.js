
import React, { Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

import API from '../../services/api';

export default class Main extends Component {

    state = {
        pedidos: [],
    }

    componentDidMount() {
        this.loadProdutos();
    }

    loadProdutos = async () => {
        const response = await API.get('pedido/listar');
        this.setState({ pedidos: response.data })
    };

    deletaPedido = async (id) => {
        const response = await API.delete(`pedido/deletar/${id}`);
        this.setState({ pedidos: response.data })
    };

    render() {
        const { pedidos } = this.state;
    
        return(
            <div className="container posts-page">
                <br />
                <div className="row">
                    <div className="col-md-12 img-posts">
                        <h1>Nexti</h1>
                        <p>Quantidade de pedidos: {pedidos.length}</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <Link to={`/pedido/incluir`} className="btn btn-outline-primary btn-xs"><FontAwesomeIcon icon={faEdit} /> Incluir</Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12 img-posts">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Data da Compra</th>
                                    <th scope="col">Total da Compra</th>
                                    <th scope="col">AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidos.map(pedido => (
                                    <tr key={pedido.id}>
                                        <th scope="row">{pedido.id}</th>
                                        <td>{pedido.cliente.nome}</td>
                                        <td>{pedido.produto.length < 1 ? pedido.produto[0].nome : pedido.produto[0].nome + " [+]"}</td>
                                        <td>{pedido.dataDaCompra}</td>
                                        <td>{pedido.totalDaCompra}</td>
                                        <td>
                                            <Link to={`/pedido/detalhes/${pedido.id}`} className="btn btn-outline-success btn-sm"><FontAwesomeIcon icon={faEye} /></Link>
                                            <button type="button" className="btn btn-outline-primary btn-sm"><FontAwesomeIcon icon={faEdit} /></button>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => this.deletaPedido(pedido.id)}><FontAwesomeIcon icon={faTrash} /></button>       
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>
        );
    }
}