import React from 'react'

type CommonProps = {
    title?: string;
}
export default function Common({title}:Readonly<CommonProps>) {
    return (
        <section className="page-hero py-16">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    <h1 className="mb-5 mt-8">{title}</h1>
                </div>
            </div>
        </section>
    )
}
