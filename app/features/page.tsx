import Action from '@partials/components/Action'
import Collaboration from '@partials/Features/Collaboration'
import Common from '@partials/Features/Common'
import Layout from '@partials/layouts/page.layout'
import React from 'react'

export default function page() {
  return (
      <Layout>
          <Common />
          <Collaboration />
          <Action />
      </Layout>
  )
}
