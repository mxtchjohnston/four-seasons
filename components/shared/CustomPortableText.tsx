import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'
import AnyCarousel from './AnyCarousel'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
      carousel: ({ value }) => {
        const { images, title, duration} = value || {}
        console.log(value);
        return (<>
          <h1>{title}</h1>
          <AnyCarousel opts={{loop: true}} duration={duration}>
            {images.map((image, key) => (
              <ImageBox
                key={key}
                image={image}
                alt={image.alt}
                classesWrapper="relative aspect-[16/9]"
              />
            ))}
          </AnyCarousel>
        </>)
      },
    },
  }

  return <PortableText components={components} value={value} />
}
