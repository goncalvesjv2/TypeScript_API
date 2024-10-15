class ListCategoryService {
    async execute(){
        const categories = [
            {
                name: "Iphone 15",
                description: "Smartphone"
            }, {
                name: "S24 Ultra",
                description: "Smartphone"
            }
        ];
        return categories;
    }
}

export{ListCategoryService};