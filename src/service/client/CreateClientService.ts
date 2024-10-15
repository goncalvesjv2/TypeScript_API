import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/IClientRequest";
import { ClientsRepositories } from "../../repository/clientsRepositories";

class CreateClientService{
    async execute({name, description, cpf, address, fone}: IClientRequest){
        if(!cpf){
            throw new Error("CPF incorrect")
        }
        if(!fone){
            throw new Error("Fone incorrect")
        }
        const clientsRepository = getCustomRepository(ClientsRepositories);
        const client = clientsRepository.create(
            {
                name:name,
                description:description,
                cpf:cpf,
                address:address,
                fone:fone
            }
        );
        await clientsRepository.save(client);
        return client;
    }
}

export {CreateClientService};