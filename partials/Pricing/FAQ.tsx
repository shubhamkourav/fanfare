"use client";

import React, { useState } from 'react'
import FAQCard from './FAQCard';

export interface Question  {
    question: string;
    answer: string;
}
type FAQProps = {
    title: string;
    description: string;
    questions: Question[];
}

export default function FAQ({ title, description, questions }: FAQProps) {
    return (
        <section className="faqs section">
            <div className="container max-w-[1230px]">
                <div className="row">
                    <div className="text-center lg:col-4 lg:text-start">
                        <h2>{title}</h2>
                        <p className="mt-6 lg:max-w-[404px]">{description}</p>
                    </div>
                    <div className="mt-8 lg:col-8 lg:mt-0">
                        <div className="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8">
                            {
                                questions.map((item, i) => (<FAQCard
                                    key={i}
                                    question={item.question}
                                    answer={item.answer}
                                    isActive={i==0}
                                />))
                                
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
