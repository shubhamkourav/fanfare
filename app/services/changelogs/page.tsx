import React from 'react'
import info from '@config/pages/services/changelogs.json';
import Layout from '@layouts/page.layout';
import Common from '@partials/components/Common';
import Logs from '@partials/Changelogs/Logs';
export default function page() {
    const { title,logs } = info;

  return (
      <Layout>
          <Common title={title} />
          <Logs logs={logs} />
    </Layout>
  )
}
