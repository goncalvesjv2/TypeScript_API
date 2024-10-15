import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const {name, description} = request.body;
        const id = request.params.id;
        console.log(name);
        console.log(description);
        const category = {
            name:name,
            description:description
        }
        const createcategoryService = new UpdateCategoryService();
        const ret = await createcategoryService.execute(category);
        return response.json({message:"Editado com sucesso"});
    }
}

export{UpdateCategoryController};