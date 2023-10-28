import IssueStatusBadge from '@/app/components/IssueStatusBagde';
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react'
import Reactmarkdown from 'react-markdown';
import delay from 'delay';

interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  await delay(5000)
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue)
    notFound();

  return (
    <div>
          
     <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='4'>
        <Reactmarkdown>{issue.description}</Reactmarkdown>
      </Card>
    </div>
  )
}

export default IssueDetailPage