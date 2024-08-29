"use client"

import React from 'react'
import config from "@config/pages/home.json"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

export default function Reviews() {
    const { reviews } = config
    return (
        <section className="reviews">
            <div className="container">
                <div className="row justify-between">
                    <div className="lg:col-6">
                        <h2>{reviews.title}</h2>
                    </div>
                    <div className="lg:col-4">
                        <p>{reviews.description}</p>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-12">

                        <Swiper

                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                type: 'bullets',
                                clickable: true,
                            }}

                            modules={[Pagination]}
                            className="swiper reviews-carousel"
                            wrapperClass='swiper-wrapper'
                        >
                            {
                                reviews.list.map((review, i) => {
                                    return (
                                        <SwiperSlide key={i} className='swiper-slide'>
                                            <div className="review">
                                                <div className="review-author-avatar bg-gradient">
                                                    <img src={review.image} alt={review.designation} />
                                                </div>
                                                <h4 className="mb-2">{review.name}</h4>
                                                <p className="mb-4 text-[#666]">{review.designation}</p>
                                                <p>
                                                    {review.text}
                                                </p>
                                                <div
                                                    className="review-rating mt-6 flex items-center justify-center space-x-2.5"
                                                >
                                                    {Array.from(Array(5)).map((_, i) => {
                                                        if (Number(i + 1) <= review.star) {
                                                            return (
                                                                <img key={i} src="images/icons/star.svg" alt="" />
                                                            )
                                                        } else {
                                                            return (
                                                                <img key={i} src="images/icons/star-white.svg" alt="" />
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}
