import './App.css'
import Busca from "./components/Busca.jsx";
import LocalidadeLista from "./components/LocalidadeLista.jsx";
import {fetchCEP} from "./util/viacep-client.js";
import React from "react";

class App extends React.Component {
    state = {
        locationList: []
    }
    onSearchLocation = async (searchingCep) => {
        try {
            const location = await fetchCEP(
                searchingCep
            )
            this.setState((prevState) => ({
                locationList: [location, ...prevState.locationList]
            }))
        } catch (err) {
            alert(err.message)
        }
    }

    render() {
        return (
            <div className='grid justify-content-center'>
                <div className="col-6">
                    <div className="flex flex-column">
                        <Busca
                            dica='Buscar CEP 0000-000'
                            onSearchLocation={this.onSearchLocation}
                        />
                    </div>
                    <LocalidadeLista locationList={this.state.locationList}/>
                </div>
                <div className="col-6">

                </div>
            </div>
        )
    }
}

export default App
