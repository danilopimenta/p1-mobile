import './App.css'
import Busca from "./components/Busca.jsx";
import LocalidadeLista from "./components/LocalidadeLista.jsx";
import { Divider } from 'primereact/divider';

function App() {
    return (
        <div className='grid justify-content-center'>
            <div className="col-6">
                <div className="flex flex-column">
                    <Busca
                        dica='Buscar CEP 0000-000'/>
                </div>
                <Divider />
                <LocalidadeLista />
            </div>
            <div className="col-6">

            </div>
        </div>
    )
}

export default App
