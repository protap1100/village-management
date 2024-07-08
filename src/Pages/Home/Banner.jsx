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

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Make Village Beautiful",
      "Keep Village Clean",
      "Help Each Other",
      "Make it Look Clean",
    ],
    loop: true,
    delaySpeed: 1000,
    cursorBlinking: true,
  });
  return (
    <div>
      <SectionTitle
        heading={"Welcome To Our Village"}
        subHeading={"We Believe in Unity"}
      ></SectionTitle>
      <div className="flex justify-center relative top-20">
        <div className="text-center text-xl lg:text-2xl font-bold text-green-500 absolute z-10 bg-green-50 w-full mx-2 lg:w-2/4">
          <h1>
            Our Goal Is To: {text} <Cursor cursorStyle="_" cursorColor="green" />
          </h1>
          <h1 className="text-xl">We are always working on building our community stronger</h1>
        </div>
      </div>
      <Carousel
        className="mt-5 mx-auto cursor-pointer w-full lg:w-5/6 relative"
        autoFocus={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        infiniteLoop={true}
        interval={2000}
      >
        <div className="relative">
          <img className="w-full" src={bannerImage1} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage2} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage3} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage4} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage5} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage6} />
        </div>
        <div className="relative">
          <img className="w-full" src={bannerImage7} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
