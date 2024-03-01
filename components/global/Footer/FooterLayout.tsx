import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const fbLink = data?.fbLink || ''
  return (
    <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )}
      <SocialIcons fbLink={fbLink}/>
    </footer>
  )
}

function SocialIcons ({fbLink}) {
  return (
    <div className="flex justify-center space-x-4">
      <a href={fbLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='text-3xl'/>
      </a>
      {/*
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.svg" alt="Instagram" />
      </a> */}
    </div>
  )
}
