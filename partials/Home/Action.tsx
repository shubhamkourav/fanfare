import React from 'react'
import config from "@config/pages/home.json"
import Link from 'next/link'

export default function Action() {
    const { action } = config
    return (
        <section className="px-5 py-20 xl:py-[120px]">
            <div className="container">
                <div
                    className="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16"
                >
                    <div className="lg:col-11">
                        <div className="row">
                            <div className="lg:col-7">
                                <h2 className="h1 text-white">{action.title}</h2>
                                <Link className="btn btn-white mt-8" target='_blank' href={action.button_url}>{action.button_text}</Link>
                            </div>
                            <div className="mt-8 lg:col-5 lg:mt-0">
                                <p className="text-white">
                                    {action.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
