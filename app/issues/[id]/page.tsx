import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'
import delay from 'delay'

interface props {
    params: { id: string}
}

const IssueDetailPage = async ({ params }: props) => {
    
    await delay(2000)

    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id)}
    })

    if (!issue)
        notFound

    return (
       <div>
        <p>{ issue?.title}</p>
        <p>{ issue?.description}</p>
        <p>{ issue?.Status}</p>
        <p>{ issue?.createdAt.toDateString()}</p>
       </div>
  )
}

export default IssueDetailPage
