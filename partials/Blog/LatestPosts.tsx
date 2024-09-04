import React from 'react'
import blog from '@config/pages/blogs/base.json'
import BlogCard from './BlogCard'

export default function LatestPosts() {
    return (
        <>
            <h2 className="h4 mb-4">Latest Posts</h2>
            <div className="row">
                {blog.latest_posts.map((post, i) => {
                    return <BlogCard key={i} {...post} />
                })}
            </div>
        </>
    )
}
