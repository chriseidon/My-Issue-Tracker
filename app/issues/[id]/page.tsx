// import prisma from '@/prisma/client'
// import { notFound } from 'next/navigation'
// import React from 'react'
// import delay from 'delay'
// import { Card, Heading, Text } from '@radix-ui/themes'
// import IssueStatusBagde from '@/app/components/IssueStatusBagde'
// import { Flex } from '@radix-ui/themes'

// interface Props {
//     params: { id: string}
// }

// const IssueDetailPage = async ({ params }: Props) => {
    
//     await delay(2000)

//     const issue = await prisma.issue.findUnique({
//         where: { id: parseInt(params.id)}
//     })
      
//     if (!issue)
//         notFound

//     return (
//        <div>
//             <Heading>{issue?.title}</Heading>
//             <Flex className='space-x-3' my='2'>
//               <IssueStatusBagde status={ issue?.Status} />
//              <Text>{ issue?.createdAt.toDateString()}</Text>
//             </Flex>
//             <Card>
//               <p>{ issue?.description}</p>
//             </Card>
//            </div>
    
//   )
// }

// export default IssueDetailPage


import IssueStatusBadge from '@/app/components/IssueStatusBagde';
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue)
    notFound();

  return (
    <div>
          
     <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.Status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  )
}

export default IssueDetailPage