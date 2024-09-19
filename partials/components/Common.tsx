import React from 'react'

type CommonProps = {
    title?: string;
    description?: string;
    site_name?: string;
}
export default function Common({ title, description, site_name }: CommonProps) {
    return (
        <section className="page-hero pt-16 pb-10">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    {title ? <h1 className="mb-5 mt-8">{title} {site_name}</h1> : ""}
                    {description ? <p>{description}</p> : ''}
                </div>
            </div>
        </section>
    )
}
