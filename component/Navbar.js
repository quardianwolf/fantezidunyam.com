import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className="pushmenu menu-home5">
      <div className="menu-push">
        <span className="close-left js-close"><i className="ti-close" /></span>
        <div className="clearfix" />
        <form role="search" method="get" id="searchform" className="searchform title-font" action="/search">
          <div>
            <label className="screen-reader-text" htmlFor="q" />
            <input type="text" placeholder="Search for products" defaultValue name="q" id="q" autoComplete="off" />
            <input type="hidden" name="type" defaultValue="product" />
            <button type="submit" id="searchsubmit"><i className="ti-search" /></button>
          </div>
        </form>
        <ul className="nav-home5 js-menubar clear-space menu-font">
          <li className="level1 active dropdown">
            <a href="/" className="uppercase">Home</a>
            <span className="icon-sub-menu" />
            <div className="menu-level1 js-open-menu">
              <ul className="level1">
                <li className="level2">
                  <a href="#" className="capital">home set 1</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="Home1.html" title>home page 1</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home2.html" title>home page 2</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home3.html" title>home page 3</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home4.html" title>home page 4</a></li>
                  </ul>
                </li>
                <li className="level2">
                  <a href="#" className="capital">home set 2</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="Home5.html" title>home page 5</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home6.html" title>home page 6</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home7.html" title>home page 7</a></li>
                    <li className="level3 capital menu-child-font"><a href="Home8.html" title>home page 8 comming soon</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li className="level1 active dropdown"><a href="#" className="uppercase">Shop</a>
            <span className="icon-sub-menu" />
            <div className="menu-level1 js-open-menu">
              <ul className="level1">
                <li className="level2">
                  <a href="#" className="capital">Shop page</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 menu-child-font"><a href="Shop_right_sidebar.html">shop right sidebar</a></li>
                    <li className="level3 menu-child-font"><a href="Shop_left_sidebar.html">shop left sidebar</a></li>
                    <li className="level3 menu-child-font"><a href="Shop_no_sidebar.html">shop full width</a></li>
                    <li className="level3 menu-child-font"><a href="#">shop page 4 - comming soon</a></li>
                  </ul>
                </li>
                <li className="level2">
                  <a href="#" className="capital">Single Product Type</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 menu-child-font"><a href="Product_detail_1.html">product detail 1</a></li>
                    <li className="level3 menu-child-font"><a href="Product_detail_2.html">product detail 2</a></li>
                    <li className="level3 menu-child-font"><a href="#">product detail 3 - Comming soon</a></li>
                    <li className="level3 menu-child-font"><a href="#">product detail 4 - Comming soon</a></li>
                  </ul>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
          </li>
          <li className="level1 active dropdown">
            <a href="#" className="uppercase">Blog</a>
            <span className="icon-sub-menu" />
            <div className="menu-level1 js-open-menu">
              <ul className="level1">
                <li className="level2">
                  <a href="#" className="capital">blog page</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="Blog_right_sidebar.html">blog right sidebar</a></li>
                    <li className="level3 capital menu-child-font"><a href="Blog_left_sidebar.html">blog left sidebar</a></li>
                    <li className="level3 capital menu-child-font"><a href="Blog_no_sidebar.html">blog full width</a></li>
                    <li className="level3 capital menu-child-font"><a href="#">blog page 4 - comming soon</a></li>
                  </ul>
                </li>
                <li className="level2">
                  <a href="#" className="capital">blog detail</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="Blog_detail_right_sidebar.html">blog detail right sidebar</a></li>
                    <li className="level3 capital menu-child-font"><a href="Blog_detail_left_sidebar.html">blog detail left sidebar</a></li>
                    <li className="level3 capital menu-child-font"><a href="Blog_detail_no_sidebar.html">blog detail full width</a></li>
                    <li className="level3 capital menu-child-font"><a href="#">blog detail 4 - comming soon</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li className="level1 active dropdown">
            <a href="#" className="uppercase">Pages</a>
            <span className="icon-sub-menu" />
            <div className="menu-level1 js-open-menu">
              <ul className="level1">
                <li className="level2">
                  <a href="#" className="capital">page set 1</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="About_page_1.html">about page 1</a></li>
                    <li className="level3 capital menu-child-font"><a href="About_page_2.html">about page 2</a></li>
                    <li className="level3 capital menu-child-font"><a href="FAQ.html">FAQs page</a></li>
                    <li className="level3 capital menu-child-font"><a href="404.html">404 page</a></li>
                  </ul>
                </li>
                <li className="level2">
                  <a href="#" className="capital">page set 2</a>
                  <ul className="menu-level-2 clear-space">
                    <li className="level3 capital menu-child-font"><a href="cart_page.html">cart page</a></li>
                    <li className="level3 capital menu-child-font"><a href="wishlist_page.html">wishlist page</a></li>
                    <li className="level3 capital menu-child-font"><a href="login_page.html">login/register page</a></li>
                    <li className="level3 capital menu-child-font"><a href="#">other page - comming soon</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li className="level1">
            <a href="Contact.html" className="uppercase">contact</a>
          </li>
          <li>
            <a href="#" className="inline-block uppercase"><i className="zoa-icon-user space_right_10" />login</a>
          </li>
        </ul>
      </div>
    </div>
    {/* end push menu*/}
    <header className="full-width fixed header-home2">
      <div className="container space_top_bot_55 delay03" id="menu-header">
        <div className="row flex">
          <div className="col-lg-1 col-md-2 col-sm-6 col-xs-5">
            <a href="/"><img src="asset/img/logo2.png" height="160px" width="320px" alt="" /></a>
          </div>
          <div className="col-lg-8 col-md-7 hidden-sm hidden-xs">
            <ul className="nav navbar-nav menu-font menu-main menu-home2">
              <li className="relative dropdown">
                <a href="/" className="link-menu delay03 uppercase">ANASAYFA</a>
                <figure className="line active_line absolute delay03" />
                <div className="dropdown-menu mega-menu-main absolute space_30 space_top_bot_50 text-left">
                  <div className="container_15">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 border-right">
                        <ul className="clear-space capital lv1">
                          <li className="margin_bottom_20 space_left_20 uppercase">Home Set 1</li>
                          <li className="menu-child-font"><a href="/">Home page 1</a></li>
                          <li className="menu-child-font"><a href="/">Home page 2</a></li>
                          <li className="menu-child-font"><a href="/">Home page 3</a></li>
                          <li className="menu-child-font"><a href="/">Home page 4</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul className="capital lv1 space_left_30">
                          <li className="margin_bottom_20 space_left_20 uppercase">Home set 2</li>
                          <li className="menu-child-font"><a href="/">Home page 5</a></li>
                          <li className="menu-child-font"><a href="/">Home page 6</a></li>
                          <li className="menu-child-font"><a href="/">Home page 7</a></li>
                          <li className="menu-child-font"><a href="/">Home page 8 - Comming soon</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative dropdown">
                <a href="/shop" className="link-menu delay03 uppercase">URUNLER</a>
                <figure className="line absolute delay03" />
                <div className="dropdown-menu mega-menu-main absolute space_30 space_top_bot_50 text-left mega-menu-shop">
                  <div className="container_15">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 border-right">
                        <ul className="clear-space capital lv1">
                          <li className="margin_bottom_20 space_left_20 uppercase">shop page</li>
                          <li className="menu-child-font"><a href="/shop">shop right sidebar</a></li>
                          <li className="menu-child-font"><a href="/shop">shop left sidebar</a></li>
                          <li className="menu-child-font"><a href="/shop">shop full width</a></li>
                          <li className="menu-child-font"><a href="/shop">shop page 4 - Comming soon</a></li>
                        </ul>
                      </div>
                      {/*  */}
                      <div className="col-lg-4 col-md-4">
                        <ul className="capital lv1 space_left_30">
                          <li className="margin_bottom_20 space_left_20 uppercase">product detail</li>
                          <li className="menu-child-font"><a href="/shop">product detail 1</a></li>
                          <li className="menu-child-font"><a href="/shop">product detail 2</a></li>
                          <li className="menu-child-font"><a href="/shop">product detail 3 - Comming soon</a></li>
                          <li className="menu-child-font"><a href="/shop">product detail 4 - Comming soon</a></li>
                        </ul>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="col-lg-4 col-md-4 banner-menu">
                        <div className="product">
                          <div className="img-product relative">
                            <a href="#" className="inline-block"><img src="asset/img/product1_home6.jpg" className="img-responsive" alt="" /></a>
                            <figure className="absolute uppercase label-new title-font text-center">new</figure>
                            <div className="product-icon absolute text-center">
                              <form method="post" action="/cart/add" encType="multipart/form-data" className="inline-block icon-addcart">
                                <input type="hidden" name="id" defaultValue />
                                <button type="submit" name="add" className="enj-add-to-cart-btn btn-default"><i className="ti-bag" /></button>
                              </form>
                              <a href="#" className="icon-heart inline-block"><i className="ti-heart" /></a>
                              <a href="#" className="engoj_btn_quickview icon-quickview inline-block" title="quickview">
                                <i className="ti-more-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative dropdown">
                <a href="#" className="link-menu delay03 uppercase">PAGES</a>
                <figure className="line absolute delay03" />
                <div className="dropdown-menu mega-menu-main absolute space_30 space_top_bot_50 text-left">
                  <div className="container_15">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 border-right">
                        <ul className="clear-space capital lv1">
                          <li className="margin_bottom_20 space_left_20 uppercase">page set 1</li>
                          <li className="menu-child-font"><a href="About_page_1.html">about page 1</a></li>
                          <li className="menu-child-font"><a href="About_page_2.html">about page 2</a></li>
                          <li className="menu-child-font"><a href="FAQ.html">FAQs page</a></li>
                          <li className="menu-child-font"><a href="404.html">404 page</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul className="capital lv1 space_left_30">
                          <li className="margin_bottom_20 space_left_20 uppercase">page set 2</li>
                          <li className="menu-child-font"><a href="cart_page.html">cart page</a></li>
                          <li className="menu-child-font"><a href="wishlist_page.html">wishlist page</a></li>
                          <li className="menu-child-font"><a href="login_page.html">login/register page</a></li>
                          <li className="menu-child-font"><a href="#">other page - comming soon</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative">
                <a href="/contact" className="link-menu delay03 uppercase">ILETISIM</a>
                <figure className="line absolute delay03" />
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-7 text-right icon-main">
            <a href="#" className="link-menu delay03 container_20 inline-block hidden-xs hidden-sm" id="btn-search"><i className="ti-search" /></a>
            <a href="#" className="link-menu delay03 inline-block hidden-md hidden-lg space_left_10 btn-push-menu">
              <svg width={26} height={16} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 66 41" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
                <g>
                  <line className="st0" x1="1.5" y1="1.5" x2="64.5" y2="1.5" />
                  <line className="st0" x1="1.5" y1="20.5" x2="64.5" y2="20.5" />
                  <line className="st0" x1="1.5" y1="39.5" x2="64.5" y2="39.5" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Navbar