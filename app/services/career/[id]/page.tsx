"use client"
import React, { useMemo } from 'react'
import potions from '@config/pages/services/career/position.json';
import Common from '@partials/Career/Single/Common';
import Post from '@partials/Career/Single/Post';
export default function page({ params }: { params: { id: string } }) {

    const { jobs } = potions;
    const job = useMemo(() => {
        return jobs.find((j) => j.id === params.id) || null;
    }, [jobs])
    const relatedJobs = useMemo(() => {
        return jobs.filter((j) => j.category === job?.category && j.id!== job?.id).slice(0, 4)
        
    },[job, jobs])
    return (
        <>
            <Common title={job?.title} />
            <Post {...job} relatedJobs={relatedJobs} />
        </>
    )
}
