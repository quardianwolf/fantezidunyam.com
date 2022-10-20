import React from 'react'

const Lib = () => {
    return (
        <div> 
            <main>
                <div className="banner margin_bottom_150">
                    <div className="container">
                        <h1 className="title-font title-banner banner-product-detail">Embossed backpack in brown</h1>
                        <ul className="breadcrumb des-font">
                            <li><a href="Home1.html">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Embossed backpack in brown</li>
                        </ul>
                    </div>
                </div>

                <div className="container product-detail margin_bottom_150">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin_bottom_50">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div className="slick-nav-product-detail-vertical">
                                        <div>
                                            <img src="asset/img/product-detail-nav-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div>
                                            <img src="asset/img/product-detail-nav-1.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div>
                                            <img src="asset/img/product-detail-nav-3.jpg" className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                    <div className="slick-product-detail-vertical margin_bottom_20">
                                        <div>
                                            <img src="asset/img/product-detail-1.jpg" className="img-responsive full-width" alt="" />
                                        </div>
                                        <div>
                                            <img src="asset/img/product-detail-2.jpg" className="img-responsive full-width" alt="" />
                                        </div>
                                        <div>
                                            <img src="asset/img/product-detail-3.jpg" className="img-responsive full-width" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 info-product-detail">
                            <h1 className="title-font title-product margin_bottom_30">Embossed backpack in brown</h1>
                            <p className="number-font price margin_bottom_40">$123.00</p>
                            <p className="product-preview margin_bottom_50">
                                <i className="ti-star"></i>
                                <i className="ti-star"></i>
                                <i className="ti-star"></i>
                                <i className="ti-star"></i>
                                <i className="ti-star"></i>
                                <span className="relative line-space">__</span>
                                <span className="des-font">(02) Reviews</span>
                            </p>
                            <div className="margin_bottom_30">
                                <select className="menu-font">
                                    <option className="uppercase">Please select a color</option>
                                    <option className="capital">Black</option>
                                    <option className="capital">red</option>
                                    <option className="capital">white</option>
                                </select>
                            </div>
                            <div className="flex margin_bottom_50 border-bot space_bot_50 btn-function">
                                <div className="input-number-group">
                                    <div className="relative input-number-custom">
                                        <div className="input-group-button absolute down-btn">
                                            <span className="input-number-decrement ti-angle-down"></span>
                                        </div>
                                        <input className="input-number menu-font" type="number" min="0" max="1000" value="1"/>
                                            <div className="input-group-button absolute up-btn">
                                                <span className="input-number-increment ti-angle-up"></span>
                                            </div>
                                    </div>
                                </div>
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                        <button type="submit" name="add" className="enj-add-to-cart-btn btn-default menu-font uppercase">add to cart</button>
                                </form>
                                <a href="#" className="icon-heart"><i className="ti-heart"></i></a>
                                <a href="#" className="engoj_btn_quickview icon-quickview" title="quickview">
                                    <i className="ti-more-alt"></i>
                                </a>
                            </div>
                            <div className="info-more">
                                <p className="des-font margin_bottom_30 margin_top_50"><span className="menu-font">SKU:</span> N/A</p>
                                <p className="margin_bottom_30">
                                    <span className="menu-font margin_right_10">Categories:</span>
                                    <a href="#" className="delay03 margin_right_10">Bag,</a>
                                    <a href="#" className="delay03 margin_right_10">Women,</a>
                                    <a href="#" className="delay03 margin_right_10">New Arrival</a>
                                </p>
                                <p className="margin_bottom_30">
                                    <span className="menu-font margin_right_30">Share:</span>
                                    <a href="#" className="delay03 margin_right_30"><i className="ti-facebook"></i></a>
                                    <a href="#" className="delay03 margin_right_30"><i className="ti-twitter-alt"></i></a>
                                    <a href="#" className="delay03 margin_right_30"><i className="ti-pinterest"></i></a>
                                    <a href="#" className="delay03 margin_right_30"><i className="ti-linkedin"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-content-detail container margin_bottom_150">
                    <div className="border-bot space_bot_100">
                        <ul className="nav nav-tabs btn-tab-product-detail margin_bottom_100">
                            <li className="active"><a data-toggle="tab" href="#home" className=" menu-font btn-tab relative">Description<figure className="line"></figure></a></li>
                            <li className="container_60"><a data-toggle="tab" href="#menu1" className=" menu-font btn-tab relative">Shipping & returns<figure className="line"></figure></a></li>
                            <li><a data-toggle="tab" href="#menu2" className=" menu-font btn-tab relative">Customer reviews (0)<figure className="line"></figure></a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                                <p className="des-font des-tab">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. Tonal patent coated
                                    interior. Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. Tonal patent
                                    coated interior.<br /><br /></p>
                                <ul className="space_left_20 des-font des-tab">
                                    <li>Leather</li>
                                    <li>Made in Italy</li>
                                </ul>
                                <h2 className="menu-font btn-tab">Features:</h2>
                                <ul className="space_left_20 des-font des-tab">
                                    <li>Compatible for indoor and outdoor use</li>
                                    <li>Wide polypropylene shell seat for unrivalled comfort</li>
                                    <li>Rust-resistant frame</li>
                                    <li>Durable UV and weather-resistant construction</li>
                                    <li>Shell seat features water draining recess</li>
                                    <li>Shell and base are stackable for transport</li>
                                    <li>Choice of monochrome finishes and colourways</li>
                                    <li>Designed by Nagi</li>
                                </ul>
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <p className="des-font des-tab">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top
                                    handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior.
                                    Tonal patent coated interior.<br /><br /></p>
                                <ul className="space_left_20 des-font des-tab">
                                    <li>Leather</li>
                                    <li>Made in Italy</li>
                                </ul>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <div className="row">
                                    <div className="review margin_bottom_50 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <h1 className="menu-font title-review">Reviews</h1>
                                        <p className="des-font content-review">There are no review yet.</p>
                                    </div>
                                    <div className="form-review col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <h1 className="menu-font title-form">Be the first to review “Embossed blackpack in brown” </h1>
                                        <p className="des-font des-review margin_bottom_50">Your email address will not be published. Required fields are marked *</p>
                                        <form>
                                            <input type="text" name="name" placeholder="First name*" className="margin_bottom_20 des-font" />
                                            <input type="email" name="EMAIL" placeholder="Email*" className="margin_bottom_20 des-font" />
                                            <textarea placeholder="Message*" className="margin_bottom_20 des-font"></textarea>
                                            <p className="menu-font margin_bottom_20 rating">Your rating
                                                <i className="ti-star"></i>
                                                <i className="ti-star"></i>
                                                <i className="ti-star"></i>
                                                <i className="ti-star"></i>
                                                <i className="ti-star"></i>
                                            </p>
                                            <button type="submit" className="menu-font uppercase">submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container margin_bottom_130 section-bestseller-home1">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title-font margin_bottom_10 title-bestseller">Related products</h1>
                            <p className="des-font margin_bottom_50 des-bestseller">I did not even know that there were any better conditions to escape to, but I was more than willing
                                to take my chances among people fashioned after.</p>
                            <div className="slick-bestseller">
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_1.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                        <div className="product-icon text-center absolute">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font price-product"><span className="price">$123.00</span></p>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_2.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                        <div className="product-icon absolute text-center">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font"><span className="price">$123.00</span></p>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_3.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                        <div className="product-icon absolute text-center">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font"><span className="price">$123.00</span></p>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_4.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                        <div className="product-icon absolute text-center">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font"><span className="price">$123.00</span></p>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_5.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                        <div className="product-icon absolute text-center">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font"><span className="price">$123.00</span></p>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="img-product relative">
                                        <a href="#"><img src="asset/img/product_1.jpg" className="img-responsive" alt="" /></a>
                                        <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                        <div className="product-icon absolute text-center">
                                            <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                                <input type="hidden" name="id" value="" />
                                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                            </form>
                                            <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                            <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                                <i className="ti-more-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-product text-center">
                                        <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                        <p className="number-font"><span className="price">$123.00</span></p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="newsletter-home3 space_bot_150 space_top_130 BG margin_bottom_120">
                    <h1 className="title-font capital title-newsletter text-center">Get Our Latest Update In Your Email</h1>
                    <p className="des-font des-newsletter space_bot_60 text-center">Subscribe now to get 15% off on any product</p>
                    <form className="form-group des-font flex" method="post" target="_blank">
                        <input type="email" name="EMAIL" className="form-control" placeholder="Your email address..." />
                        <button type="submit" className="menu-font uppercase">subscribe</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Lib