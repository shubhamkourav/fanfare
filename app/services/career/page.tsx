import Layout from '@layouts/page.layout'
import Benefits from '@partials/Career/Benefits'
import Common from '@partials/Career/Common'
import Jobs from '@partials/Career/Jobs'
import React from 'react'

export default function page() {
  return (
    <Layout>
      <Common />
      <Benefits />
      <Jobs />
    </Layout>
  )
}
