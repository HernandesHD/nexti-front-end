import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class PedidoDetalhes extends Component {
    state = {
        pedido: {},
        cliente: {},
        produtos: [],
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await API.get(`pedido/buscar/${id}`);
        this.setState({ pedido: response.data });
        this.setState({ cliente: response.data.cliente });
        this.setState({ produtos: response.data.produto });
    }

    render() {
        const { pedido, cliente, produtos } = this.state;
        return(
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="center">DETALHES</h4>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">ID:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={pedido.id || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">Cliente:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={cliente.nome || ''} />
                                </div>
                            </div>
                            {produtos.map(produto => (
                                <div key={produto.id} className="form-group row">
                                    <label className="col-sm-3 col-form-label"><p className="textDetail">Nome Produto:</p></label>
                                    <div className="col-sm-9">
                                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.nome || ''} />
                                    </div>
                                    <label className="col-sm-3 col-form-label"><p className="textDetail">Preço Produto:</p></label>
                                    <div className="col-sm-9">
                                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.preco || ''} />
                                    </div>
                                </div>
                            ))}
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">Data da compra:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={pedido.dataDaCompra || ''} />
                                </div>
                            </div>        
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">Total da compra:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={pedido.totalDaCompra || ''} />
                                </div>
                            </div>                
                        </form>
                        <br />
                        <Link to="/pedido" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

        );
    }
}
