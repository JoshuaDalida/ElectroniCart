'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import Header from './Header'

const Client = () => {
  return (
    <SessionProvider>
        <Header />
    </SessionProvider>
  )
}

export default Client