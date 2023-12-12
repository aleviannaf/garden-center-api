import axios from "axios"
import { AppError } from "../errors"
import { ICepData } from "../interface";

const verifyShippingAddress = async (cep: number): Promise<ICepData> => {
    const response = await axios.get<ICepData>("https://viacep.com.br/ws/"+cep+"/json/")

    if ('erro' in response.data && response.data.erro === true) {
        console.log('Erro encontrado na resposta.');
        throw new AppError('Address not found', 404)
    } else {
        return response.data
    }
}



export default { verifyShippingAddress }