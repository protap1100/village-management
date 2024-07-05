import { FaCommentAlt, FaHeart } from "react-icons/fa";
import SectionTitle from "../../Components/Shared/SectionTitle";
import bannerImage1 from "../../assets/Media/Banner/Village-Banner1.jpg";
import bannerImage2 from "../../assets/Media/Banner/Village-Banner2.png";
import bannerImage3 from "../../assets/Media/Banner/Village-Banner3.png";
import bannerImage4 from "../../assets/Media/Banner/Village-Banner4.png";

const Gallery = () => {
  return (
    <div>
      <SectionTitle
        heading={"Our Gallery Section"}
        subHeading={"Beautiful Photos Of Our Villages"}
      ></SectionTitle>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-5">
        <div className="space-y-2">
          <img className="rounded-xl w-96 h-60" src={bannerImage1} alt="" />
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart></FaHeart>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt ></FaCommentAlt >
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Added By: Protap Biswas</h1>
            <h1 className=" font-semibold">Added On: 23 September 2021 </h1>
          </div>
        </div>
        <div className="space-y-2">
          <img className="rounded-xl w-96 h-60" src={bannerImage2} alt="" />
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart></FaHeart>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt ></FaCommentAlt >
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Added By: Protap Biswas</h1>
            <h1 className=" font-semibold">Added On: 23 September 2021 </h1>
          </div>
        </div>
        <div className="space-y-2">
          <img className="rounded-xl w-96 h-60" src={bannerImage3} alt="" />
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart></FaHeart>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt ></FaCommentAlt >
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Added By: Protap Biswas</h1>
            <h1 className=" font-semibold">Added On: 23 September 2021 </h1>
          </div>
        </div>
        <div className="space-y-2">
          <img className="rounded-xl w-96 h-60" src={bannerImage4} alt="" />
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <p className="font-bold">10</p>
              <p className="text-red-500">
                <FaHeart></FaHeart>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">5 Comments</p>
              <p className="text-green-500">
                <FaCommentAlt ></FaCommentAlt >
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Added By: Protap Biswas</h1>
            <h1 className=" font-semibold">Added On: 23 September 2021 </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
