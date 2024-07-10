import SectionTitle from "../../../Components/Shared/SectionTitle";

const AddOccasions = () => {
  return (
    <div>
      <SectionTitle
        heading={"Add Occasions"}
        subHeading={"Add Upcoming Occasions"}
      ></SectionTitle>
      <div>
        <form className="card-body">
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Occasions Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Location or Venue
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Location or Venue"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Start Date
              </label>
              <input
                type="date"
                name="name"
                id="name"
                placeholder="Enter Start Date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                End Date
              </label>
              <input
                type="date"
                name="name"
                id="name"
                placeholder="Enter End Date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Activities
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter activities"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ContactInfo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Contact Info"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Organizer
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Organizer"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Event Highlights
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Event Highlights"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 w-full">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Description
              </label>
              <textarea
                type="text"
                name="name"
                id="name"
                placeholder="Enter Description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 w-full">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Photo
              </label>
              <input
                type="file"
                name="name"
                id="name"
                placeholder="Enter Photo"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOccasions;
