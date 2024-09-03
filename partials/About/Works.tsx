import React from 'react'
import about from '@config/pages/about.json';
export default function Works() {
  const { works } = about
  return (
    <section className="section">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="md:col-5">
            <h2 className="text-center md:text-left">
              {works.title}
            </h2>
          </div>
          <div className="mt-6 text-center md:col-3 md:mt-0 md:text-right">
            <a target='_blank' className="btn btn-primary" href={works.button.url}>{works.button.text}</a>
          </div>
        </div>
        <div className="row mt-14">
          {works.cards.map((card, i) => {
            return <div key={i} className="mb-8 sm:col-6 lg:col-4">
              <div className="rounded-xl bg-white p-6 shadow-lg lg:p-8">
                <div className="gradient-number relative inline-block">
                  <span
                    className="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >{card.id}
                  </span>
                  <img src="/images/gradient-number-bg.svg" alt="" />
                </div>
                <h4 className="my-3">{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
