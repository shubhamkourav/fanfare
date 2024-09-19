import { IServices } from 'context/Integration'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Card({ name, details, description, icon, url, id, type }: IServices) {
    const path = usePathname();
    return (
        <div className="mb-8 md:col-6 lg:col-4 integration-tab-item">
            <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                    <img src={icon} className='size-20' alt={name} loading='lazy' />
                    <div>
                        <h4 className="h4">{name}</h4>
                        <span className="font-medium">{type}</span>
                    </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                    <p>{description}</p>
                </div>
                <Link className="inline-flex items-center font-semibold text-dark" href={`${path}/${id}`}>
                    View integration
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
                </Link>
            </div>
        </div>
    )
}
