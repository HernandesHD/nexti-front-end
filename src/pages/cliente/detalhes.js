import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class ClienteDetalhes extends Component {
    state = {
        cliente: {},
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await API.get(`cliente/buscar/${id}`);
        this.setState({ cliente: response.data });
    }

    render() {
        const { cliente } = this.state;
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
                                <label className="col-md-3 col-form-label"><p className="textDetail">ID:</p></label>
                                <div className="col-md-5">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={cliente.id || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label"><p className="textDetail">Nome:</p></label>
                                <div className="col-md-5">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={cliente.nome || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label"><p className="textDetail">CPF:</p></label>
                                <div className="col-md-5">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={cliente.cpf || ''} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label"><p className="textDetail">Data de nascimento:</p></label>
                                <div className="col-md-5">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={cliente.dataDeNascimento || ''} />
                                </div>
                            </div>                         
                        </form>
                        <br />
                        <Link to="/cliente" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                    </div>
                </div>
            </div>
        );
    }
}
