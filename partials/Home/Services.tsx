
"use client"
import React, { useState } from 'react'
import config from "@config/pages/home.json"

export default function Services() {
    const [activeTab, setActiveTab] = useState<number>(0)
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
            </div>
        </section>
    )
}
