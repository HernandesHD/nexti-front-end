import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class IncluirCliente extends Component {

    state = {
        cliente: {},
        nome: '',
        cpf: '',
        dataDeNascimento: '',
        
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

    cadastraCliente = async event => {
        event.preventDefault();
        const editaCliete = {
            nome: this.state.nome, 
            cpf: this.state.cpf, 
            dataDeNascimento: this.state.dataDeNascimento,
        }
        
        const response = await API.post('cliente/cadastrar', editaCliete);
        this.setState({ editarCliente: response.data });
    };
    render() {
        return(
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="center">INCLUIR</h4>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <form onSubmit={this.cadastraCliente} >
                            <div class="form-group">
                                <label for="inputNome">Nome:</label>
                                <input type="text" class="form-control" id="inputNome" onChange={this.handleChangeNome} placeholder="Fulado de tal" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">CPF:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangeCpf} placeholder="123.456.789-12" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">Data de Nascimento:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangeDataDeNascimento} placeholder="11/11/9999" />
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
                            <Link to="/cliente" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                        </form>
                        
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}