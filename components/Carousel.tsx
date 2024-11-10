import ImageGallery from "react-image-gallery";
import guru1 from "@/public/guru/guru1.webp"
import guru2 from "@/public/guru/guru2.webp"
import guru3 from "@/public/guru/guru3.webp"

const Carousel = () => {
  const images = [
    {
      original: guru1,
    },
    {
      original: guru2,
    },
    {
      original: guru3,
    },
  ]
  return (
    <div>
      <ImageGallery />
    </div>
  )
}

export default Carousel