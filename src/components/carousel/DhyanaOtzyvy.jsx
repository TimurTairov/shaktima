import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import { otzyvyDhyanaRetreat } from "../../helpers/photos26";
import "react-image-gallery/styles/css/image-gallery.css";

const DhyanaOtzyvy = () => {
  return (
    <div className="mt-16 text-gray-700 lg:w-10/12 dark:text-gray-300">
      <h1 className="w-full text-center font-bold dark:text-amber-600">
        Отзывы с прошедших ретритов
      </h1>

      <div className="my-1 flex w-full justify-center">
        <div className="flex w-full items-center justify-center">
          <ImageGallery items={otzyvyDhyanaRetreat} {...settings} />
        </div>
      </div>
    </div>
  );
};

export default DhyanaOtzyvy;
