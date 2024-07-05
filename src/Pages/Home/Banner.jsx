import bannerImage1 from "../../assets/Media/Banner/Village-Banner1.jpg";
import bannerImage2 from "../../assets/Media/Banner/Village-Banner2.png";
import bannerImage3 from "../../assets/Media/Banner/Village-Banner3.png";
import bannerImage4 from "../../assets/Media/Banner/Village-Banner4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      className=" mx-auto cursor-pointer w-4/6"
      autoFocus={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      infiniteLoop={true}
      interval={2000}
    >
      <div>
        <img className="w-full" src={bannerImage1} />
        <p className="legend">Experience the serene beauty of rolling hills and lush green fields in our picturesque village.</p>
      </div>
      <div>
        <img className="w-full" src={bannerImage2} />
        <p className="legend">Discover the vibrant culture of our village, where traditional crafts and festivities bring the community together. Enjoy scenic walks, local markets</p>
      </div>
      <div>
        <img className="w-full" src={bannerImage3} />
        <p className="legend">Explore our coastal village, boasting stunning seaside views and sandy beaches. Perfect for nature lovers, it offers fishing, boating, and seaside dining..</p>
      </div>
      <div>
        <img className="w-full" src={bannerImage4} />
        <p className="legend">Immerse yourself in the historical charm of our village, where ancient architecture meets modern comforts.</p>
      </div>
    </Carousel>
  );
};

export default Banner;
