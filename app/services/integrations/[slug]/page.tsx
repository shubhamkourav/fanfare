"use client";

import Layout from '@layouts/page.layout'
import Single from '@partials/Integration/Single'
import { useIntegration } from 'context/Integration'
import React, { useMemo } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
    const { services } = useIntegration()

    const service = useMemo(() => {
        return services?.find((s) => s.id === params.slug) || null;
        
    }, [services])
    
    if (service) return <Single {...service} />

}
