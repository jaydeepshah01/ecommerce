import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { total, grandTotal, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successful</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total</p>
                                <h4 className="m-0 txt-right">${total}</h4>
                                <p className="mb-1">Tax : 1.23% of ${total}</p>
                                <p className="mb-1">Shipping : $500</p>
                                <hr/>
                                <p className="mb-1">Grand Total</p>
                                <h3 className="m-0 txt-right">${grandTotal}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;