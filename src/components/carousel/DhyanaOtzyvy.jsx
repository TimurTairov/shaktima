import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { otzyvyDhyanaRetreat } from "../../helpers/photos26";
import "react-image-gallery/styles/css/image-gallery.css";

const DhyanaOtzyvy = () => {
  return (
    <div className="font-light text-gray-700 lg:w-10/12 dark:text-gray-300">
      <h1 className="w-full text-center text-lg font-bold md:text-xl lg:mt-10 lg:text-2xl 2xl:mt-12 dark:text-amber-600">
        Отзывы с прошедших ретритов
      </h1>

      <div className="">
        <div className="my-3">
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={otzyvyDhyanaRetreat} {...settings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DhyanaOtzyvy;
