import { Button } from '@/components/ui/button'
import { isAuthenticated, signOut } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const Layout = async ({ children }: {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
    <nav className='w-full flex justify-between items-center'>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
        <h2 className="text-primary-100">AceUp</h2>
      </Link>
      <Button className='btn-logout' onClick={signOut}>Logout</Button>
    </nav>

    {children}
  </div>
  )
}

export default Layout