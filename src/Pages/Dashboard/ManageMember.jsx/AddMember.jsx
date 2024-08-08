import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMBB_API_URL;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMember = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
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
    console.log(data);
    try {
      // Image upload
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // Prepare member data
        const memberData = {
          ...data,
          image: res.data.data.url,
          createdBy: user?.displayName || 'Unknown',
          createdByEmail: user?.email || 'Unknown',
        };

        // Post member data
        await axiosPublic.post("/add-member", memberData);

        Swal.fire({
          title: 'Success!',
          text: 'Member added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while adding the member.',
        icon: 'error',
        confirmButtonText: 'OK'
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
            <div className="mb-5 lg:flex-1">
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
            <div className="mb-5 lg:flex-1">
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
              <textarea
                rows="3"
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
              <textarea
                rows="3"
                placeholder="Enter Permanent Address"
                {...register("permanentAddress", {
                  required: "Permanent Address is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.permanentAddress && (
                <p className="text-red-500">{errors.permanentAddress.message}</p>
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
                placeholder="Enter Education Details"
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
                Social Media
              </label>
              <input
                type="text"
                placeholder="Enter Social Media Links"
                {...register("social", {
                  required: "Social Media is required",
                })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.social && (
                <p className="text-red-500">{errors.social.message}</p>
              )}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <div className="mb-5 flex-1">
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
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-[#6A64F1] py-3 px-6 text-base font-medium text-white hover:bg-[#6A64F1] focus:outline-none focus:ring-2 focus:ring-[#6A64F1] focus:ring-offset-2"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
