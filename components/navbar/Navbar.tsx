import React from 'react'
import Container from '../global/container'
import Logo from './Logo'
import Navsearch from './Navsearch'
import LinksDropdown from './LinksDropdown'
import CartButton from './CartButton'
import SignOutLink from './SignOutLink'
import { UserIcon } from 'lucide-react'
import {DarkMode} from './DarkMode'

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <Navsearch />
          <div className='flex gap-4 items-center'>
            <LinksDropdown />
            <CartButton />
            <DarkMode />
          </div>
      </Container>
    </nav>
  )
}

export default Navbar