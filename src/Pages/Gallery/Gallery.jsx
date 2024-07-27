import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import SectionTitle from "../../Components/Shared/SectionTitle";
import bannerImage1 from "../../assets/Media/Banner/Village-Banner1.jpg";
import bannerImage2 from "../../assets/Media/Banner/Village-Banner2.png";
import bannerImage3 from "../../assets/Media/Banner/Village-Banner3.png";
import bannerImage4 from "../../assets/Media/Banner/Village-Banner4.png";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>BGTS || Gallery</title>
        <link rel="icon" href="gallery.png" type="image/png" />
      </Helmet>
      <SectionTitle
        icon={<GrGallery></GrGallery>}
        heading={"Our Gallery Section"}
        subHeading={"Beautiful Photos Of Our Villages"}
      ></SectionTitle>
      <div className=" flex justify-center items-center ">
        <form
          action=""
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl space-y-6 my-10"
        >
          <div>
            <label
              className="font-bold text-center text-2xl mb-2 block"
              htmlFor="caption"
            >
              Caption
            </label>
            <div>
              <textarea
                name="caption"
                className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>
          </div>
          <div>
            <label
              className="font-bold text-center text-2xl mb-2 block"
              htmlFor="photo"
            >
              Photo
            </label>
            <div>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-full font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post
            </button>
          </div>
        </form>
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-20 px-3">
        <div className="space-y-2 relative ">
          <div className="relative">
            <img className="rounded-xl w-full h-60" src={bannerImage1} alt="" />
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
              <p className="font-bold">Likes</p>
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
        <div className="space-y-2 relative">
          <div className="relative">
            <img
              className="rounded-xl  w-full h-60"
              src={bannerImage2}
              alt=""
            />
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
              <p className="font-bold">Likes</p>
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
        <div className="space-y-2 relative ">
          <div className="relative">
            <img
              className="rounded-xl  w-full h-60"
              src={bannerImage3}
              alt=""
            />
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
              <p className="font-bold">Likes</p>
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
        <div className="space-y-2 relative ">
          <div className="relative">
            <img className="rounded-xl w-full h-60" src={bannerImage4} alt="" />
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
              <p className="font-bold">Likes</p>
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
