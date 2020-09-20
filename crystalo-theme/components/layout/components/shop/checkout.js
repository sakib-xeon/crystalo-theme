export default function Checkout(){
    return(
        <section className="checkout-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="exisitng-customer">
                        <h5>Exisitng Customer?<a href="#">Click here to login</a></h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="coupon">
                        <h5>Have a Coupon? <a href="#">Click here to enter your code</a></h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="form billing-info">
                        <div className="shop-page-title">
                            <div className="title">Billing <span>Address</span></div>
                        </div>
                        <form method="post" action="">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="field-label">Country*</div>
                                    <div className="field-input">
                                        <input type="text" name="country" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-label">First Name*</div>
                                    <div className="field-input">
                                        <input type="text" name="fname" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-label">Last Name *</div>
                                    <div className="field-input">
                                        <input type="text" name="lname" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Address *</div>
                                    <div className="field-input">
                                        <input type="text" name="address" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-input">
                                        <input type="text" name="address" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Town / City *</div>
                                    <div className="field-input">
                                        <input type="text" name="town-city" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Contact Info *</div>
                                    <div className="field-input">
                                        <input type="text" name="email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-input">
                                        <input type="text" name="phone" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="create-acc">
                                        <div className="checkbox">
                                            <label>
                                        <input type="checkbox" name="ship-same-address"/>
                                        <span>Create an Account</span>
                                    </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="form shipping-info">
                        <div className="shop-page-title">
                            <div className="title">Shipping to a Different <span>Address</span><input type="checkbox"/></div>
                        </div>
                        <form method="post" action="">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="field-label">Country*</div>
                                    <div className="field-input">
                                        <input type="text" name="country" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-label">First Name*</div>
                                    <div className="field-input">
                                        <input type="text" name="fname" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field-label">Last Name *</div>
                                    <div className="field-input">
                                        <input type="text" name="lname" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Address *</div>
                                    <div className="field-input">
                                        <input type="text" name="address" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-input">
                                        <input type="text" name="address" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Town / City *</div>
                                    <div className="field-input">
                                        <input type="text" name="town-city" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="field-label">Other Notes</div>
                                    <div className="field-input">
                                        <textarea name="other-notes" placeholder="Special notes about your order..."></textarea>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="table">
                            <div className="shop-page-title">
                                <div className="title">Order <span>Summary</span></div>
                            </div>
                            <table className="cart-table">
                                <thead className="cart-header">
                                    <tr>
                                        <th className="product-column">Products</th>
                                        <th>&nbsp;</th>
                                        <th>Quantity</th>
                                        <th className="price">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2" className="product-column">
                                            <div className="column-box">
                                                <div className="prod-thumb">
                                                    <a href="#"><img src="images/shop/product-thumb-1.jpg" alt=""/></a>
                                                </div>
                                                <div className="product-title">
                                                    <h3>Power Remote</h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="qty">
                                            <input className="quantity-spinner" type="text" value="1" name="quantity"/>
                                        </td>
                                        <td className="price">$69.98</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="product-column">
                                            <div className="column-box">
                                                <div className="prod-thumb">
                                                    <a href="#"><img src="images/shop/product-thumb-2.jpg" alt=""/></a>
                                                </div>
                                                <div className="product-title">
                                                    <h3>USB Power Bank</h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="qty">
                                            <input className="quantity-spinner" type="text" value="2" name="quantity"/>
                                        </td>
                                        <td className="price">$29.99</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="cart-total">
                            <div className="shop-page-title">
                                <div className="title">Cart <span>Totals</span></div>
                            </div>
                            <ul className="cart-total-table">
                                <li className="clearfix">
                                    <span className="col col-title">Cart Subtotal</span>
                                    <span className="col">$146.00</span>
                                </li>
                                <li className="clearfix">
                                    <span className="col col-title">Shipping and Handling</span>
                                    <span className="col">$40.00</span>
                                </li>
                                <li className="clearfix">
                                    <span className="col col-title">Order Total</span>
                                    <span className="col">$146.00</span>
                                </li>
                            </ul>

                            <div className="payment-options">
                                <div className="option-block">
                                    <div className="checkbox">
                                        <label>
                                    <input name="pay-us" type="checkbox"/>
                                    <span>Direct Bank Transfer</span>
                                </label>
                                    </div>
                                    <div className="text">
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    </div>
                                </div>
                                <div className="option-block">
                                    <div className="radio-block">
                                        <div className="checkbox">
                                            <label>
                                        <input name="pay-us" type="checkbox"/>
                                        <span>Paypal <b>What is Paypal</b></span>
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="placeorder-button text-left">
                                    <button className="btn-one" type="submit">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}