import React, { Component} from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class Main extends Component {

    state = {
        produtos: [],
    }

    componentDidMount() {
        this.loadProdutos();
    }

    loadProdutos = async () => {
        const response = await API.get('produto/listar');
        this.setState({ produtos: response.data })
    };

    deletaProduto = async (id) => {
        const response = await API.delete(`produto/deletar/${id}`);
        this.setState({ produtos: response.data })
    };

    render() {
        const { produtos } = this.state;
        return(
            <div className="container posts-page">
                <br />
                <div className="row">
                    <div className="col-md-12 img-posts">
                        <h1>Nexti</h1>
                        <p>Quantidade de produtos: {produtos.length}</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <Link to={`/produto/incluir`} className="btn btn-outline-primary btn-xs"><FontAwesomeIcon icon={faEdit} /> Incluir</Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12 img-posts">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">PREÇO</th>
                                    <th scope="col">SKU</th>
                                    <th scope="col">DESCRIÇÃO</th>
                                    <th scope="col">QUANTIDADE</th>
                                    <th scope="col">AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map(produto => (
                                    <tr key={produto.id}>
                                        <th scope="row">{produto.id}</th>
                                        <td>{produto.nome}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.sku}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.quantidade}</td>
                                        <td>
                                            <Link to={`/produto/detalhes/${produto.id}`} className="btn btn-outline-success btn-sm"><FontAwesomeIcon icon={faEye} /></Link>
                                            <Link to={`/produto/editar/${produto.id}`} className="btn btn-outline-primary btn-sm"><FontAwesomeIcon icon={faEdit} /></Link>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => this.deletaCliente(produto.id)}><FontAwesomeIcon icon={faTrash} /></button>    
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