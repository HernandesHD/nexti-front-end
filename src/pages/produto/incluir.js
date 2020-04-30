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

    handleChangeSku = event => {
        this.setState({ sku: event.target.value });
    }

    handleChangeNome = event => {
        this.setState({ nome: event.target.value });
    }

    handleChangeDescricao = event => {
        this.setState({ descricao: event.target.value });
    }

    handleChangePreco = event => {
        this.setState({ preco: event.target.value });
    }

    handleChangeQuantidade = event => {
        this.setState({ quantidade: event.target.value });
    }

    cadastraProduto = async event => {
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

                        <form onSubmit={this.cadastraProduto} >
                            <div class="form-group">
                                <label for="inputNome">Sku:</label>
                                <input type="text" class="form-control" id="inputNome" onChange={this.handleChangeSku} placeholder="Fulado de tal" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">Nome:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangeNome} placeholder="123.456.789-12" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">Descrição:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangeDescricao} placeholder="11/11/9999" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">Preço:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangePreco} placeholder="11/11/9999" />
                            </div>
                            <div class="form-group">
                                <label for="inputCpf">Quantidade:</label>
                                <input type="text" class="form-control" id="inputCpf" onChange={this.handleChangeQuantidade} placeholder="11/11/9999" />
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
                            <Link to="/produto" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                        </form>
                        
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}