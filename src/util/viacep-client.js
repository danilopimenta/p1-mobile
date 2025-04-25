import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/"

const createConnection = () => axios.create({
    baseURL: BASE_URL
})

async function fetchCEP(cep) {
    try {
        const result = await createConnection()
            .get(`${cep}/json/`)
        if (result.data.error || result.data.error === 'true') {
            throw "Erro na request viacep";
        }
        return result.data
    } catch (err) {
        throw err
    }

}

export {fetchCEP}
