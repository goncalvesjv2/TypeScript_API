class DeleteUserService {
    async execute(id:any) {
        if(!id) {
            throw new Error("Id incorrect")
        }
        return {message: "Excluído com sucesso"}
    }
}

export {DeleteUserService};