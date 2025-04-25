import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/"

const createConnection = () => axios.create({
    baseURL: BASE_URL
})

async function fetchCEP(cep) {
    try {
        const result = await createConnection()
            .get(`${cep}/json/`)
        return result.data
    } catch (err) {
        console.log(err)
        return {}
    }

}

export {fetchCEP}
