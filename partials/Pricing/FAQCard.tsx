import React, { useState } from 'react'
import { Question } from './FAQ'

interface FAQCardProps extends Question {
    isActive: boolean;
}
export default function FAQCard({ question, answer, isActive }: FAQCardProps) {
    const [showQuestion, setShowQuestion] = useState<boolean>(isActive || false);

    const toggleQuestion = () => {
        setShowQuestion(!showQuestion);
    };
    
    return (
        <div className={`accordion border-b border-border ${showQuestion ? 'active' : ''}`}>
            <div onClick={toggleQuestion} className="accordion-header relative pl-6 text-lg font-semibold text-dark" data-accordion >
                {question}
                <svg
                    className="accordion-icon absolute left-0 top-[22px]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path
                        fill="currentColor"
                        d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                </svg>
            </div>
            <div className="accordion-content pl-6">
                {answer}
            </div>
        </div>
    )
}
