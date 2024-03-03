import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import CustomForm from '@/components/shared/CustomForm'
import ImageBox from '@/components/shared/ImageBox'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '', body = [], heroImage = {} } = data ?? {} //nullish coalescing operator
  console.log("data", data);
  
  return (
    <div className="space-y-10">
      {/* Hero */}
      {/* <ImageBox
        image={heroImage}
        alt="Hero image"
      /> */}
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* <CustomForm /> */}
      {/* Showcase projects */}
      {/* Body */}
      {body && (
        <CustomPortableText
          paragraphClasses="font-serif text-gray-600 text-xl"
          value={body}
        />
      )}
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
      
    </div>
  )
}

export default HomePage
