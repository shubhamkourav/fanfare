import React from 'react'
import info from '@config/pages/services/career/info.json';
import data from '@config/config.json';

export default function Common() {
    return (
        <section className="page-hero pt-16 pb-14">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    <h1 className="mb-5 mt-8">{info.title} {data.site.title}</h1>
                    <p>{info.description} </p>
                </div>
                <div className="mt-14 flex justify-center">
                    <div className="relative">
                        <img src={info.banner.primary.image} alt={info.banner.primary.alt} />
                        <img
                            loading='lazy'
                            className="absolute -left-[8%] bottom-[12%] z-[-1] h-20 w-20 -rotate-90 lg:-left-8 lg:bottom-4 lg:h-[150px] lg:w-[150px]"
                            src="/images/shape.svg"
                            alt={data.site.title}
                        />
                    </div>
                    <div className="relative -ml-[10%] mt-[10%] lg:-ml-[6%] lg:mt-[6%]">
                        <img src={info.banner.secondary.image} alt={info.banner.secondary.alt} />
                        <img
                            loading='lazy'
                            className="absolute -right-4 -bottom-4 z-[-1] h-16 w-16 -rotate-90"
                            src="/images/shape.svg"
                            alt={data.site.title}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
