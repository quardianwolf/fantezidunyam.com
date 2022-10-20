import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <div className="banner margin_bottom_150">
          <div className="container">
            <h1 className="title-font title-banner">Contact</h1>
            <ul className="breadcrumb des-font">
              <li>
                <a href="Home1.html">Home</a>
              </li>
              <li className="active">Contact us</li>
            </ul>
          </div>
        </div>
        <div className="content-contact margin_bottom_150 container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 local">
              <h1 className="title-local title-font margin_bottom_30">
                Find us here
              </h1>
              <div className="address">
                <i className="ti-location-pin"></i>
                <span className="menu-font bold capital">address:</span>
                <p className="des-font text">
                  1234 Heaven Stress, Beverly hill, Melbourne, USA.
                </p>
              </div>
              <div className="email">
                <i className="ti-email"></i>
                <span className="menu-font bold capital">email:</span>
                <p className="des-font text">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b5f6dadbc1d4d6c1f5d0cdd4d8c5d9d09bd6dad8"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="phone">
                <i className="ti-headphone"></i>
                <span className="menu-font bold capital">number phone:</span>
                <p className="des-font text">(008) 123 456 789</p>
                <p className="des-font text">(008) 987 654 321</p>
              </div>
              <p className="des-local des-font margin_top_50">
                I did not even know that there were any better conditions to
                escape to, but I was more than willing to take my chances among
                people fashioned after. I did not even know that there were any
                better conditions to escape to, but I was more than willing to
                take my chances among people fashioned after.
              </p>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 subscribe">
              <h1 className="title-font title-sub margin_bottom_30">Contact us</h1>
              <form className="form-group des-font" method="post" target="_blank">
                <input
                  type="text"
                  name="NAME"
                  className="form-control margin_bottom_30"
                  placeholder="Your name (required)"
                />
                <input
                  type="email"
                  name="EMAIL"
                  className="form-control margin_bottom_30"
                  placeholder="Your email (required)"
                />
                <input
                  type="text"
                  name="SUBJECT"
                  className="form-control margin_bottom_30"
                  placeholder="Subject"
                />
                <input
                  type="text"
                  name="NAME"
                  className="form-control margin_bottom_30"
                  placeholder="Your message"
                />
                <button type="submit" className="full-width uppercase menu-font">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative over-hidden container map-contact">
          <div id="map"></div>
          <img
            src="asset/img/img-map.jpg"
            className="img-responsive absolute hidden-xs hidden-sm"
            alt=""
          />
        </div>
        <div className="container newsletter-home3 space_top_bot_150 no-border">
          <h1 className="title-font capital title-newsletter text-center">
            Get Our Latest Update In Your Email
          </h1>
          <p className="des-font des-newsletter space_bot_60 text-center">
            Subscribe now to get 15% off on any product
          </p>
          <form className="form-group des-font flex" method="post" target="_blank">
            <input
              type="email"
              name="EMAIL"
              className="form-control"
              placeholder="Your email address..."
            />
            <button type="submit" className="menu-font uppercase">
              subscribe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
