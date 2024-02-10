import ComingSoon from '@/components/comingsoon'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <header><UserButton afterSignOutUrl='/'/></header>
        <ComingSoon />
    </div>
  )
}

export default DashboardPage