import React from 'react'
import config from "@config/pages/home.json"

export default function Features() {
    const { features } = config
    return (
        <section className="section key-feature relative">
            <img
                className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
                src={features.images.shape.url}
                alt={features.images.shape.alt}
            />
            <div className="container">
                <div className="row justify-between text-center lg:text-start">
                    <div className="lg:col-5">
                        <h2>{features.title}</h2>
                    </div>
                    <div className="mt-6 lg:col-5 lg:mt-0">
                        <p>{features.description}</p>
                    </div>
                </div>
                <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
                    {features.list.map((item, i) => {
                        return (
                            <div key={i}
                                className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
                            >
                                <div>
                                    <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="icon mt-4">
                                    <img
                                        className="objec-contain"
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
