"use client";

import React from 'react'
import config from "@config/pages/auth.json"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
export default function Slider() {
    const { slides } = config
    return (
        <div className="auth-banner bg-gradient flex flex-col items-center justify-center lg:col-6">
            <img
                className="absolute top-0 left-0 h-full w-full"
                src="/images/login-banner-bg.svg"
                alt=""
            />
            <div className="w-full text-center">
                <h2 className="h3 text-white">{slides.title}</h2>
                <Swiper

                    slidesPerView={1}
                    pagination={{
                        type: 'bullets',
                        clickable: true,
                    }}

                    modules={[Pagination]}
                    className="swiper auth-banner-carousel"
                    wrapperClass='swiper-wrapper'
                >

                    {slides.images.map((image, i) => {
                        return (
                            <SwiperSlide key={i} className='swiper-slide'>
                                <img
                                    width="667"
                                    height="557"
                                    className="mx-auto"
                                    src={image}
                                    alt=""
                                />
                            </SwiperSlide>
                        )

                    })}
                </Swiper>
                {/* <div className="swiper auth-banner-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="images/login-carousel-img-1.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="images/login-carousel-img-1.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="images/login-carousel-img-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pagination"></div>
          </div> */}
            </div>
        </div>
    )
}
