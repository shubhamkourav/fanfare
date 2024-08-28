import React from 'react'
import config from "@config/pages/home.json"
import Link from 'next/link'
export default function Banner() {
    const { banner } = config
    return (
        <section className="section banner relative">
            <div className="container">
                <div className="row items-center">
                    <div className="lg:col-6">
                        <h1 className="banner-title">{banner.title}</h1>
                        <p className="mt-6">{banner.description}</p>
                        <Link target='_blank' className="btn btn-white mt-8" href={banner.button_url}>{banner.button_text}</Link>
                    </div>
                    <div className="lg:col-6">
                        <img
                            className="w-full object-contain"
                            src={banner.images.inner.url}
                            width="603"
                            height="396"
                            alt={banner.images.inner.alt}
                        />
                    </div>
                </div>
            </div>
            <img
                className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
                src={banner.images.outer.url}
                alt={banner.images.outer.alt}
            />
        </section>
    )
}
