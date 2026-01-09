import ImageGallery from "react-image-gallery";
import { settings } from "../../helpers/imageGallarySettings";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://sun9-3.userapi.com/s/v1/ig2/r1rKH4LvLvqZG8dypJHHFXVAFWcL--MnPlkKgESuFPX_c7Z25hEto35WirSR3Ni49hH64uOPVanlt0qXKkg9W7Fa.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Общая линия передачи",
  },
  {
    original:
      "https://sun9-4.userapi.com/s/v1/ig2/plzGoRAUhpZujh_oqD1Wtx_QUc7h4F0vYqqpSYPfnFv6SPJgletAHSZG4YuiXCKWo7UspFxZKOFCbbYbuFqudbYp.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Северная линия передачи",
  },
  {
    original:
      "https://sun9-5.userapi.com/s/v1/ig2/2358n4bP0-5gQ4UwM5U5HLB_fl1AM0p7LwReu0BRToCx97NMao_n1l__XFdNjgz07f4iRU3zJTO2g5kpuTqg-5FT.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Южная линия передачи",
  },
  {
    original:
      "https://sun9-67.userapi.com/s/v1/ig2/Eu8X8vYvCSlqdHmzhBSLVfrUyVeFKRrSc2GP6Q14NnrboQ6r1O36KwxS1YyWqZs0i2q9050h8VJjpEIfIQ_iFhJZ.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Свами Брахмананда",
  },
  {
    original:
      "https://sun9-33.userapi.com/s/v1/ig2/GJFuoZ8G1ZLa-IuJR9WUNGfs6riFHKs6UwsdOPqdnaksthdvQ8wZaYbkrcLENN_5knfDy2f2pVAB4RSGhyETjZrx.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Свами Брахмананда",
  },
  {
    original:
      "https://sun9-82.userapi.com/s/v1/ig2/YNRy3mWfq1wzmg6_7Zfk4T6tubO7hgFHjKGcY--BZpjhk-x8W9aWFo7j3DxuVSL3ze8Buej1tSIaNxo-taq4hxIm.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Авадхута Даттатрея",
  },
  {
    original:
      "https://sun9-79.userapi.com/s/v1/ig2/IYdUCEF7wgkP6LiHJMFL_sWqFPjk21Z0DihyxwrLKr2QNg9_DvJ-vh3wAliGI3PG1WYyHYGwhEoxEqJ31WmzsJE_.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Махасиддха Памбатти",
  },
  {
    original:
      "https://sun9-63.userapi.com/s/v1/ig2/P3jPoFfZQxaT5HYiHkyOULH5d_FAaTZ52_q4-975Me_cIXgR2hRa3CuVgHWY8IzaEjISctbE7LEH6ELspItzqMaL.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Махасиддха Сатьямуни",
  },
  {
    original:
      "https://sun9-78.userapi.com/s/v1/ig2/9u4MQwdV7VHfFA-gHud6xGzLZBP1FqbAwwR5v0i4TcWuuhYA0SDDg-_DcfB2rKIHTdaYipGCN4LzGKkDNdQ2_VPb.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
    description: "Шива",
  },
];

const Tradiciya = () => {
  return <ImageGallery items={images} {...settings} />;
};

export default Tradiciya;
