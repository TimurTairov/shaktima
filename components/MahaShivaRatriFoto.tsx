'use client'
import { Container } from '@/components/Container'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const MahaShivaRatriFoto = () => {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 700,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
    showThumbnails: false,
  }

  const images = [
    {
      original:
        'https://sun9-65.userapi.com/impg/8FuUjSo2Ecd7GE64sBuxdViKXvnDcu8BLPa46Q/BpbufQZB1Ko.jpg?size=1280x720&quality=95&sign=8d743bb2864a7789f4d163dec52739d9&type=album',
    },
    {
      original:
        'https://sun9-40.userapi.com/impg/Ge_nps8ooPQAmpD0szGAk8qW9NfV4n4CBMxAng/BjE1obJT6wo.jpg?size=1280x720&quality=95&sign=fc2955f8fa4139b994163822903052ab&type=album',
    },

    {
      original:
        'https://sun9-64.userapi.com/impg/QBVRBYAjAXDWYV3bXJJ-f8WZRvEetB-Z2Rch6A/AFTHb34FBUM.jpg?size=1280x720&quality=95&sign=30bd1534b584870ed34350339d2d8741&type=album',
    },

    {
      original:
        'https://sun9-37.userapi.com/impg/T5W2JIfpHJGaYvdnUarckiDJFJLsc8FZ8nzOaw/L2VgSZONgbM.jpg?size=1280x720&quality=95&sign=f80b35a32d98a6cfea90842dc46efdd0&type=album',
    },
    {
      original:
        'https://sun9-65.userapi.com/impg/0cM_4If58bOgYT4qxIbbVKmLJvXzVMIGaL4C5Q/OH-ImNwoj1A.jpg?size=1280x720&quality=95&sign=4f8a689d454c72817e5e3ba49a34a2d5&type=album',
    },
    {
      original:
        'https://sun9-78.userapi.com/impg/Gc98XK70oGc7GhzWC9kci2J_E-Xc01O3vWMc4Q/U29xBg09k_k.jpg?size=1280x720&quality=95&sign=bae052278c5f1b17c7bba7681a8242b1&type=album',
    },
    {
      original:
        'https://sun9-74.userapi.com/impg/xLfxkn1pNJ5mmBhn_LV2h_Z0m2JD4tH1xhUPvw/d-xJLj5aOKo.jpg?size=1280x720&quality=95&sign=14c1493bb60248746aef867f2247fbdc&type=album',
    },
    {
      original:
        'https://sun9-24.userapi.com/impg/gzCH08vuqA-O3Jse9xXLx1osVkHehi5-DfziyA/pOHAwUWkjdQ.jpg?size=1280x720&quality=95&sign=caea107fee9720c24c7757362b08d6cf&type=album',
    },
    {
      original:
        'https://sun9-3.userapi.com/impg/9EmvrQc8nD0L_uacO44FlgkKOxCe0-pui66J9g/GjkP9CyD6kw.jpg?size=1280x720&quality=95&sign=27759673d827c2f742270e9c2d753b4d&type=album',
    },
  ]

  return (
    <Container>
      <div>
        {/* <h5 className='w-full text-center text-xs md:text-base'></h5> */}
        <ImageGallery items={images} {...settings} />
      </div>
    </Container>
  )
}

export default MahaShivaRatriFoto