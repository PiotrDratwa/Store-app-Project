import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { VscCode } from 'react-icons/vsc'

function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <VscCode className='w-8 h-8'/>
      </Link>
    </Button>
  )
}

export default Logo