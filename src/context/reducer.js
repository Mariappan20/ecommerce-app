export const initialState = {
	cart: [],
	authUser: null
};

export const cartTotal = cart => cart.reduce(( amount, item) => item.price + amount, 0 );
const reducer = ( state, action ) => {
	console.log('action', action);
	switch( action.type ) {
		case 'ADD_TO_CART': return {
								...state,
								cart: [ ...state.cart, action.item]
							};
		        
		case 'REMOVE_FROM_CART':  let newCart = [...state.cart];
								  const index = state.cart.findIndex( item => item._id === action._id );
								  if( index >= 0 ){
									  newCart.splice(index, 1);
								  }
								  return {
									  ...state,
									  cart: newCart
								  };
								  
		case 'AUTH_USER': return {
								...state,
								authUser: action.user
							}
		case 'RESET_CART': return {
								...state,
								cart: action.item
							}						
				
		default: return state;
	} 
}

export default reducer;