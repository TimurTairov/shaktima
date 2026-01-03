import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { dhanvantariJayanti_2023 } from "../../helpers/photos23";
import "react-image-gallery/styles/css/image-gallery.css";

const DhanvantariJayanti2023 = () => {
  return (
    <div className="font-light text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">Дханвантари Джаянти 2023</h1>

      <div className="mt-10 lg:mt-20">
        <div className="my-10">
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={dhanvantariJayanti_2023} {...settings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DhanvantariJayanti2023;
