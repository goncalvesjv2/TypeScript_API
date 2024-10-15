class ListClientService {
    async execute(){
        const clients = [
            {
                name:"João",
                description:"PJ",
                cpf:"189441231",
                address:"São Paulo",
                fone:"40028922"
            },{
                name:"Lucas",
                description:"CLT",
                cpf:"590123295",
                address:"Mogi das Cruzes",
                fone:"89148041"
            }
        ];
        return clients;
    }
}

export {ListClientService};