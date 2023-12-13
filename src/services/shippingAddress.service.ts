import axios from "axios"
import { AppError } from "../errors"
import { ICepData } from "../interface";
import { checkPriceShipping } from "../domain/localPrice";

const verifyShippingAddress = async (cep: number): Promise<object> => {
    try {
        const response = await axios.get<ICepData>("https://viacep.com.br/ws/" + cep + "/json/")

        if ('erro' in response.data && response.data.erro === true) {
            throw new AppError('Address not found', 404)
        } else {
            const { localidade, bairro } = response.data
            const isShippingAddress = checkPriceShipping(localidade, bairro)

            if (isShippingAddress) {
                return {
                    ...response.data,
                    isShippingAddress: true,
                    shippingAddress: isShippingAddress
                }
            } else {
                return {
                    ...response.data,
                    isShippingAddress: false,
                    shippingAddress: null
                }
            }

        }
    } catch (error) {
        throw new AppError('Error fetching address', 500)
    }
}



export default { verifyShippingAddress }