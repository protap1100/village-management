import SectionTitle from "../../Components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { GrGallery } from "react-icons/gr";
import useGallery from "../../Hooks/useGallery";
import Loading from "../../Others/Loading";

const VillageGallery = () => {
  const [photos, loading,] = useGallery();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      <SectionTitle
        icon={<GrGallery></GrGallery>}
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
            slidesPerView: 3,
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
        {photos.map((photo) => (
          <SwiperSlide key={photo._id}>
            <div className="my-10">
              <div className="pl-4 lg:pl-0 text-center lg:text-left">
                <h1 className="font-bold text-lg text-green-500">
                  Added Date: {photo.createdAt.slice(0, 10)}
                </h1>
                <h1 className="font-bold text-lg text-green-500">
                  Occasions: {photo.title}
                </h1>
                <h1 className="font-light text-base text-green-500">
                   {photo.description}
                </h1>
              </div>
              <div className="flex lg:justify-start justify-center ">
                <img
                  className="h-80 w-96 mt-5 rounded hover:opacity-85 transform transition duration-500 hover:scale-105"
                  src={photo.image}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VillageGallery;
