import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { brahmanandaJayanti_2024 } from "../../helpers/photos24";
import "react-image-gallery/styles/css/image-gallery.css";

const BrahmanandaJayanti2024 = () => {
  return (
    <div className="font-light text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">Брахмананда Джаянти 2024</h1>

      <div className="mt-10 lg:mt-20">
        <div className="my-10">
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={brahmanandaJayanti_2024} {...settings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrahmanandaJayanti2024;
