import { getCustomRepository } from "typeorm";
import { ISaleRequest } from "../../interface/ISaleRequest";
import { SalesRepositories } from "../../repository/SalesRepositories";

class CreateSaleService {
    async execute({userId, productId, clientId, quantity}: ISaleRequest){
        if(!userId){
            throw new Error("User ID incorrect")
        }

        if(!productId){
            throw new Error("Product ID incorrect")
        }

        if(!clientId){
            throw new Error("Client ID incorrect")
        }

        const salesRepository = getCustomRepository(SalesRepositories);
        const sale = salesRepository.create(
            {
                userId:userId,
                productId:productId,
                clientId:clientId,
                quantity:quantity
            }
        );
        await salesRepository.save(sale);
        return sale;
    }
}

export{CreateSaleService};