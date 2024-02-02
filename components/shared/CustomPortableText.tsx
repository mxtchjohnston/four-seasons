import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'
import AnyCarousel from './AnyCarousel'
import { Key } from 'react'
import CustomForm from './CustomForm'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnyAccordion } from './AnyAccordion'

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
    list: {
      bullet: ({ children }) => {
        return <ul className="list-disc list-inside">{children}</ul>
      },
      number: ({ children }) => {
        return <ol className="list-decimal list-inside">{children}</ol>
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
        const { images, title, duration } = value || {}
        return (<div>
          <div className="font-extrabold tracking-tight md:text-3xl">
            {title}
          </div>
          <AnyCarousel opts={{ loop: true }} duration={duration}>
            {images.map((image: any, key: Key) => (
              <ImageBox
                key={key}
                image={image}
                alt={image.alt}
                classesWrapper="relative aspect-[16/9]"
              />
            ))}
          </AnyCarousel>
        </div>)
      },
      form: ({ value }) => {
        return <CustomForm />
      },
      accordion: ({ value }) => {
        return <AnyAccordion value={value} />
      }
    },
  }

  return <PortableText components={components} value={value} />
}
