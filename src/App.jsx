import './App.css'
import Busca from "./components/Busca.jsx";
import LocalidadeLista from "./components/LocalidadeLista.jsx";
import {fetchCEP} from "./util/viacep-client.js";
import React from "react";
import ChartUF from "./components/ChartUF.jsx";

class App extends React.Component {
    state = {
        locationList: [],
        metrics: {}
    }
    onSearchLocation = async (searchingCep) => {
        try {
            const location = await fetchCEP(searchingCep);
            this.setState((prevState) => ({
                locationList: [location, ...prevState.locationList]
            }))
            this.addNewUFMetric(location.uf)
        } catch (err) {
            alert(err.message)
        }
    }

    addNewUFMetric = (uf) => {
        this.setState((prevState) => ({
            metrics: {
                ...prevState.metrics,
                [uf]: (prevState.metrics[uf] || 0) + 1
            }
        }))
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
                    <LocalidadeLista locationList={this.state.locationList} />
                </div>
                <div className="col-6">
                    <ChartUF metrics={this.state.metrics} />
                </div>
            </div>
        );
    }
}

export default App
