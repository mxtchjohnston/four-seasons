/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pH6Co5Jf0Jd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function NewHome() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 py-6 md:py-12">
        <div className="flex flex-col items-center max-w-3xl space-y-4 text-center md:space-y-2 md:space-x-4 md:flex-row md:items-start md:space-4 lg:max-w-5xl lg:space-y-6 xl:space-x-6">
          <div className="flex-1">
            <span className="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Welcome to
            </span>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Four Seasons</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Where your dreams take flight. Let your imagination run wild with our innovative creations.
            </p>
          </div>
          <img
            alt="Hero"
            className="aspect-[4/3] object-cover rounded-xl"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Spring Collection</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Introducing our vibrant and colorful Spring Collection. Let the season inspire you with our elegant and
              stylish designs.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop the Collection
            </Link>
          </div>
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Summer Adventure</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Embark on your Summer Adventure with our exclusive gear. Whether you're hitting the beach or exploring the
              great outdoors, we've got you covered.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fall Fashion</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Embrace the changing seasons with our Fall Fashion collection. From cozy sweaters to stylish boots, we
              have everything you need to look fabulous this autumn.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </Link>
          </div>
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Winter Wonderland</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Step into a Winter Wonderland with our enchanting holiday collection. Find the perfect gifts for your
              loved ones and add a touch of magic to your celebrations.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Discover the Magic
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="flex flex-col items-center space-y-4 text-center md:space-y-2 md:space-x-4 md:flex-row md:items-start md:space-4 lg:space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acme Imaginarium</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Where your dreams take flight. Let your imagination run wild with our innovative creations.
            </p>
          </div>
          <img
            alt="Hero"
            className="aspect-[4/3] object-cover rounded-xl"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Spring Collection</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Introducing our vibrant and colorful Spring Collection. Let the season inspire you with our elegant and
              stylish designs.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop the Collection
            </Link>
          </div>
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Summer Adventure</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Embark on your Summer Adventure with our exclusive gear. Whether you're hitting the beach or exploring the
              great outdoors, we've got you covered.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fall Fashion</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Embrace the changing seasons with our Fall Fashion collection. From cozy sweaters to stylish boots, we
              have everything you need to look fabulous this autumn.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </Link>
          </div>
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="container px-4 py-6">
        <div className="grid max-w-3xl gap-4 mx-auto items-center space-y-4 md:gap-6 md:space-y-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <img
            alt="Collection"
            className="aspect-video rounded-lg overflow-hidden object-cover object-center"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Winter Wonderland</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Step into a Winter Wonderland with our enchanting holiday collection. Find the perfect gifts for your
              loved ones and add a touch of magic to your celebrations.
            </p>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Discover the Magic
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

