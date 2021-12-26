import uuid from 'uuid'

//Esse é o nosso reducer, exatamente igual ao redux
//o state é o array de produtos
const productsReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            return action.products

        case 'SET_TITLE':
            return {...state, title: action.title}
        case 'SET_BODY':
            return {...state, body: action.body}
        case 'ADD_PRODUCT':
            return [
                ...state,
                { 
                    id: uuid(), 
                    title: action.title, 
                    body: action.body 
                }
            ]
        case 'REMOVE_PRODUCT':
            return state.filter((product) => product.id !== action.id)
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                  return {
                    ...state,
                    id: action.id,
                    title: action.title,
                    body: action.body
                  };
                } else {
                  return product;
                };
            });
        default:
            return state
    }
}

export { productsReducer as default }