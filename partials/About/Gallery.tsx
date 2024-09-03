import React from 'react'
import about from '@config/pages/about.json';
import Image from 'next/image';
export default function Gallery() {
  const { gallery } = about
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-8">
            <h2>{gallery.text}</h2>
          </div>
        </div>
        <div className="row mt-2.5">
          <div className="md:col-6">
            {gallery.images.group1.map((image, i) => {
              return <div key={i} className="relative mt-8">
                <Image
                  className="w-full object-cover"
                  width={image.width}
                  height={image.height}
                  src={image.url}
                  alt="Fanfare"
                />
                {image.sub_image && <img
                  className="absolute -bottom-5 -left-5 -z-[1]"
                  src={image.sub_image}
                  alt="Fanfare Illustration"
                />}
              </div>
            })}
          </div>
          <div className="md:col-6">
          {gallery.images.group2.map((image, i) => {
              return <div key={i} className="relative mt-8">
                <Image
                  className="w-full object-cover"
                  width={image.width}
                  height={image.height}
                  src={image.url}
                  alt="Fanfare"
                />
                {image.sub_image && <img
                  className="absolute -bottom-4 -right-5 -z-[1] h-16 w-16"
                  src={image.sub_image}
                  alt="Fanfare Illustration"
                />}
              </div>
            })}
          </div>
        </div>
      </div>
    </section>

  )
}
