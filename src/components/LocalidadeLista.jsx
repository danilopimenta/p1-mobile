import {Component} from "react";
import {Card} from 'primereact/card';


export default class LocalidadeLista extends Component {
    state = {
        locationList: [
            {
                cep: "04094-050",
                logradouro: "Avenida Pedro Álvares Cabral",
                bairro: "Parque Iburapuera",
                localidade: "São Paulo",
                uf: "SP"
            }
        ]
    }


    render() {
        return (
            <div className="card flex justify-content-center">

                {this.state.locationList.map(({
                                                  cep,
                                                  logradouro,
                                                  bairro,
                                                  localidade,
                                                  uf
                                              }) => (
                    <Card>
                    <span className="m-0">
                        {cep}
                    </span>
                        <br/>
                        <span>
                        {logradouro}
                    </span>
                        <br/>
                        <span>
                        {bairro}
                    </span>
                        <br/>
                        <span>
                        {localidade} - {uf}
                    </span>
                    </Card>
                ))}
            </div>
        )
    }
}