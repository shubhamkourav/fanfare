import React from 'react'
import blog from '@config/pages/blogs/base.json'
import BlogCard from './BlogCard'
export default function FeaturedPosts() {
  return (
      <>
          <h2 className="h4 mb-4">Featured Posts</h2>
          <div className="featured-posts row">
              {blog.featured_posts.map((post, i) => {
                  return <BlogCard key={i} {...post} featured_post={true} />
              })}

          </div>
      </>
  )
}
