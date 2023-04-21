import { getShoppingCart } from "../../Utilities/FackeDb";

const createLoader = async () => {
    const loadedElement = await fetch('/JobFetures.json');
    const jobFeatures = await loadedElement.json();
    // console.log(jobFeatures);

    const storedCart = getShoppingCart();
    // console.log(storedCart);
    const savedCart = [];

    for(const id in storedCart){
        let addedElement = jobFeatures.find(pd => pd.id == id);
        // console.log(addedElement);
            if(addedElement){
                const quantity = storedCart[id];
                addedElement.quantity=quantity;
                savedCart.push(addedElement);
            }
        
    }
    // console.log(savedCart)
    return savedCart;
}

export default createLoader;