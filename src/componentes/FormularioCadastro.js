import React, { useState } from 'react'

const FormularioCadastro = (props) => {

    //var
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereço: ''
    }

    let { values, setValues } = useState(camposIniciaisDeValores)

const manipuladorInputChange = e => {
    let { nomeCompleto, value} = e.target

    setValues({
        ...values,
        [nomeCompleto]: value
    })
}

const manipuladorFormEnvio = e => {
    e.preventDefault()
    props.addEedit(values)
}

    return (
        <fom autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto}
                onChange={manipuladorInputChange}/>
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone}
                    onChange={manipuladorInputChange}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="E-mail" name="email" value={values.email}
                    onChange={manipuladorInputChange}/>
                </div>
            </div>

            <div className='form-group'>
                <input type="submit" value="Salvar" className="btn btn-primary btn-block"/>
            </div>

        </fom>
    )
}

export default FormularioCadastro