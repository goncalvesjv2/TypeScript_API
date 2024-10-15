class ListUserService {
    
    async execute() {
        const users = [
            {
                name:"João",
                email:"joao@gmail.com", 
                admin: false,
                password:"1234"
            }, {
                name:"Cleiton",
                email:"cleitinho@gmail.com",
                admin: false,
                password:"3982"
            }
        ];
        return users
    }
}

export {ListUserService};