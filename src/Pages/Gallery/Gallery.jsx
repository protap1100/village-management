import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import SectionTitle from "../../Components/Shared/SectionTitle";
import bannerImage1 from "../../assets/Media/Banner/Village-Banner1.jpg";
import bannerImage2 from "../../assets/Media/Banner/Village-Banner2.png";
import bannerImage3 from "../../assets/Media/Banner/Village-Banner3.png";
import bannerImage4 from "../../assets/Media/Banner/Village-Banner4.png";

const Gallery = () => {
  return (
    <div>
      <SectionTitle
      icon={<GrGallery></GrGallery>}
        heading={"Our Gallery Section"}
        subHeading={"Beautiful Photos Of Our Villages"}
      ></SectionTitle>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-20 px-3">
        <div className="space-y-2 relative w-96">
          <div className="relative">
            <img className="rounded-xl w-96 h-60" src={bannerImage1} alt="" />
            <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
              <p>Nature</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart />
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt />
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Added By: Protap Biswas</h1>
            <h1 className="font-semibold">Added On: 23 September 2021</h1>
          </div>
        </div>
        <div className="space-y-2 relative w-96">
          <div className="relative">
            <img className="rounded-xl w-96 h-60" src={bannerImage2} alt="" />
            <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
              <p>Nature</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart />
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt />
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Added By: Protap Biswas</h1>
            <h1 className="font-semibold">Added On: 23 September 2021</h1>
          </div>
        </div>
        <div className="space-y-2 relative w-96">
          <div className="relative">
            <img className="rounded-xl w-96 h-60" src={bannerImage3} alt="" />
            <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
              <p>Nature</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart />
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt />
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Added By: Protap Biswas</h1>
            <h1 className="font-semibold">Added On: 23 September 2021</h1>
          </div>
        </div>
        <div className="space-y-2 relative w-96">
          <div className="relative">
            <img className="rounded-xl w-96 h-60" src={bannerImage4} alt="" />
            <div className="absolute bottom-2 right-2 bg-white text-center font-semibold rounded-xl px-2 py-1">
              <p>Nature</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart />
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt />
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Added By: Protap Biswas</h1>
            <h1 className="font-semibold">Added On: 23 September 2021</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
