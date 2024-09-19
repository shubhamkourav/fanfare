import React from 'react'
import info from '@config/pages/services/integrations.json';
import config from '@config/config.json';
import Layout from '@layouts/page.layout';
import Common from '@partials/components/Common';
import IntegrationPage from '@partials/Integration/Page';
import { IntegrationContextProvider } from 'context/Integration';
export default function page() {
  const { title, description, services } = info;
  // const [type, setType] = useState<String | null>(null);
  // const onActive = (ty: String) => {
  //   setType(ty)
  // }
  // const tabItems = useMemo(() => {
  //   let data = services.map((service) => service.type)
  //   data.unshift('')
  //   return data
  // },[services])


  return (
    <Layout>
      <IntegrationContextProvider services={services}  >

      <Common title={title} description={description} site_name={config.site.title} />
      <IntegrationPage />
      </IntegrationContextProvider>
    </Layout>
  )
}
