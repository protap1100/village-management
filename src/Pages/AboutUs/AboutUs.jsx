import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { FcAbout } from "react-icons/fc";

const AboutUs = () => {
  return (
    <div className="p-6 bg-gray-100">
      <Helmet>
        <title>BGTS || About Us</title>
        <link rel="icon" href="information.png" type="image/png" />
      </Helmet>
      <SectionTitle
        icon={<FcAbout />}
        heading={"About Us"}
        subHeading={"Our Goals And Ambitions For The Future"}
      />
      <div className="mt-6 text-gray-800">
        <p className="mb-4">
          Welcome to our platform! We are dedicated to providing a convenient
          and seamless meal ordering experience for students. Our mission is to
          ensure that students have access to a variety of nutritious and
          delicious meals with just a few clicks.
        </p>
        <p className="mb-4">
          Our team is committed to sustainability and eco-friendly practices,
          using only the best packaging materials that are kind to the
          environment. We believe in the importance of healthy eating and are
          constantly working to improve our menu options to cater to diverse
          tastes and dietary requirements.
        </p>
        <p className="mb-4">
          Looking ahead, our goals include expanding our delivery network,
          enhancing our user interface for an even better user experience, and
          integrating more advanced features like AI-driven meal recommendations
          and personalized meal plans. We are passionate about making a positive
          impact on the student community and strive to be the best in the
          industry.
        </p>
        <p>
          Thank you for choosing our service. Together, we can make student life
          easier, healthier, and more enjoyable! BGTS
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
