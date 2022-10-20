import React from 'react'

const Shop = () => {
  return (
    <main>
        <div className="banner margin_bottom_150">
            <div className="container">
                <h1 className="title-font title-banner">Shop</h1>
                <ul className="breadcrumb des-font">
                    <li><a href="Home1.html">Home</a></li>
                    <li className="active">Shop</li>
                </ul>
            </div>
        </div>
        <div className="container shop-page margin_bottom_150">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar-left">
                    <ul className="price margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 className="title-font title">Filter By Price</h1></li>
                        <li>
                            <div id="slider-3"></div>
                            <p className="range-p des-font margin_top_30">
                                Price: <input type="text" id="price"/>
                                <button className="uppercase menu-font right"><i className="ti-filter"></i> filter</button>
                            </p>
                        </li>
                    </ul>
                    <ul className="category margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 className="title-font title">Product Categories</h1></li>
                        <li><a href="#" className="des-font link-collection">Armchair DAR (0)</a></li>
                        <li><a href="#" className="des-font link-collection">Chair & Tables (18)</a></li>
                        <li><a href="#" className="des-font link-collection">Cleaning Tools (0)</a></li>
                        <li><a href="#" className="des-font link-collection">Coffeepots Teapots (0)</a></li>
                        <li><a href="#" className="des-font link-collection">DAR Armchair (0)</a></li>
                        <li>
                            <button className="des-font link-collection accordion">Deco (20)</button>
                            <ul className="panel">
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="des-font link-collection">Decorate & Lighting (18)</a></li>
                        <li><a href="#" className="des-font link-collection">Home Accessories (20)</a></li>
                        <li>
                            <button className="des-font link-collection accordion">Lighting (21)</button>
                            <ul className="panel">
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="des-font link-collection">Sphere Light (0)</a></li>
                        <li><a href="#" className="des-font link-collection">Teakettles (0)</a></li>
                        <li>
                            <button className="des-font link-collection accordion">Windsor chair (10)</button>
                            <ul className="panel">
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" className="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="size margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 className="title-font title">Any Size</h1></li>
                        <li><a href="#" className="des-font link-collection">S (3)</a></li>
                        <li><a href="#" className="des-font link-collection">M (2)</a></li>
                        <li><a href="#" className="des-font link-collection">L (3)</a></li>
                        <li><a href="#" className="des-font link-collection">XL (3)</a></li>
                    </ul>
                    <ul className="color margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 className="title-font title">Chose Color</h1></li>
                        <li><a href="#" className="des-font link-collection">Black (3)</a></li>
                        <li><a href="#" className="des-font link-collection">Orange (2)</a></li>
                        <li><a href="#" className="des-font link-collection">Pink (3)</a></li>
                        <li><a href="#" className="des-font link-collection">Red (2)</a></li>
                        <li><a href="#" className="des-font link-collection">White (2)</a></li>
                        <li><a href="#" className="des-font link-collection">Yellow (2)</a></li>
                    </ul>
                    <ul className="popular margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 className="title-font title">Popular Tags</h1></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Art (3)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Bathroom (1)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Bowls (6)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Clocks (8)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Flowerpots (4)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Decor (8)</a></li>
                        <li className="left margin_right_10"><a href="#" className="des-font link-collection">Dining (14)</a></li>
                    </ul>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 content-shop">
                    <div className="row btn-function-shop">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50">
                            <span className="des-font showing hidden-xs">Showing 1–9 of 50 results</span>
                            <button className="active" id="btn-grid"><i className="ti-layout-grid3-alt"></i></button>
                            <button id="btn-list"><i className="ti-list"></i></button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50 text-right select-view">
                            <button><i className="ti-eye"></i></button>
                            <select id="select-show">
                                <option>Sort by popularity</option>
                                <option>Featured</option>
                                <option>Best selling</option>
                                <option>Alphabetically, A - Z</option>
                                <option>Price, hight to low</option>
                                <option>Price, low to hight</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_1.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>                      
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_2.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>     
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_3.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div> 
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_1.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>                       
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_2.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_3.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_4.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_5.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div className="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_3.jpg" className="img-responsive" alt=""/></a>
                                <figure className="absolute uppercase label-new title-font text-center">new</figure>
                                <div className="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag"></i></button>
                                    </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                            <div className="info-product text-center">
                                <h4 className="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p className="number-font price-product"><span className="price">$123.00</span></p>
                                <p className="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div className="btn-product-list">
                                <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" className="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" className="icon-heart inline-block"><i className="ti-heart"></i></a>
                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i className="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination">
                                <li><a href="#" className="des-font border"><i className="ti-arrow-left"></i></a></li>
                                <li><a href="#" className="des-font active">1</a></li>
                                <li><a href="#" className="des-font">2</a></li>
                                <li><a href="#" className="des-font">3</a></li>
                                <li><a href="#" className="des-font">...</a></li>
                                <li><a href="#" className="des-font border"><i className="ti-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="newsletter-home3 space_bot_150 space_top_130 BG">
            <h1 className="title-font capital title-newsletter text-center">Get Our Latest Update In Your Email</h1>
            <p className="des-font des-newsletter space_bot_60 text-center">Subscribe now to get 15% off on any product</p>
            <form className="form-group des-font flex" method="post" target="_blank">
                        <input type="email" name="EMAIL" className="form-control" placeholder="Your email address..."/>
                        <button type="submit" className="menu-font uppercase">subscribe</button>
            </form>
        </div>
</main>

  )
}

export default Shop