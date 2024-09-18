import React from 'react'
import info from '@config/pages/services/career/info.json';

export default function Benefits() {
  const { benefits } = info;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-8">
            <h2>{benefits.title}</h2>
            <p className="mt-4">{benefits.description}</p>
          </div>
        </div>
        <div className="row mt-14 text-center">
          {benefits.list.map((benefit, index) => (
            <div key={index} className="mb-10 sm:col-6 lg:col-4">
              <img
                className="mx-auto"
                loading='lazy'
                src={benefit.icon}
                width={100}
                height={90}
                alt={benefit.title}
              />
              <h3 className="h4 mt-8 mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
