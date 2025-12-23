import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://sun9-3.userapi.com/s/v1/ig2/r1rKH4LvLvqZG8dypJHHFXVAFWcL--MnPlkKgESuFPX_c7Z25hEto35WirSR3Ni49hH64uOPVanlt0qXKkg9W7Fa.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-4.userapi.com/s/v1/ig2/plzGoRAUhpZujh_oqD1Wtx_QUc7h4F0vYqqpSYPfnFv6SPJgletAHSZG4YuiXCKWo7UspFxZKOFCbbYbuFqudbYp.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-5.userapi.com/s/v1/ig2/2358n4bP0-5gQ4UwM5U5HLB_fl1AM0p7LwReu0BRToCx97NMao_n1l__XFdNjgz07f4iRU3zJTO2g5kpuTqg-5FT.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },

  // {
  //   original: "",
  // },
  // {
  //   original: "",
  // },
];

const Tradiciya = () => {
  return <ImageGallery items={images} />;
};

export default Tradiciya;
