import React from 'react'

interface Sections {
    title: string;
    content: string;
}
export default function Section({ sections}: {sections: Sections[]}) {
    return (
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        <div className="content">
                            {sections.map((section, index) => (
                                <div key={index} className="mt-8">
                                    <h3>{section.title}</h3>
                                    <span dangerouslySetInnerHTML={{__html: section.content}}></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
