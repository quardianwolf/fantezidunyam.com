import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="slider-home2 container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <div className="text-slider-home2">
                        <p className="number-font uppercase number-year text-right delay2">2022</p>
                        <p className="number-font uppercase text-new relative text-right"><img src="/asset/img/%20slider-home2.png" className="img-responsive absolute delay1" alt="" />
                            <span className="delay2">Yeni</span>
                        </p>
                        <p className="menu-child-font uppercase text-collection text-left delay1_5">Koleksiyon <span className="des-font">+</span></p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 relative">
                    <div className="info-slider-home2 absolute">
                        <div className="flex">
                            <p className="number-font number-dot delay1_5">01<img src="/asset/img/line-slider-home2.jpg" className="img-responsive delay1_5 hidden-xs" alt="" /></p>
                        </div>
                        <h1 className="title-font capital title-slider-home2 delay1_5">Atesli geceler<br/>basit kiyafetler</h1>
                    </div>
                    

                    <a href="#"><img src="asset/img/img_slider_home2.jpg" className="img-responsive img-slider-main delay1_5" alt="" /></a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <div className="text-slider-home2">
                        <p className="number-font uppercase number-year text-right delay2">2022</p>
                        <p className="number-font uppercase text-new relative text-right"><img src="asset/img/%20slider-home2.png" className="img-responsive absolute delay1" alt="" />
                        <span className="delay2">Yeni</span>
                        </p>
                        <p className="menu-child-font uppercase text-collection text-left delay1_5">Koleksiyon <span className="des-font">+</span></p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 relative">

                    <div className="info-slider-home2 absolute">
                        <div className="flex">
                            <p className="number-font number-dot delay1_5">02<img src="asset/img/line-slider-home2.jpg" className="img-responsive delay1_5 hidden-xs" alt="" /></p>
                        </div>
                        
                        <h1 className="title-font capital title-slider-home2 delay1_5">Bu gece <br/>Yangin var</h1>
                    </div>

                    <a href="#"><img src="asset/img/img_slider_home2.jpg" className="img-responsive img-slider-main delay1_5" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero