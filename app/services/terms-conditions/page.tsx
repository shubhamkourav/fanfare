import React from 'react'
import info from '@config/pages/services/terms-conditions.json';
import Layout from '@layouts/page.layout';
import Common from '@partials/components/Common';
import Section from '@partials/TermsConditions/Section';
export default function page() {
    const { title, description, sections } = info;

  return (
      <Layout>
          <Common title={title} description={description} />
          <Section sections={sections} />
    </Layout>
  )
}
