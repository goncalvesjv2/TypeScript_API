class ListProductService {
    async execute(){
        const products = [
            {
                name:"PC gamer",
                description:"Eletrônico",
                price:"6000",
                categoryId:"1"
            },{
                name:"Cama",
                description:"Imovél",
                price:"800",
                categoryId:"4"   
            }
        ];
        return products;
    }
}

export {ListProductService};