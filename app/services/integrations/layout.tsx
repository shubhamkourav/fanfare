import Layout from '@layouts/page.layout'
import { IntegrationContextProvider } from 'context/Integration'
import React from 'react'
import info from '@config/pages/services/integrations.json';
export default function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <IntegrationContextProvider services={info.services} >
                {children}
            </IntegrationContextProvider>
        </Layout>
    )
}
