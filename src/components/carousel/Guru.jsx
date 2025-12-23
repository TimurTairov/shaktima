import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://sun9-77.userapi.com/s/v1/ig2/Qg1bFwpYm5UqXdNDnNKpgdaliGlFAJYtcoqXJH5ZUwaqJwkEoKzU84drByIEcA3i7P5PYg3uZ1J1dLoPW2s20wRN.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-35.userapi.com/s/v1/ig2/bSeBnopXRMiPbwCcfAdiTgH3mElp9SlFtNSwELpJK3Bgu91ssCYgFUKVKBhD70_sjJoBXYBRj5USu5iZKIPS6uFS.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-68.userapi.com/s/v1/ig2/hR-bWCkN9koLgEFxCNg3kTQZPeR9oKEDuCzqXWxejuAJiL8tobxd8TB31a6r-0uiAlPMQvUaOpfCMTx1hUTRencR.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-1.userapi.com/s/v1/ig2/51EtOp20f3Bglqlw8eSWzdPZA3jEI2_Obt4Jj6yhk0dTa_msJiZeoTaxeD91erZyzfU3HZ8rmvLZEuI5NvZ9kM1R.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
  {
    original:
      "https://sun9-62.userapi.com/s/v1/ig2/IDZjSf3c33B_Q_Qz6Z1NKlIvoA5M8iji9GYsW7uONvNdm9biOG7WBzxUz3_eSX7s1dC7BX6oB_U1FEGBF-xC3Nzx.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,600x800&from=bu&cs=600x0",
  },
];

const Guru = () => {
  return <ImageGallery items={images} />;
};

export default Guru;
