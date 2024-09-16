import Layout from '@layouts/page.layout'
import Common from '@partials/Contact/Common'
import Form from '@partials/Contact/Form'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <Common />
            <Form />
        </Layout>
    )
}
