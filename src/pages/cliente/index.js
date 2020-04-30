import React, { Component} from 'react';

import API from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export default class Main extends Component {

    state = {
        clientes: [],
    }

    componentDidMount() {
        this.loadClientes();
    }

    loadClientes = async () => {
        const response = await API.get('cliente/listar');
        this.setState({ clientes: response.data })
    };

    deletaCliente = async (id) => {
        const response = await API.delete(`cliente/deletar/${id}`);
        this.setState({ clientes: response.data })
    };

    render() {
        const { clientes } = this.state;
        return(
            <div className="container posts-page">
                <br />
                <div className="row">
                    <div className="col-md-12 img-posts">
                        <h1>Nexti</h1>
                        <p>Quantidade de clientes: {clientes.length}</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <Link to={`/cliente/incluir`} className="btn btn-outline-primary btn-xs"><FontAwesomeIcon icon={faEdit} /> Incluir</Link>
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
                                <th scope="col">CPF</th>
                                <th scope="col">Data de Nascimento</th>
                                <th scope="col">AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(cliente => (
                                    <tr key={cliente.id}>
                                        <th scope="row">{cliente.id}</th>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.dataDeNascimento}</td>
                                        <td>
                                            <Link to={`/cliente/detalhes/${cliente.id}`} className="btn btn-outline-success btn-sm"><FontAwesomeIcon icon={faEye} /></Link>
                                            <Link to={`/cliente/editar/${cliente.id}`} className="btn btn-outline-primary btn-sm"><FontAwesomeIcon icon={faEdit} /></Link>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => this.deletaCliente(cliente.id)} ><FontAwesomeIcon icon={faTrash} /></button> 
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