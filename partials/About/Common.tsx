"use client"

import React from 'react'
import about from '@config/pages/about.json';
import Counts from './Counts';
export default function Common() {
    const { common } = about
    return (
        <section className="page-hero py-16">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    <h1 className="mb-5 mt-8">{common.title}</h1>
                    <p>{common.description}</p>
                    <div className="mt-11 justify-center sm:flex">
                        <a className="btn btn-primary m-3 block sm:inline-block" href={common.primary_button.url}
                        >{common.primary_button.text}</a>
                        <a
                            className="btn btn-outline-primary m-3 block min-w-[160px] sm:inline-block"
                            href={common.secondary_button.url}
                        >{common.secondary_button.text}</a>
                    </div>
                </div>
                <div className="counter mt-16">
                    <div className="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10">
                        {common.records.map((record, i) => {
                            return (
                                <Counts  key={i} value={record.value} text={record.text} class={record.class} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
