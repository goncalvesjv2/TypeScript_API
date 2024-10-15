import { IProductRequest } from "../../interface/IProductRequest";

class UpdateProductService {
    async execute({id, name, description, price, categoryId}: IProductRequest){
        if(!name){
            throw new Error("Name incorrect")
        }
        if(!categoryId){
            throw new Error("Category ID incorrect")
        }
        var vproduct = {
            id:id, name:name, description:description, price:price, categoryId:categoryId
        };
        return {message:"Atualizado com sucesso"}
    }
}

export {UpdateProductService};