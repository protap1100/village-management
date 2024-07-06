import SectionTitle from "../../Components/Shared/SectionTitle";
import image1 from "../../assets/Media/Gallery/Jonh.jpg";
import image2 from "../../assets/Media/Gallery/Protap.jpg";
import image3 from "../../assets/Media/Gallery/slider-2.jpg";
import image4 from "../../assets/Media/Gallery/slider-3.jpg";
import image5 from "../../assets/Media/Gallery/slider-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

const VillageGallery = () => {
  return (
    <div className="mt-5">
      <SectionTitle
        heading={"Our Village Gallery"}
        subHeading={"Group Photo that were taken by our member's"}
      ></SectionTitle>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mt-10 w-full lg:w-5/6 h-full rounded bg-gray-200"
      >
        <SwiperSlide>
          <div>
            <div>
              <h1 className="font-bold text-xl text-green-500">
                Date: 25 September 2022
              </h1>
              <h1 className="font-bold text-xl text-green-500">
                Occasions: Durga Puja
              </h1>
              <h1 className="font-bold text-xl text-green-500">
                Title: Durga Puja
              </h1>
            </div>
            <div className="flex lg:justify-start justify-center ">
              <img
                className="h-80 w-96 mt-5 rounded hover:opacity-85 transform transition duration-500 hover:scale-105"
                src={image1}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="font-bold text-xl text-green-500">
              Date: 25 September 2022
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Occasions: Durga Puja
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Title: Durga Puja
            </h1>
            <div className="flex lg:justify-start justify-center ">
              <img
                className="mt-5 rounded h-80 w-96  hover:opacity-85 transform transition duration-500 hover:scale-105"
                src={image2}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="font-bold text-xl text-green-500">
              Date: 25 September 2022
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Occasions: Durga Puja
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Title: Durga Puja
            </h1>
            <div className="flex lg:justify-start justify-center ">
              <img
                className="h-80 w-96 mt-5 rounded  hover:opacity-85 transform transition duration-500 hover:scale-105"
                src={image3}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="font-bold text-xl text-green-500">
              Date: 25 September 2022
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Occasions: Durga Puja
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Title: Durga Puja
            </h1>
            <div className="flex lg:justify-start justify-center ">
              <img
                className="h-80 w-96 mt-5 rounded  hover:opacity-85 transform transition duration-500 hover:scale-105"
                src={image4}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="font-bold text-xl text-green-500">
              Date: 25 September 2022
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Occasions: Durga Puja
            </h1>
            <h1 className="font-bold text-xl text-green-500">
              Title: Durga Puja
            </h1>
            <div className="flex lg:justify-start justify-center ">
              <img
                className="h-80 w-96 mt-5 rounded  hover:opacity-85 transform transition duration-500 hover:scale-105"
                src={image5}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VillageGallery;
