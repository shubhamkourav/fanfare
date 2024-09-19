import React from 'react'
import info from '@config/pages/services/integrations.json';
import config from '@config/config.json';
import Common from '@partials/components/Common';
import IntegrationPage from '@partials/Integration/Page';
export default function page() {
  const { title, description } = info;

  return (
    <>
      <Common title={title} description={description} site_name={config.site.title} />
      <IntegrationPage />
    </>
  )
}
