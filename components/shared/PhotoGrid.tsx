
import ImageBox from "./ImageBox";
import { Image } from "sanity";

export default function PhotoGrid({value}) {
  //console.log(value.images);
  const images : Array<{alt?: string, image: Image}> = value.images;
  const subset = images;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
      {subset.map((image, key) => (
        <ImageInGrid key={key} image={image} />
      ))}
      {/* <img
        alt="Photo"
        className="aspect-square object-cover rounded-lg border border-gray-200"
        height={600}
        src="/placeholder.svg"
        width={600}
      /> */}
    </div>
  )
}

function ImageInGrid({image}): React.ReactElement {
  return (
    <ImageBox
      alt={image.alt || "Photo"}
      classesWrapper="aspect-square object-cover rounded-lg border border-gray-200"
      image={image}
      width={1200}
      height={1200}
      size="100%"
      
    />
    // <Image
    //   alt={image.alt || "Photo"}
    //   className="aspect-square object-cover rounded-lg border border-gray-200"
    //   height={600}
    //   src={image.url}
    //   width={600}
    // />
  )
}

