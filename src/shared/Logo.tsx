import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: string
}

const Logo: React.FC<Props> = ({ className, size = 'size-12 sm:size-14', ...props }) => {
  return (
    <Link href="/" className={clsx('inline-block shrink-0 text-primary-800 dark:text-primary-900', className, size)}>
  <Image
    src="/images/Logo.png"
    alt="Logo"
    width={700}
    height={500}
    priority
    className="h-auto w-auto"
  />
</Link>
  )
}

export default Logo
