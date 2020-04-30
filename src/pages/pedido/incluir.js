import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class IncluirCliente extends Component {

    state = {
        cliente: {},
        clientes: [],
        produtos: [],
        nome: '',
        cpf: '',
        dataDeNascimento: '',
        
    }

    componentDidMount() {
        this.loadClientes();
        this.loadProdutos();
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

    loadClientes = async () => {
        const response = await API.get('cliente/listar');
        this.setState({ clientes: response.data })
    };

    loadProdutos = async () => {
        const response = await API.get('produto/listar');
        this.setState({ produtos: response.data })
    };

    deletaCliente = async (id) => {
        const response = await API.delete(`cliente/deletar/${id}`);
        this.setState({ clientes: response.data })
    };


    render() {
        const { clientes, produtos } = this.state;
        
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
                                <label for="inputNome">Data da Compra:</label>
                                <input type="text" class="form-control" id="inputNome" onChange={this.handleChangeSku} placeholder="11/11/9999" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Cliente: </label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Selecione um cliente...</option>
                                    {clientes.map(cliente => (
                                        <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <br />
                            <div class="form-check">
                                <div className="row">
                                {produtos.map(produto => (
                                    <div className="col-md-3">
                                        <input class="form-check-input" type="checkbox" value={produto.id} id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            {produto.nome}
                                        </label>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="inputCpf">Preço:</label>
                                <input type="text" readOnly class="form-control" id="inputCpf" value="" onChange={this.handleChangePreco} />
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
                            <Link to="/pedido" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                        </form>
                        
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}