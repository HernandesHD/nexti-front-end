import React, { Component } from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class EditarProduto extends Component {
    state = {
        produto: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await API.get(`produto/buscar/${id}`);
        this.setState({ produto: response.data });
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


    editarProduto = async event => {
        event.preventDefault();
        const editaProduto = {
            sku: this.state.sku, 
            nome: this.state.nome, 
            descricao: this.state.descricao,
            preco: this.state.preco,
            quantidade: this.state.quantidade,
        }
        const { id } = this.props.match.params;
        const response = await API.put(`produto/editar/${id}`, editaProduto);
        this.setState({ produto: response.data });
    };

    render() {
        const { produto } = this.state;
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

                        <form onSubmit={this.editarProduto}>
                            <div className="form-group">
                                <label htmlFor="inputSku">SKU:</label>
                                <input type="text" className="form-control" name="sku" id="inputSku" defaultValue={produto.sku} onChange={this.handleChangeSku} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputNome">Nome:</label>
                                <input type="text" className="form-control" name="nome" id="inputNome" defaultValue={produto.nome} onChange={this.handleChangeNome} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputNome">Descrição:</label>
                                <input type="text" className="form-control" name="descricao" id="inputDescricao" defaultValue={produto.descricao} onChange={this.handleChangeDescricao} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputCpf">Preço:</label>
                                <input type="text" className="form-control" name="preco" id="inputPreco" defaultValue={produto.preco} onChange={this.handleChangePreco} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputCpf">Quantidade:</label>
                                <input type="text" className="form-control" name="quantidade" id="inputQuantidade" defaultValue={produto.quantidade} onChange={this.handleChangeQuantidade} />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
                            <Link to="/produto" className="btn btn-outline-dark btn-xs"><FontAwesomeIcon icon={faBackspace} /> Voltar</Link>
                        </form>
                        
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}