'use client'

import React from 'react'
import { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types'

import { useRouter } from 'next/navigation'

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])
  return (
    <div>UserMenu</div>
  )
}

export default UserMenu;