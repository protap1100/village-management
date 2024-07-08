const Search = ({ name }) => {
  return (
    <div className="mb-5">
      <label className="mb-3 text-2xl block font-medium text-green-700">
        Search For {name}
      </label>
      <div className="flex gap-4 flex-col lg:flex-row justify-center">
        <input
          type="text"
          name={name}
          id="name"
          placeholder={`Search For ${name}`}
          className="lg:w-1/6 w-full  rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280]  focus:border-[#6A64F1]"
        />
        <button className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
