import React from 'react'
import data from '@config/pages/how-it-works.json'

type WorkItemProps = {
    title: string,
}
const WorkItem: React.FC<WorkItemProps> = ({ title }) => {
    return (
        <li className="mb-2 flex items-center rounded px-4">
            <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
            />
            {title}
        </li>
    )

}
export default function Works() {
    const { works } = data
    return (
        <section>
            <div className="container">
                {works.map((work, index) => {
                    const isEven = (index % 2) === 0
                    return (<div key={index} className="row gx-5 mt-14 items-center">
                        <div className={`lg:col-7 ${isEven ? 'lg:order-2' : ''}`}>
                            <div className="relative">
                                <img
                                    className="w-full object-contain"
                                    src={work.image}
                                />
                            </div>
                        </div>
                        <div className={`mt-6 lg:col-5 ${isEven ? 'lg:order-1' : ''} lg:mt-0`}>
                            <div className="text-container">
                                <h2 className="lg:text-4xl">{work.title}</h2>
                                <ul className="mt-6 text-dark lg:-ml-4">
                                    {work.items.map((workItem, i) => {
                                        return <WorkItem key={i} title={workItem} />
                                    })}
                                </ul>
                                {/* <p className="mt-6 font-medium text-dark">
                                    {work.sub_note}
                                </p> */}
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </section>
    )
}
