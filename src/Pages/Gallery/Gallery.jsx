import { GrGallery } from "react-icons/gr";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import Post from "./Post";
import usePost from "../../Hooks/usePost";
import SingleCard from "./SingleCard";
import Loading from "../../Others/Loading";

const Gallery = () => {
  const [posts, loading, refetch] = usePost();

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(posts)
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
      <Post></Post>

      <section>
        <div>
          <h1 className="text-center my-5 font-semibold">Post By Other User</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-20 px-3">
          {posts.map((post) => (
            <SingleCard key={post._id} post={post}></SingleCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
