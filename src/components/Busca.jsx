import React, {Component} from 'react'

import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

import {fetchCEP} from "../util/viacep-client.js";


export default class Busca extends Component {
    state = {
        locationList: [],
        searchingCep: ''
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div
                    className='flex flex-column'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText
                            className='w-full'
                            placeholder={this.props.dica}
                            onChange={this.onFormChanged}
                            value={this.state.searchingCep}
                            required
                        />
                    </IconField>
                    <Button
                        label="OK"
                        outlined/>
                </div>
            </form>
        )
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        try {
            const location = await fetchCEP(
                this.state.searchingCep
            )
            const {
                cep,
                logradouro,
                complemento,
                bairro,
                localidade,
                uf
            } = location
            console.log(location)
            alert(`${cep}: ${logradouro} ${complemento}, ${bairro}, ${localidade}-${uf}`)
        } catch (err) {
            alert(err.message)
        }

    }

    onFormChanged = (event) => {
        this.setState({searchingCep: event.target.value})
    }
}


Busca.defaultProps = {
    dica: 'Buscar algo...'
}
