import Layout from '@layouts/page.layout'
import Common from '@partials/components/Common'
import Plan from '@partials/Pricing/Plan';

import React from 'react'
import info from '@config/pages/services/pricing.json';
import faq_info from '@config/pages/faq.json';
import config from '@config/config.json';
import FAQ from '@partials/Pricing/FAQ';



export default function page() {
  const { title, description, plans } = info;

  return (
      <Layout>
      <Common title={`${config.site.title} ${title}`} description={`${config.site.title} ${description}`} />
      <Plan plans={plans} />
      <FAQ {...faq_info} />
    </Layout>
  )
}
