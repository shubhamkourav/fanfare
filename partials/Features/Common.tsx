import React from 'react'
import features from '@config/pages/features.json'
export default function Common() {
    const { common } = features;
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="lg:col-6 lg:order-2">
                        <img
                            className="mx-auto"
                            src={common.banner.src}
                            width={common.banner.width}
                            height={common.banner.height}
                            alt={common.banner.alt}
                        />
                    </div>
                    <div className="mt-10 lg:col-6 lg:order-1 lg:mt-0">
                        <h1>{common.title}</h1>
                        <p className="mt-6">{common.description}</p>
                        <a className="btn btn-primary mt-6" href={common.button.link}>{common.button.text}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
