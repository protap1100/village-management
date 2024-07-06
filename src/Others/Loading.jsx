import ReactLoading from "react-loading";

const Loading = ({type}) => {
  return (
    <div className="text-center flex justify-center my-40">
      <ReactLoading type={type || 'spin'}  color='#8ecae6'  height={100} width={90} />
    </div>
  );
};

export default Loading;
