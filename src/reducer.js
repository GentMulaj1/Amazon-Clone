export const initialState = {
    basket: [
        {
        id: "21312412",
        title: "Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne Pimple Patch for",
        price: 538.62,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/71bulw40DsL._AC_UY218_.jpg"
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount , 0)


function reducer(state, action) {
    console.log(action.type)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item from basket...
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        break;
        
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket...

            // we cloned the basket
            let newBasket = [...state.basket]

            // we check to see if product exists 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // item exits in basket, reemove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return { 
                ...state, 
                basket: newBasket 
            }

        break;
        default:
            return state;
    }
}

export default reducer;






