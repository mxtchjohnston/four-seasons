
import Link from 'next/link'
import Image from 'next/image'

import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import { urlForOpenGraphImage } from '@/sanity/lib/utils'
 import logo from '@/app/logo.svg'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const slug = "";
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {/* <Image src={urlForOpenGraphImage(data.ogImage) ?? ''} alt="logo" width={200} height={100} /> */}
      <Image src={logo} alt="logo" width={100} height={100} />
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={
                `text-lg hover:text-black 
                hover:underline transition-all duration-300 md:text-xl 
                ${
                menuItem?._type === 'home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
                }
                ${
                  menuItem.slug === slug ? 'font-extrabold text-black' : ''
                }
              `}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
