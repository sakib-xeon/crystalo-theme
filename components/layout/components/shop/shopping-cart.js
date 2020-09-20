export default function ShoppingCart(){
    return(
        <section className="cart-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="table-outer">
                        <table className="cart-table">
                            <thead className="cart-header">
                                <tr>
                                    <th className="prod-column">Products</th>
                                    <th>&nbsp;</th>
                                    <th>Quantity</th>
                                    <th className="availability">Availability</th>
                                    <th className="price">Price</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="2" className="prod-column">
                                        <div className="column-box">
                                            <div className="prod-thumb">
                                                <a href="#"><img src="images/shop/product-thumb-1.jpg" alt=""/></a>
                                            </div>
                                            <div className="title">
                                                <h3 className="prod-title">Power Remote</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="qty">
                                        <input className="quantity-spinner" type="text" value="1" name="quantity"/>
                                    </td>
                                    <td className="unit-price">
                                        <div className="available-info">
                                            <span className="icon fa fa-check thm-bg-clr"></span>Item(s)<br/>Avilable Now
                                        </div>
                                    </td>
                                    <td className="price">$34.99</td>
                                    <td className="sub-total">$34.99</td>
                                    <td>
                                        <div className="remove">
                                            <div className="checkbox">
                                                <label>
                                            <input name="remove" type="checkbox"/>
                                            <span>Remove</span>
                                        </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" className="prod-column">
                                        <div className="column-box">
                                            <div className="prod-thumb">
                                                <a href="#"><img src="images/shop/product-thumb-2.jpg" alt=""/></a>
                                            </div>
                                            <div className="title">
                                                <h3 className="prod-title">USB Power Bank</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="qty">
                                        <input className="quantity-spinner" type="text" value="2" name="quantity"/>
                                    </td>
                                    <td className="unit-price">
                                        <div className="available-info">
                                            <span className="icon fa fa-check thm-bg-clr"></span>Item(s)<br/>Avilable Now
                                        </div>
                                    </td>
                                    <td className="price">$29.99</td>
                                    <td className="sub-total">$29.99</td>
                                    <td>
                                        <div className="remove">
                                            <div className="checkbox">
                                                <label>
                                            <input name="remove" type="checkbox"/>
                                            <span>Remove</span>
                                        </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row cart-middle">
                <div className="col-xl-6 col-lg-9 col-md-8 col-sm-12">
                    <div className="apply-coupon">
                        <input type="text" name="coupon-code" value="" placeholder="Enter Coupon Code..."/>
                        <div className="apply-coupon-button">
                            <button className="btn-one" type="button">Apply Coupon</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-3 col-md-4 col-sm-12">
                    <div className="update-cart pull-right">
                        <button className="btn-one" type="button">Update Cart</button>
                    </div>
                </div>
            </div>

            <div className="row cart-bottom">
                <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                    <div className="calculate-shipping">
                        <div className="shop-page-title">
                            <div className="title">Shipping <span>Calculate</span></div>
                        </div>
                        <select className="selectmenu">
                    <option selected="selected">United Kingdom (UK)</option>
                    <option>United Kingdom (UK)</option>
                    <option>United State (USA)</option>
                    <option>France</option>
                </select>
                        <div className="row">
                            <div className="col-lg-6">
                                <input className="mar-bottom" type="text" placeholder="State / Country" required/>
                            </div>
                            <div className="col-lg-6">
                                <input className="zip-code" type="text" placeholder="Zip Code" required/>
                            </div>
                        </div>
                        <button className="btn-one" type="submit">update Totals</button>
                    </div>
                </div>
                {/* <!--Start cart total --> */}
                <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
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
                        <button className="btn-one checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
                {/* <!--End cart total --> */}
            </div>
        </div>
    </section>
    )
}