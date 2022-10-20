import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <div class="banner margin_bottom_150">
          <div class="container">
            <h1 class="title-font title-banner">Contact</h1>
            <ul class="breadcrumb des-font">
              <li>
                <a href="Home1.html">Home</a>
              </li>
              <li class="active">Contact us</li>
            </ul>
          </div>
        </div>
        <div class="content-contact margin_bottom_150 container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 local">
              <h1 class="title-local title-font margin_bottom_30">
                Find us here
              </h1>
              <div class="address">
                <i class="ti-location-pin"></i>
                <span class="menu-font bold capital">address:</span>
                <p class="des-font text">
                  1234 Heaven Stress, Beverly hill, Melbourne, USA.
                </p>
              </div>
              <div class="email">
                <i class="ti-email"></i>
                <span class="menu-font bold capital">email:</span>
                <p class="des-font text">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="b5f6dadbc1d4d6c1f5d0cdd4d8c5d9d09bd6dad8"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div class="phone">
                <i class="ti-headphone"></i>
                <span class="menu-font bold capital">number phone:</span>
                <p class="des-font text">(008) 123 456 789</p>
                <p class="des-font text">(008) 987 654 321</p>
              </div>
              <p class="des-local des-font margin_top_50">
                I did not even know that there were any better conditions to
                escape to, but I was more than willing to take my chances among
                people fashioned after. I did not even know that there were any
                better conditions to escape to, but I was more than willing to
                take my chances among people fashioned after.
              </p>
            </div>
            <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 subscribe">
              <h1 class="title-font title-sub margin_bottom_30">Contact us</h1>
              <form class="form-group des-font" method="post" target="_blank">
                <input
                  type="text"
                  name="NAME"
                  class="form-control margin_bottom_30"
                  placeholder="Your name (required)"
                />
                <input
                  type="email"
                  name="EMAIL"
                  class="form-control margin_bottom_30"
                  placeholder="Your email (required)"
                />
                <input
                  type="text"
                  name="SUBJECT"
                  class="form-control margin_bottom_30"
                  placeholder="Subject"
                />
                <input
                  type="text"
                  name="NAME"
                  class="form-control margin_bottom_30"
                  placeholder="Your message"
                />
                <button type="submit" class="full-width uppercase menu-font">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="relative over-hidden container map-contact">
          <div id="map"></div>
          <img
            src="asset/img/img-map.jpg"
            class="img-responsive absolute hidden-xs hidden-sm"
            alt=""
          />
        </div>
        <div class="container newsletter-home3 space_top_bot_150 no-border">
          <h1 class="title-font capital title-newsletter text-center">
            Get Our Latest Update In Your Email
          </h1>
          <p class="des-font des-newsletter space_bot_60 text-center">
            Subscribe now to get 15% off on any product
          </p>
          <form class="form-group des-font flex" method="post" target="_blank">
            <input
              type="email"
              name="EMAIL"
              class="form-control"
              placeholder="Your email address..."
            />
            <button type="submit" class="menu-font uppercase">
              subscribe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
