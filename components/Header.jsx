import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link className='mr-12' href={'/'} >Home</Link>
      <Link href={'lp'} >Landing Page</Link>
    </div>
  )
}

export default Header
