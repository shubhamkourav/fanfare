import React from 'react'
import features from '@config/pages/features.json'
import Link from 'next/link';
import PaymentFeature from './PaymentFeature';
export default function Collaboration() {
    const { collaboration } = features;
    return (
        <section className="section features pb-0">
            <div className="container">
                <div className="row">
                    <div className="mx-auto text-center lg:col-7">
                        <h2>{collaboration.title}</h2>
                        <p className="mt-4">{collaboration.description}</p>
                    </div>
                </div>
                <div className="mt-14 rounded-xl bg-white px-6 py-10 shadow-lg lg:px-12 lg:py-16">
                    <div className="row">
                        <div className="lg:col-6">
                            <div className="h-full rounded-lg bg-[#FAFAFA] p-6 lg:p-8">
                                <h3 className="h5 mb-8 font-primary">Project Management</h3>
                                <div className="row">
                                    {collaboration.managers.map((user, index) => {
                                        return <div key={index} className="col-6 mb-6">
                                            <div key={index} className="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                                            >
                                                <img src={user.image} alt={`user-${index + 1}`} />
                                                <img className='mt-2.5' src="/images/illustrations/user-profile.svg" alt={`user-${index + 1}`} />
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <Link
                                    className="btn btn-primary block w-full font-bold capitalize"
                                    href={collaboration.feature_btn.link}
                                >{collaboration.feature_btn.text}</Link>
                            </div>
                        </div>
                        <div className="mt-10 lg:col-6 lg:mt-0">
                            {collaboration.features.map((feature, index) => {
                                return <div key={index} className="mb-6 flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8">
                                    <div className="relative inline-flex h-24 w-24 items-center justify-center p-3">
                                        <img className='scale-75' src={feature.icon} alt={feature.title} />
                                        <svg
                                            className="absolute left-0 top-0 h-full w-full"
                                            width="90"
                                            height="90"
                                            viewBox="0 0 90 90"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.1"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                                                fill="#FFCC99"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="h5 font-primary">{feature.title}</h3>
                                        <p className="mt-4">{feature.description}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <PaymentFeature />
            </div>
        </section>
    )
}
