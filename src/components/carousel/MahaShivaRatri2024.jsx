import ImageGallery from "react-image-gallery";
import { Suspense } from "react";
import { mshr_2024_1, mshr_2024_2 } from "../../helpers/photos24";
import "react-image-gallery/styles/css/image-gallery.css";

const MahaShivaRatri2024 = () => {
  const settings = {
    showBullets: false,
    showIndex: true,
    showThumbnails: false,
    showFullscreenButton: true,
    lazyLoad: true,
  };
  return (
    <div className="font-light text-gray-700 dark:text-gray-300">
      <h1 className="mainTitle">МахаШиваРатри 2024</h1>
      <div className="mt-4 flex flex-col items-center gap-3">
        <p className="max-w-3xl">
          Махашиваратри в этом году удался на славу Махадэву в прекрасном зале
          &quot;Энергия Баланса&quot;.
        </p>
        <p className="max-w-3xl">
          У нас было четыре пуджи, динамическая медитация, танцы, йога, чай,
          ханг, общение и прасад. На праздник пришло около 50 практикующих,
          многие из которых держали пост. Это было по-настоящему бхавно, весело
          и интересно. Милость Ануграха Шакти лилась неиссякаемым потоком. Вся
          ночь пролетела в одно мгновение.
        </p>
        <p className="mt-2 w-full text-center font-medium">Ом Намах Шивая</p>
        <p className="mt-2 w-full text-center font-medium">
          Хара Хара Махадева
        </p>
      </div>
      <div className="mt-10 lg:mt-20">
        <h5 className="mb-2 text-center lg:ml-2 lg:text-lg">
          Видео с Махашиваратри
        </h5>
        <div className="lg:mx-20 xl:mx-40">
          <Suspense fallback={<p>Загрузка ...</p>}>
            <iframe
              src="https://rutube.ru/play/embed/65cff768edabe0447d5211b2162e5742?skinColor=e53935"
              frameBorder="0"
              allow="clipboard-write; autoplay"
              allowFullScreen
              className="rutube"
            ></iframe>
          </Suspense>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <h1 className="text-center text-lg lg:text-2xl">
          Фотографии с МахаШиваРатри 2024
        </h1>
        <div className="my-10">
          <h5 className="text-center text-lg">Часть 1</h5>
          <div className="flex w-full items-center justify-center">
            <ImageGallery items={mshr_2024_1} {...settings} />
          </div>
        </div>
        <div className="my-10">
          <h5 className="text-center text-lg">Часть 2</h5>
          <div className="flex w-full items-center justify-center">
            <ImageGallery
              items={mshr_2024_2}
              {...settings}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahaShivaRatri2024;
