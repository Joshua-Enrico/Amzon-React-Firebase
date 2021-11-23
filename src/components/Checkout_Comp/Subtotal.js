import React from 'react'
import "../../css/Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Providers/StateProvider';
import { getBasketTotal } from '../Providers/StateProviderFunctions/reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {
    const history = useNavigate();
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
        <button onClick={e => history('/payment')} >Proceed to Checkout</button>
    </div>
    );
}

export default Subtotal
