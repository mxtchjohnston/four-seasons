import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import AnyCarousel from '@/components/shared/AnyCarousel'
import ImageBox from '@/components/shared/ImageBox'
import Page from '../page/Page'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '', body = [] } = data ?? {} //nullish coalescing operator
  console.log("data", data);
  
  return (
    <div className="space-y-20">
      {/* <AnyCarousel opts={{loop: true}}>
        <h1>test</h1>
        <h1>welcome</h1>
        <ImageBox image={showcaseProjects[0].coverImage} alt="test" classesWrapper="relative aspect-[16/9]" />
      </AnyCarousel> */}
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
      {/* Body */}
      {body && (
        <CustomPortableText
          paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
          value={body}
        />
      )}
    </div>
  )
}

export default HomePage
