import React from 'react'
import "../../css/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Providers/StateProvider';
import { getBasketTotal } from '../Providers/StateProviderFunctions/reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket?.reduce((sum, item) => item.qty + sum, 0)} items): <strong>{ value }</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
    );
}

export default Subtotal
