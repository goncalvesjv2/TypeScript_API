import { ICategoryRequest } from "../../interface/ICategoryRequest";
import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repository/CategoriesRepositories";

class CreateCategoryService {
    async execute({name, description}: ICategoryRequest){
        if(!name) {
            throw new Error("Name incorrect")
        }
        if(!description){
            throw new Error("Description incorrect")
        }
        const categoriesRepository = getCustomRepository(CategoriesRepositories);
        const category = categoriesRepository.create(
            {
                name:name,
                description:description
            }
        )
        await categoriesRepository.save(category);
        return category;
    }
}

export {CreateCategoryService};