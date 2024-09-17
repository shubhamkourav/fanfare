// create auth next layout
import Slider from '@partials/Auth/Slider';
import React from 'react'

export default function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="">
            <div className="container max-w-full">
                <div className="row">
                    {children}
                    <Slider />
                </div>
            </div>
        </section>
    )
}
