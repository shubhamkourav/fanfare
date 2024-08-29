
"use client"
import React, { useState } from 'react'
import config from "@config/pages/home.json"

export default function Services() {
    const [activeTab, setActiveTab] = useState<number>(0)
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

    const handlePlayButtonClick = () => {
        setIsVideoPlaying(true);
    };

    const { services } = config
    return (
        <section className="section services">
            <div className="container">
                <div className="tab row gx-5 items-center">
                    <div className="lg:col-7 lg:order-2">
                        <div className="tab-content">
                            {services.first_service.list.map((service, i) => {
                                return (
                                    <div key={i} className={`tab-content-panel ${i === activeTab ? 'active' : ''}`} >
                                        <img
                                            className="w-full object-contain"
                                            src={service.image}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                        <div className="text-container">
                            <h2 className="lg:text-4xl">
                                {services.first_service.title}
                            </h2>
                            <p className="mt-4">
                                {services.first_service.description}
                            </p>
                            <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                                {services.first_service.list.map((service, i) => {
                                    return (
                                        <li onClick={() => setActiveTab(i)} key={i} className={`tab-nav-item ${i === activeTab ? 'active' : ''}`}>
                                            <img className="mr-3" src={service.icon} alt={service.text} />
                                            {service.text}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 mt-12 items-center lg:mt-0">
                    <div className="lg:col-7">
                        <div className="relative">
                            <img className="w-full object-contain" src={services.second_service.image.url} alt={services.second_service.image.alt} />
                            <img
                                className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                                src={services.second_service.icon.url}
                                alt={services.second_service.icon.alt}
                            />
                        </div>
                    </div>
                    <div className="mt-6 lg:col-5 lg:mt-0">
                        <div className="text-container">
                            <h2 className="lg:text-4xl">{services.second_service.title}</h2>
                            <p className="mt-4">{services.second_service.description}</p>
                            <ul className="mt-6 text-dark lg:-ml-4">
                                {services.second_service.list.map((item, i) => {
                                    return (
                                        <li key={i} className="mb-2 flex items-center rounded px-4">
                                            <img
                                                className="mr-3"
                                                src={item.icon}
                                                alt=""
                                            />
                                            {item.text}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 mt-12 items-center lg:mt-0">
                    <div className="lg:col-7 lg:order-2">
                        <div className="video pb-5 pr-9">
                            <div className="video-thumbnail overflow-hidden rounded-2xl">
                                <img
                                    className="w-full object-contain"
                                    src={services.third_service.thumbnail.url}
                                    alt={services.third_service.thumbnail.alt}
                                />
                                <button className="video-play-btn" onClick={handlePlayButtonClick}>
                                    <img src={services.third_service.icon.url} alt={services.third_service.icon.alt} />
                                </button>
                            </div>
                            <div
                                className={`video-player absolute left-0 top-0 z-10 ${!isVideoPlaying ? "hidden" : ""} h-full w-full`}
                            >
                                <iframe
                                    className="h-full w-full"
                                    {...services.third_service.video}
                                    src={services.third_service.video.url}
                                ></iframe>
                            </div>
                            <img
                                className="intro-shape absolute bottom-0 right-0 -z-[1]"
                                src="images/shape.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                        <div className="text-container">
                            <h2 className="lg:text-4xl">{services.third_service.title}</h2>
                            <p className="mt-4">{services.third_service.description}</p>
                            <button className="btn btn-white mt-6">{services.third_service.button.text}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
