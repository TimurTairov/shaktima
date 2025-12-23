import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://sun9-65.userapi.com/s/v1/ig2/M4It2Tt_KCHfA9gfKYxzLCx_veBtoYHo8qIrv43fSHSqDUm3yxzBhfUo93Dp6DGMlGUyPTdgOb084OfW-IIVkbBQ.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=1280x0",
  },
  {
    original:
      "https://sun9-40.userapi.com/s/v1/ig2/N7HidTYsxRFeQHRWCIuDddxNqYAY3S9YIDRA-jusB7-Bn9J9RcGw82JJUWKBRUCQoqib9-Y89VIAeTb1NqIqYa1F.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=1280x0",
  },
  {
    original:
      "https://sun9-74.userapi.com/s/v1/ig2/3737oq_DxgAfnQvwbvBDfXG1cyh0CNMmf5I35TpGNP9EQvdYx_8QHGEfKCNga9p_z7PlMhVlg8kPaLUecPjbqaxQ.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=1280x0",
  },
  {
    original:
      "https://sun9-78.userapi.com/s/v1/ig2/z-KcSL323Hgs6D-WkZC2qbr2cYhEH11YWYBfQCqRH5ifr6cWe6zRxPpqu-6lfAEV67Ki47VTn9r1mXfX0lstkp3M.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=1280x0",
  },
  {
    original:
      "https://sun9-65.userapi.com/s/v1/ig2/JgJ-Ww97Cj0Em8vxTgGKW4KynTT_aOY4fe_tgUCWuhiADGt5MRDgEDjXWI3877ITRuFOwrZMGj90kIdpigEBrNYa.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=1280x0",
  },
];

const Mdc = () => {
  return <ImageGallery items={images} />;
};

export default Mdc;
