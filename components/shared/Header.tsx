import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = true } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl mb-2 ">
          {title}
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="font-serif text-xl text-gray-600 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
