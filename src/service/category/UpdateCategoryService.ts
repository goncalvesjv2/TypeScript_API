import { ICategoryRequest } from "../../interface/ICategoryRequest";

class UpdateCategoryService{
    async execute({id, name, description}: ICategoryRequest){
        if(!name){
            throw new Error("Name incorrect")
        }
        if(!description){
            throw new Error("Description incorrect")
        }
        var vcategory = {
            id:id, name:name, description:description
        }
        return {message:"Update Category Service com sucesso"};
    }
}

export {UpdateCategoryService};