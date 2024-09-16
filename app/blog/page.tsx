import Layout from '@layouts/page.layout'
import Categories from '@partials/Blog/Categories'
import Common from '@partials/Blog/Common'
import FeaturedPosts from '@partials/Blog/FeaturedPosts'
import LatestPosts from '@partials/Blog/LatestPosts'
import React from 'react'

export default function Blog() {
    return (
        <Layout>
            <Common />
            <section className="section pt-0">
                <div className="container">
                    <FeaturedPosts />
                    <Categories />
                    <LatestPosts />
                </div>
            </section>
        </Layout>
    )
}
