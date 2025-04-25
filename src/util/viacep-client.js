import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/"

const createConnection = () => axios.create({
    baseURL: BASE_URL
})

async function fetchCEP(cep) {
    try {
        const result = await createConnection()
            .get(`${cep}/json/`)
        if (result.data.erro) {
            throw new Error(`CEP ${cep} inválido`);
        }
        return result.data
    } catch (err) {
        throw err
    }

}

export {fetchCEP}
