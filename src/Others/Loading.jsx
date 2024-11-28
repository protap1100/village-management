import ReactLoading from "react-loading";

const Loading = ({ type }) => {
  return (
    <div className="text-center flex justify-center my-40">
      <div className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24">
        <ReactLoading
          type={type || "spin"}
          color="#8ecae6"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default Loading;
