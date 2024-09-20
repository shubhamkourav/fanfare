import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react'

export type Plan = {
    id: string;
    name: string;
    price: number;
    currency: string;
    description: string;
    icon: string;
    targetAudience: string;
    features: string[];
}
export default function Plan({ plans }: { plans: Plan[] }) {
    return (
        <section className="section mt-12 pt-0">
            <div className="container">
                <div className="row lg:px-10">
                    {plans.map((plan: Plan, index) => {
                        return <div key={index} className="group mt-8 md:col-6 lg:col-4 lg:mt-0 transition duration-500 ease-out hover:ease-in hover:-translate-y-12">
                            <div className="rounded-xl group-hover:border group-hover:border-primary bg-white px-8 py-10 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="h3">{plan.name}</h2>
                                        <p className="mt-3 text-2xl text-dark">{getSymbolFromCurrency(plan.currency)} {plan.price} {plan.currency}</p>
                                    </div>
                                    <span className="group-hover:bg-gradient  inline-flex h-16 w-16 items-center justify-center rounded-full bg-theme-light">
                                        <img src={plan.icon} alt={plan.name} loading='lazy' />
                                    </span>
                                </div>
                                <p className="mt-6">{plan.description}</p>
                                <div className="my-6 border-y border-border py-6">
                                    <h4 className="h6">What's included?</h4>
                                    <ul className="mt-6">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="mb-3 flex items-center text-sm">
                                                <svg
                                                    className="mr-2.5 group-hover:text-primary"
                                                    width="16"
                                                    height="13"
                                                    viewBox="0 0 16 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 5.42857L6.36364 10L14 2"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="btn group-hover:btn-primary btn-outline-white block h-[48px] w-full rounded-[50px] leading-[30px]"
                                    >Buy now</button>
                                    <span className="mt-6 inline-flex items-center text-dark cursor-pointer">
                                        Start Free trial
                                        <svg
                                            className="ml-1.5"
                                            width="13"
                                            height="16"
                                            viewBox="0 0 13 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
