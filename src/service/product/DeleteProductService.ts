class DeleteProductService {
    async execute(id:any){
        if(!id){
            throw new Error("ID incorrect")
        }
        return {message:"Excluído com sucesso"};
    }
}

export{DeleteProductService};