import React, {Component} from "react";
import {Card} from 'primereact/card';
import {Divider} from "primereact/divider";

export default class LocalidadeLista extends Component {
    render() {
        return (
            <div className="card flex flex-column gap-3">
                {this.props.locationList.map(({
                                                  cep,
                                                  logradouro,
                                                  bairro,
                                                  localidade,
                                                  uf
                                              }) => (
                    <React.Fragment key={cep}>
                        <Card>
                            <span className="m-0">{cep}</span><br/>
                            <span>{logradouro}</span><br/>
                            <span>{bairro}</span><br/>
                            <span>{localidade} - {uf}</span>
                        </Card>
                        <Divider/>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}
