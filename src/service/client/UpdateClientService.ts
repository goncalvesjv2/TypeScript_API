import { IClientRequest } from "../../interface/IClientRequest";

class UpdateClientService{
    async execute({id, name, description, cpf, address, fone}: IClientRequest){
        if(!cpf){
            throw new Error("CPF incorrect")
        }
        if(!fone){
            throw new Error("Fone incorrect")
        }
        var vclient = {
            id:id, name:name, description:description, cpf:cpf, address:address, fone:fone
        }
        return {message: "Atualizado com sucesso"}
    }
}

export {UpdateClientService};