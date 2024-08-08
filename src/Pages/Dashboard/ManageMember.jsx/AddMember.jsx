import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMember = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      fatherName: "",
      age: "",
      nid: "",
      profession: "",
      bloodGroup: "",
      sex: "Male",
      phone: "",
      currentAddress: "",
      permanentAddress: "",
      education: "",
      social: "",
      image: "",
      paymentStatus: {
        January: "Unpaid",
        February: "Unpaid",
        March: "Unpaid",
        April: "Unpaid",
        May: "Unpaid",
        June: "Unpaid",
        July: "Unpaid",
        August: "Unpaid",
        September: "Unpaid",
        October: "Unpaid",
        November: "Unpaid",
        December: "Unpaid",
      },
    },
  });

  const onSubmit = async (data) => {
    try {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const memberData = {
          ...data,
          image: res.data.data.url,
          added_by: user?.displayName,
          added_email: user?.email,
          createdAt: new Date(),
        };

        await axiosPublic.post("/add-member", memberData);

        Swal.fire({
          title: "Success!",
          text: "Member added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to upload image!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while adding the member!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Resident"}
        subHeading={"Add New Village Resident"}
      />
      <div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="block lg:flex gap-5">
            <div className="mb-5  lg:flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Resident Name"
                {...register("name", { required: "Name is required" })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-5  lg:flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Father Name
              </label>
              <input
                type="text"
                placeholder="Enter Father's Name"
                {...register("fatherName", {
                  required: "Father Name is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.fatherName && (
                <p className="text-red-500">{errors.fatherName.message}</p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter Age"
                {...register("age", { required: "Age is required" })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                NID/Birth Certificate
              </label>
              <input
                type="text"
                placeholder="Enter NID/Birth Certificate Number"
                {...register("nid", {
                  required: "NID/Birth Certificate Number is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.nid && (
                <p className="text-red-500">{errors.nid.message}</p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Profession
              </label>
              <input
                type="text"
                placeholder="Enter Profession"
                {...register("profession", {
                  required: "Profession is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.profession && (
                <p className="text-red-500">{errors.profession.message}</p>
              )}
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Blood Group
              </label>
              <input
                type="text"
                placeholder="Enter Blood Group"
                {...register("bloodGroup", {
                  required: "Blood Group is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.bloodGroup && (
                <p className="text-red-500">{errors.bloodGroup.message}</p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Sex
              </label>
              <select
                {...register("sex", { required: "Sex is required" })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.sex && (
                <p className="text-red-500">{errors.sex.message}</p>
              )}
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                {...register("phone", { required: "Phone Number is required" })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Current Address
              </label>
              <input
                type="text"
                placeholder="Enter Current Address"
                {...register("currentAddress", {
                  required: "Current Address is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.currentAddress && (
                <p className="text-red-500">{errors.currentAddress.message}</p>
              )}
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Permanent Address
              </label>
              <input
                type="text"
                placeholder="Enter Permanent Address"
                {...register("permanentAddress", {
                  required: "Permanent Address is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.permanentAddress && (
                <p className="text-red-500">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Education
              </label>
              <input
                type="text"
                placeholder="Enter Education"
                {...register("education", {
                  required: "Education is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.education && (
                <p className="text-red-500">{errors.education.message}</p>
              )}
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Social
              </label>
              <input
                type="text"
                placeholder="Enter Social Information"
                {...register("social", {
                  required: "Social Information is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.social && (
                <p className="text-red-500">{errors.social.message}</p>
              )}
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Payment Status */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Payment Status
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.keys(watch("paymentStatus")).map((month, index) => (
                <div key={index} className="flex gap-5 mb-5">
                  <div className="flex-1">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      {month}
                    </label>
                    <select
                      {...register(`paymentStatus.${month}`, {
                        required: true,
                      })}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                    </select>
                    {errors.paymentStatus && errors.paymentStatus[month] && (
                      <p className="text-red-500">
                        Payment status for {month} is required
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-[#6A64F1] py-3 px-6 text-base font-medium text-white outline-none transition duration-300 hover:bg-[#5A4BB8]"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
