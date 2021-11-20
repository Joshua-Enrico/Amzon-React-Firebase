export const initialState = {
  basket: [],
};
// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.qty + amount, 0);
  console.log('flag2');

// cases
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index_qty = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (index_qty >= 0) {
        state.basket[index_qty].qty += 1;
        console.log(state.basket[index_qty].qty);
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].qty > 1) {
          newBasket[index].qty -= 1;
        } else newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }
      console.log('flag1');
      return {
        ...state,
        basket: newBasket,
      };

    case "UPDATE_QTY":
      const index_qty_update = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index_qty_update >= 0) {
        state.basket[index_qty_update].qty = action.qty;

      } else {
        console.warn(
          `Can't update product (id: ${action.id}) as it's not in the basket!`
        );
      }
      console.log(state.basket);
      console.log('flag3');

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
