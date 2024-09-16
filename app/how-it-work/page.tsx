import React from 'react'
import Layout from '@layouts/page.layout'
import Action from '@partials/components/Action'
import Common from '@partials/HowItWork/Common'
import Works from '@partials/HowItWork/Works'

export default function page() {
  return (
    <Layout>
      <Common />
      <Works />
      <Action />
    </Layout>
  )
}
