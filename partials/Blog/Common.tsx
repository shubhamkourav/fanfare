import React from 'react'
import blog from '@config/pages/blogs/base.json'
export default function Common() {
    return (
        <section className="page-hero pt-16 pb-14">
            <div className="container">
                <div className="page-hero-content mx-auto max-w-[768px] text-center">
                    <h1 className="mb-5 mt-8">
                        {blog.title}
                    </h1>
                </div>
            </div>
        </section>
    )
}
