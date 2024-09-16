import React from 'react'
import howItWork from '@config/pages/how-it-works.json'


export default function Common() {
    const { common } = howItWork
    return (
        <section className="page-hero pb-14 pt-16">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[883px] text-center">
                    <h1 className="mb-5 mt-8">{common.title}</h1>
                    <p>{common.description}</p>
                </div>
                <div className="row mt-14">
                    {common.steps.map((step, index) => {
                        const isLastStep = common.steps.length === index + 1;

                        return <div key={index} className="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
                            <div className={`${isLastStep ? '' : 'relative'} mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg ${isLastStep ? '' : "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2  after:border-dashed after:border-primary/50 md:after:block"}`}>
                                <img src={step.image} alt={step.title} />
                            </div>
                            <h2 className="h5">{step.title}</h2>
                            <p className="mt-4">{step.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
