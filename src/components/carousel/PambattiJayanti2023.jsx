import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { paambatiJayanti_2023 } from "../../helpers/photos23";
import "react-image-gallery/styles/css/image-gallery.css";

const PambattiJayanti2023 = () => {
  return (
    <div className="font-light text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">Памбатти джаянти 2023</h1>
      <div className="mt-20">
        <div className="my-10">
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={paambatiJayanti_2023} {...settings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PambattiJayanti2023;
