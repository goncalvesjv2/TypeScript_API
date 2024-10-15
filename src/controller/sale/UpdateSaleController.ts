import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

class UpdateSaleController {
    async handle(request: Request, response: Response){
        const{userId, productId, clientId, quantity} = request.body;
        const id = request.params.id;
        const sale = {
            userId:userId,
            productId:productId,
            clientId:clientId,
            quantity:quantity
        };
        const createsaleService = new UpdateSaleService();
        const ret = await createsaleService.execute(sale);
        return response.json({message:"Atualizado com sucesso"});
    }
}

export{UpdateSaleController};