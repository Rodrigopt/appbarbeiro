import React from 'react'
import FormularioCadastro from './FormularioCadastro'
import fireDb from '../database/firebase'

const Cadastro = () => {

    const addEedit = obj => {
        fireDb.child('clientes').push(
            obj,
            error => {
                if(error){
                    console.log(error)
                }
            }
        )
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Clientes</h1>
                    <p className="lead">This is a modified of its parent.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro addEedit={addEedit} />
                </div>
                <div className="col-md-6">
                    <h2>Lista de Clientes</h2>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;