import type { PortableTextBlock } from '@portabletext/types'

import Link from 'next/link'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const fbLink = data?.fbLink || ''
  const gbLink = data?.gbLink || ''
  return (
    <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )}
      <SocialIcons fbLink={fbLink} gbLink={gbLink}/>
    </footer>
  )
}

function SocialIcons ({fbLink, gbLink}) {
  return (
    <div className="flex justify-center space-x-4">
      <Link href={fbLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='text-3xl'/>
      </Link>
      <Link href={gbLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} className='text-3xl'/>
      </Link>
      
    </div>
  )
}
