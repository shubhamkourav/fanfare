import { IServices } from 'context/Integration'
import React, { useMemo } from 'react'

export default function Single({ name, description, url, icon, details }: IServices) {
    const [activeTab, setActiveTab] = React.useState(0);

    const tabs = useMemo(() => {
        return Array.from(new Set(details.map(item => item.title)))
    }, [details])

    return (
        <section className="integration-single section pt-0">
            <div className="container">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        <div className="integration-single-container rounded-xl bg-white py-16 px-5 shadow-lg md:px-10 tab">
                            <div className="px-4 text-center">
                                <img
                                    className="mx-auto size-20"
                                    src={icon}
                                    alt={name}
                                    loading='lazy'
                                />
                                <h1 className="mt-6">{name}</h1>
                                <p className="mt-6">{description}</p>
                                <a target="_blank" className="btn btn-primary mt-8 px-10" href={url || '#'}>Integrate {name}</a>
                            </div>
                            <div className="my-12 border-y border-border py-3">
                                <ul className="tab-nav filter-list justify-center border-b-0" data-tab-nav>
                                    {
                                        tabs.map((tab, index) => (
                                            <li key={index} onClick={() => setActiveTab(index)}>
                                                <span
                                                    className={`filter-btn btn btn-sm ${index === activeTab ? 'filter-btn-active' : 'inline-block border border-[#A9A9A9] text-dark'}`}
                                                >
                                                    {tab}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="integrations-single-content px-4 tab-content">
                                <div className="tab-content-pane active">
                                    {details[activeTab].description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
