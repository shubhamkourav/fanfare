import React from 'react'
import blog from '@config/pages/blogs/single-blog.json'
import moment from 'moment'
import Comments from './Comments'
import CommentForm from './CommentForm'
export default function Single() {
    const { title, image, author, time_text, date, content } = blog
    return (
        <section className="section blog-single">
            <div className="container">
                <div className="row justify-center">
                    <div className="lg:col-10">
                        <img className="rounded-xl" src={image} alt={title} />
                    </div>
                    <div className="mt-10 max-w-[810px] lg:col-9">
                        <h1 className="h2">
                            {title}
                        </h1>
                        <div className="mt-6 mb-5 flex items-center space-x-2">
                            <div
                                className="blog-author-avatar h-[58px] w-[58px] rounded-full border-2 border-primary p-0.5"
                            >
                                <img src={author.image} alt={author.name} />
                            </div>
                            <div className="">
                                <p className="text-dark">{author.name}</p>
                                <span className="text-sm">{moment(date).format('MMM DD YYYY')}. {time_text}</span>
                            </div>
                        </div>
                        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
                        <Comments />
                        <CommentForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
