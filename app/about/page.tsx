import Common from '@partials/About/Common'
import Gallery from '@partials/About/Gallery'
import Members from '@partials/About/Members'
import Works from '@partials/About/Works'
import Layout from '@layouts/page.layout'
import React from 'react'

export default function About() {
  return (
    <Layout>
      <Common />
      <Gallery />
      <Works />
      <Members/>
    </Layout>
  )
}
