import bannerImage1 from "../../assets/Media/Banner/Village-Banner1.jpg";
import bannerImage2 from "../../assets/Media/Banner/Village-Banner2.png";
import bannerImage3 from "../../assets/Media/Banner/Village-Banner3.png";
import bannerImage4 from "../../assets/Media/Banner/Village-Banner4.png";
import bannerImage5 from "../../assets/Media/Banner/Village-Banner5.jpg";
import bannerImage6 from "../../assets/Media/Banner/Village-Banner6.jpg";
import bannerImage7 from "../../assets/Media/Banner/Village-Banner7.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { GiVillage } from "react-icons/gi";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Beautify Our Village",
      "Maintain Village Cleanliness",
      "Support and Uplift Each Other",
      "Strive for a Cleaner Environment",
    ],

    loop: true,
    delaySpeed: 1000,
    cursorBlinking: true,
  });

  return (
    <div>
      <SectionTitle
        icon={<GiVillage />}
        heading={"Discover the Heart of Our Village"}
        subHeading={"Together, We Create Wonders"}
      ></SectionTitle>

      <div className="flex justify-center relative top-20">
        <div className="text-center text-xl lg:text-2xl font-bold text-green-500 absolute z-10 bg-green-50 w-full mx-2 lg:w-2/4 rounded-lg shadow-lg p-4">
          <h1>
            Our Vision: {text} <Cursor cursorStyle="_" cursorColor="green" />
          </h1>
          <h1 className="text-xl mt-2">
            Committed to Unity, Growth, and a Brighter Future
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Join us in making our village a symbol of harmony and progress.
          </p>
        </div>
      </div>

      <Carousel
        className="mt-5 mx-auto cursor-pointer w-full lg:w-5/6 relative"
        autoFocus={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        transitionTime={800}
      >
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage1}
            alt="Village Banner 1"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage2}
            alt="Village Banner 2"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage3}
            alt="Village Banner 3"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage4}
            alt="Village Banner 4"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage5}
            alt="Village Banner 5"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage6}
            alt="Village Banner 6"
          />
        </div>
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src={bannerImage7}
            alt="Village Banner 7"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
