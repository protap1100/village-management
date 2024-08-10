import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Others/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateMember = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, errors, watch } = useForm();

  const { data: member = {}, isLoading: membersLoading } = useQuery({
    queryKey: ["member", id],
    queryFn: async () => {
      const res = await axiosPublic(`/update-member/${id}`);
      return res.data;
    },
  });
  console.log(member);
  const onSubmit = async (data) => {
    const memberData = {
      ...data,
      added_by: member?.added_by,
      added_email: member?.added_email,
      createdAt: member?.createdAt,
      objectId: member._id,
    };

    try {
      const res = await axiosPublic.patch("/updating-member", memberData);

      if (res.data?.success) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Member information updated successfully!",
          confirmButtonText: "OK",
        });
        navigate("/admin/all-members");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to update member information.",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong while updating the member.",
        confirmButtonText: "OK",
      });
      console.error("Error updating member:", error);
    }
  };

  if (membersLoading) {
    return <Loading />;
  }

  return (
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
              defaultValue={member.name}
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5 lg:flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Father Name
            </label>
            <input
              type="text"
              placeholder="Enter Father's Name"
              defaultValue={member.fatherName}
              {...register("fatherName", {
                required: "Father Name is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Age
            </label>
            <input
              type="number"
              defaultValue={member?.age}
              placeholder="Enter Age"
              {...register("age", { required: "Age is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              NID/Birth Certificate
            </label>
            <input
              type="text"
              defaultValue={member.nid}
              placeholder="Enter NID/Birth Certificate Number"
              {...register("nid", {
                required: "NID/Birth Certificate Number is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
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
              defaultValue={member.profession}
              {...register("profession", {
                required: "Profession is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Blood Group
            </label>
            <input
              type="text"
              placeholder="Enter Blood Group"
              defaultValue={member.bloodGroup}
              {...register("bloodGroup", {
                required: "Blood Group is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Sex
            </label>
            <select
              {...register("sex", { required: "Sex is required" })}
              defaultValue={member.sex}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              defaultValue={member?.phone}
              {...register("phone", { required: "Phone Number is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Current Address
            </label>
            <textarea
              defaultValue={member?.currentAddress}
              rows="3"
              placeholder="Enter Current Address"
              {...register("currentAddress", {
                required: "Current Address is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Permanent Address
            </label>
            <textarea
              rows="3"
              defaultValue={member?.permanentAddress}
              placeholder="Enter Permanent Address"
              {...register("permanentAddress", {
                required: "Permanent Address is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Education
            </label>
            <input
              defaultValue={member.education}
              type="text"
              placeholder="Enter Education"
              {...register("education", { required: "Education is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Social Media
            </label>
            <input
              type="text"
              placeholder="Enter Social Media Handle"
              defaultValue={member.social}
              {...register("social", {
                required: "Social Media Handle is required",
              })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Image
          </label>
          <input
            type="text"
            accept="image/*"
            defaultValue={member.image}
            {...register("image")}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {member?.paymentStatus.map((payment, index) => (
            <div key={index} className="flex gap-5 mb-5">
              <div className="flex-1">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  {payment.month}
                </label>
                <select
                  {...register(`paymentStatus.${index}.status`)} // Register the field
                  defaultValue={payment.status} // Set the default value here
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
                {/* Hidden input to include the month in the form data */}
                <input
                  type="hidden"
                  {...register(`paymentStatus.${index}.month`)} // Register month
                  value={payment.month}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#6A64F1] py-3 px-6 text-base font-medium text-white hover:bg-[#6A64F1] focus:outline-none focus:ring-2 focus:ring-[#6A64F1] focus:ring-offset-2"
        >
          Update Member
        </button>
      </form>
    </div>
  );
};

export default UpdateMember;
