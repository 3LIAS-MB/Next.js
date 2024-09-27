import React from 'react'
import Link from 'next/link'

export function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4'>
            <Link href="/">
                <h3 className='text-2xl font-bold'>NextCrud</h3>
            </Link>
            <ul>
                <li>
                    <Link href="/new" className='text-slate-200 hover:text-slate-400'>
                        New
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
