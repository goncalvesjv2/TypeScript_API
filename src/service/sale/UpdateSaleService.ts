import { ISaleRequest } from "../../interface/ISaleRequest";

class UpdateSaleService {
    async execute({id, userId, productId, clientId, quantity}: ISaleRequest){
        if(!userId){
            throw new Error("User ID incorrect")
        }
        
        if(!productId){
            throw new Error("Product ID incorrect")
        }

        if(!clientId){
            throw new Error("Client ID incorrect")
        }

        var vsale = {
            id:id, userId:userId, productId:productId, quantity:quantity
        }
        return {message:"Update Sale Service com sucesso"};
    }
}

export{UpdateSaleService};