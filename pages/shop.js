import React from 'react'

const Shop = () => {
  return (
    <main>
        <div class="banner margin_bottom_150">
            <div class="container">
                <h1 class="title-font title-banner">Shop</h1>
                <ul class="breadcrumb des-font">
                    <li><a href="Home1.html">Home</a></li>
                    <li class="active">Shop</li>
                </ul>
            </div>
        </div>
        <div class="container shop-page margin_bottom_150">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar-left">
                    <ul class="price margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 class="title-font title">Filter By Price</h1></li>
                        <li>
                            <div id="slider-3"></div>
                            <p class="range-p des-font margin_top_30">
                                Price: <input type="text" id="price"/>
                                <button class="uppercase menu-font right"><i class="ti-filter"></i> filter</button>
                            </p>
                        </li>
                    </ul>
                    <ul class="category margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 class="title-font title">Product Categories</h1></li>
                        <li><a href="#" class="des-font link-collection">Armchair DAR (0)</a></li>
                        <li><a href="#" class="des-font link-collection">Chair & Tables (18)</a></li>
                        <li><a href="#" class="des-font link-collection">Cleaning Tools (0)</a></li>
                        <li><a href="#" class="des-font link-collection">Coffeepots Teapots (0)</a></li>
                        <li><a href="#" class="des-font link-collection">DAR Armchair (0)</a></li>
                        <li>
                            <button class="des-font link-collection accordion">Deco (20)</button>
                            <ul class="panel">
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="des-font link-collection">Decorate & Lighting (18)</a></li>
                        <li><a href="#" class="des-font link-collection">Home Accessories (20)</a></li>
                        <li>
                            <button class="des-font link-collection accordion">Lighting (21)</button>
                            <ul class="panel">
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="des-font link-collection">Sphere Light (0)</a></li>
                        <li><a href="#" class="des-font link-collection">Teakettles (0)</a></li>
                        <li>
                            <button class="des-font link-collection accordion">Windsor chair (10)</button>
                            <ul class="panel">
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                                <li><a href="#" class="des-font link-collection">Embossed Backpack in Brown</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="size margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 class="title-font title">Any Size</h1></li>
                        <li><a href="#" class="des-font link-collection">S (3)</a></li>
                        <li><a href="#" class="des-font link-collection">M (2)</a></li>
                        <li><a href="#" class="des-font link-collection">L (3)</a></li>
                        <li><a href="#" class="des-font link-collection">XL (3)</a></li>
                    </ul>
                    <ul class="color margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 class="title-font title">Chose Color</h1></li>
                        <li><a href="#" class="des-font link-collection">Black (3)</a></li>
                        <li><a href="#" class="des-font link-collection">Orange (2)</a></li>
                        <li><a href="#" class="des-font link-collection">Pink (3)</a></li>
                        <li><a href="#" class="des-font link-collection">Red (2)</a></li>
                        <li><a href="#" class="des-font link-collection">White (2)</a></li>
                        <li><a href="#" class="des-font link-collection">Yellow (2)</a></li>
                    </ul>
                    <ul class="popular margin_bottom_70 clear-space-left space_right_10">
                        <li><h1 class="title-font title">Popular Tags</h1></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Art (3)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Bathroom (1)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Bowls (6)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Clocks (8)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Flowerpots (4)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Decor (8)</a></li>
                        <li class="left margin_right_10"><a href="#" class="des-font link-collection">Dining (14)</a></li>
                    </ul>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 content-shop">
                    <div class="row btn-function-shop">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50">
                            <span class="des-font showing hidden-xs">Showing 1–9 of 50 results</span>
                            <button class="active" id="btn-grid"><i class="ti-layout-grid3-alt"></i></button>
                            <button id="btn-list"><i class="ti-list"></i></button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50 text-right select-view">
                            <button><i class="ti-eye"></i></button>
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
                    <div class="row">
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_1.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>                      
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_2.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>     
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_3.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div> 
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_1.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>                       
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_2.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_3.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_4.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_5.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-sale title-font text-center">sale</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                        <div class="product col-lg-4 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
                            <div class="img-product relative">
                                <a href="/lib"><img src="asset/img/product_shop_3.jpg" class="img-responsive" alt=""/></a>
                                <figure class="absolute uppercase label-new title-font text-center">new</figure>
                                <div class="product-icon text-center absolute">
                                    <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default"><i class="ti-bag"></i></button>
                                    </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-info">
                            <div class="info-product text-center">
                                <h4 class="des-font capital title-product space_top_20"><a href="#">embossed backpack in brown</a></h4>
                                <p class="number-font price-product"><span class="price">$123.00</span></p>
                                <p class="des-font des-product">Tote bag from Mansur Gavriel in Saddle. Calf leather. Open compartment. Interior side pocket. Top 
                                handles. Detachable, adjustable shoulder strap. Goldtone hardware. Embossed logo detailing at exterior. 
                                Tonal patent coated interior.</p>
                            </div>
                            <div class="btn-product-list">
                                <form method="post" action="/cart/add" enctype="multipart/form-data" class="inline-block icon-addcart">
                                    <input type="hidden" name="id" value=""/>
                                    <button type="submit" name="add" class="enj-add-to-cart-btn btn-default des-font uppercase">add to cart</button>
                                </form>
                                    <a href="#" class="icon-heart inline-block"><i class="ti-heart"></i></a>
                                    <a href="#" class="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                    <i class="ti-more-alt"></i>
                                    </a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="pagination">
                                <li><a href="#" class="des-font border"><i class="ti-arrow-left"></i></a></li>
                                <li><a href="#" class="des-font active">1</a></li>
                                <li><a href="#" class="des-font">2</a></li>
                                <li><a href="#" class="des-font">3</a></li>
                                <li><a href="#" class="des-font">...</a></li>
                                <li><a href="#" class="des-font border"><i class="ti-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="newsletter-home3 space_bot_150 space_top_130 BG">
            <h1 class="title-font capital title-newsletter text-center">Get Our Latest Update In Your Email</h1>
            <p class="des-font des-newsletter space_bot_60 text-center">Subscribe now to get 15% off on any product</p>
            <form class="form-group des-font flex" method="post" target="_blank">
                        <input type="email" name="EMAIL" class="form-control" placeholder="Your email address..."/>
                        <button type="submit" class="menu-font uppercase">subscribe</button>
            </form>
        </div>
</main>

  )
}

export default Shop