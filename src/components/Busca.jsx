import React, {Component} from 'react'

import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
        locationList: [],
        searchingCep: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchLocation(this.state.searchingCep)
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

    onFormChanged = (event) => {
        this.setState({searchingCep: event.target.value})
    }
}

Busca.defaultProps = {
    dica: 'Buscar algo...'
}
