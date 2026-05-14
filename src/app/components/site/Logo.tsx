import Image from 'next/image'
import Link from 'next/link'

import LogoImage from '@/app/assets/images/logo-1.png'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-grid h-8 w-8 grid-cols-3 grid-rows-3 gap-[2px]">
        {[1, 1, 0, 1, 1, 1, 0, 1, 1].map((b, i) => (
          <span key={i} className={b ? 'bg-primary' : 'bg-transparent'} />
        ))}
        <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-accent" />
      </span>
      {/* <span className="font-display text-lg font-bold tracking-tight" dir="ltr">
        2rag<span className="text-accent">.</span>
      </span> */}
      <Image src={LogoImage} alt="۲رگ" className="Logo-image-header w-30" />
    </Link>
  )
}
