import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link
      href="/"
      className={clsx(
        'flex items-center justify-center shrink-0',
        className
      )}
    >
      <Image
        src="/images/Logo.png"
        alt="MatcheriBalu News"
        width={350}
        height={100}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  )
}

export default Logo
