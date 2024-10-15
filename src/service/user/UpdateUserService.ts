import { IUserRequest } from "../../interface/IUserRequest";

class UpdateUserService {

    async execute({id, name, email, admin = false, password}: IUserRequest) {
        
        if(!email){
            throw new Error("Email incorrect");
        }
        if(!password){
            throw new Error("Password incorrect");
        }
        var vuser = {
            id:id, name:name, email:email, admin:admin, password:password
        }
        return {message: "Update User Service com sucesso"}
    }
}

export {UpdateUserService};