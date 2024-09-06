import React from 'react'
import features from '@config/pages/features.json'
import Link from 'next/link'
export default function PaymentFeature() {
    const { collaboration: { payment_feature } } = features
    return (
        <div className="row gx-5 mt-16 items-center">
            <div className="lg:col-6 lg:order-2">
                <div className="relative">
                    <img
                        className="w-full object-contain"
                        src={payment_feature.device_payment.image}
                    />
                </div>
            </div>
            <div className="mt-6 lg:col-6 lg:order-1 lg:mt-0">
                <div className="">
                    <h2 className="lg:text-4xl">{payment_feature.device_payment.title}</h2>
                    <p className="mt-4">{payment_feature.device_payment.description}</p>
                    <ul className="mt-6 text-dark lg:-ml-4">
                        {
                            payment_feature.features.map((feature, index) => {
                                return <li key={index} className="mb-2 flex items-center rounded px-4">
                                    <img
                                        className="mr-3"
                                        src="/images/icons/checkmark-circle.svg"
                                        alt=""
                                    />
                                    {feature}
                                </li>
                            })
                        }
                    </ul>
                    <div className="mt-11 flex flex-wrap">
                        <Link className="btn btn-primary m-3 block w-full sm:w-auto" href={payment_feature.primary_btn.link}>{payment_feature.primary_btn.text}</Link>
                        <Link className="btn btn-outline-primary m-3 block w-full min-w-[160px] sm:w-auto" href={payment_feature.secondary_btn.link}>{payment_feature.secondary_btn.text}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
