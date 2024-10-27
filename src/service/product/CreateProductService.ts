import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interface/IProductRequest";
import { ProductRepositories } from "../../repository/ProductsRepositories";

class CreateProductService {
    async execute({name, description, price, categoryId}: IProductRequest){
        if(!name){
            throw new Error("Name incorrect")
        }
        if(!categoryId){
            throw new Error("Category ID incorrect")
        }
        const productsRepository = getCustomRepository(ProductRepositories);
        const product = productsRepository.create(
            {
                name:name,
                description:description,
                price:price,
                categoryId:categoryId
            }
        );
        await productsRepository.save(product);
        return product;
    }
}

export{CreateProductService};