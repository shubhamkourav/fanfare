import moment from 'moment';
import React from 'react'

type Change = {
    type: string;
    color: string;
    description: string[];
}
interface Log {
    version: string;
    date: string;
    changes: Change[];
}
export default function Logs({ logs }: { logs: Log[] }) {
    return (
        <section className="section changelogs pt-0">
            <div className="container">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        {/* LOOP */}
                        {
                            logs.map((log, i) => {
                                return <div key={i} className="row mb-10 lg:mt-0">
                                    <div className="lg:col-3">
                                        <h6 className="mb-4 pl-7 text-lg lg:mt-0 lg:pl-0">
                                            {log.version} ({moment(log.date).format('ll')})
                                        </h6>
                                    </div>
                                    <div className="border-border lg:col-9 lg:border-l lg:pl-10 lg:pb-10">
                                        <div className="changelogs-content rounded-xl bg-white p-6 shadow-lg lg:p-10">
                                            {log.changes.map((change, index) => {
                                                return <React.Fragment key={index}>
                                                    <span className={`changelogs-tag bg-${change.color}`}>{change.type}</span>
                                                    <ul>
                                                        {change.description.map((desc, j) => {
                                                            return <li key={j}>{desc}</li>;
                                                        })}
                                                    </ul>
                                                </React.Fragment>

                                            })}
                                        </div>

                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
