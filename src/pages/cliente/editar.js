import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class EditarCliente extends Component {
    state = {
        cliente: {},
        
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await API.get(`cliente/buscar/${id}`);
        this.setState({ cliente: response.data });
    }

    handleChangeNome = event => {
        this.setState({ nome: event.target.value });
    }

    handleChangeCpf = event => {
        this.setState({ cpf: event.target.value });
    }

    handleChangeDataDeNascimento = event => {
        this.setState({ dataDeNascimento: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    editarCliente = async event => {
        event.preventDefault();
        const editaCliete = {
            nome: this.state.nome, 
            cpf: this.state.cpf, 
            dataDeNascimento: this.state.dataDeNascimento,
        }
        const { id } = this.props.match.params;
        const response = await API.put(`cliente/editar/${id}`, editaCliete);
        this.setState({ editarCliente: response.data });
    };

    render() {
        const { cliente } = this.state;
        return(
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="center">EDITAR</h4>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <form onSubmit={this.editarCliente}>
                            <div className="form-group">
                                <label htmlFor="inputNome">Nome:</label>
                                <input type="text" className="form-control" name="nome" id="inputNome" defaultValue={cliente.nome} onChange={this.handleChangeNome} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputCpf">CPF:</label>
                                <input type="text" className="form-control" name="cpf" id="inputCpf" defaultValue={cliente.cpf} onChange={this.handleChangeCpf} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputCpf">Data de Nascimento:</label>
                                <input type="text" className="form-control" name="dataDeNascimento" id="inputCpf" defaultValue={cliente.dataDeNascimento} onChange={this.handleChangeDataDeNascimento} />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
                            <Link to="/cliente" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                        </form>
                        
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}