import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { mshr_2025_1, mshr_2025_2 } from "../../helpers/photos25";
import "react-image-gallery/styles/css/image-gallery.css";

const MahaShivaRatri2025 = () => {
  return (
    <div className="font-light text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">МахаШиваРатри 2025</h1>

      <div className="mt-10 lg:mt-20">
        <div className="my-10">
          <h5 className="text-center text-lg">Часть 1</h5>
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={mshr_2025_2} {...settings} />
          </div>
        </div>
        <div className="my-10">
          <h5 className="text-center text-lg">Часть 2</h5>
          <div className="flex w-full items-center justify-center">
            <ImageGallery
              items={mshr_2025_1}
              {...settings}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahaShivaRatri2025;
