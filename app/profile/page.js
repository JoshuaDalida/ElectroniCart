'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import ProfileWrapper from './wrapper/pageWrapper'

const Profile = () => {
  return (
    <>
      <SessionProvider>
        <ProfileWrapper />
      </SessionProvider>
    </>
  )
}

export default Profile