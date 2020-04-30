import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class ProdutoDetalhes extends Component {
    state = {
        produto: {},
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await API.get(`produto/buscar/${id}`);
        this.setState({ produto: response.data });
    }

    render() {
        const { produto } = this.state;
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
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.id || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">SKU:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.sku || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">NOME:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.nome || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">DESCRIÇÃO:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.descricao || ''} />
                                </div>
                            </div>    
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">PREÇO:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.preco || ''} />
                                </div>
                            </div> 
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><p className="textDetail">QUANTIDADE:</p></label>
                                <div className="col-sm-9">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={produto.quantidade || ''} />
                                </div>
                            </div>                      
                        </form>
                        <br />
                        <Link to="/produto" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                    </div>
                </div>
            </div>
        );
    }
}
