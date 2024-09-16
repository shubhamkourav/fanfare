import React from 'react'
import data from '@config/pages/contact.json';
import config_data from '@config/config.json';

export default function Common() {
    const { common } = data;
    const { site } = config_data;


    return (
        <section className="page-hero pt-16 pb-6">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    <h1 className="mb-5 mt-8">{common.title}<br />{site.title} team</h1>
                </div>
            </div>
        </section>
    )
}
