import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Others/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; 

const UpdateMember = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: member = {}, isLoading: membersLoading } = useQuery({
    queryKey: ["member", id],
    queryFn: async () => {
      const res = await axiosPublic(`/update-member/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: member.name || "",
      fatherName: member.fatherName || "",
      age: member.age || "",
      nid: member.nid || "",
      profession: member.profession || "",
      bloodGroup: member.bloodGroup || "",
      sex: member.sex || "Male",
      phone: member.phone || "",
      currentAddress: member.currentAddress || "",
      permanentAddress: member.permanentAddress || "",
      education: member.education || "",
      social: member.social || "",
      image: member.image || "",
    },
  });

  // Set form field values when data is loaded
  React.useEffect(() => {
    if (member) {
      Object.keys(member).forEach((key) => {
        setValue(key, member[key]);
      });
    }
  }, [member, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await axiosPublic.put(`/update-member/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        Swal.fire("Success", "Member updated successfully!", "success");
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update member!", "error");
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
            <label className="mb-3 block text-base font-medium text-[#07074D]">Name</label>
            <input
              type="text"
              placeholder="Enter Resident Name"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mb-5 lg:flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Father Name</label>
            <input
              type="text"
              placeholder="Enter Father's Name"
              {...register("fatherName", { required: "Father Name is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.fatherName && <p className="text-red-500">{errors.fatherName.message}</p>}
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              {...register("age", { required: "Age is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">NID/Birth Certificate</label>
            <input
              type="text"
              placeholder="Enter NID/Birth Certificate Number"
              {...register("nid", { required: "NID/Birth Certificate Number is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.nid && <p className="text-red-500">{errors.nid.message}</p>}
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Profession</label>
            <input
              type="text"
              placeholder="Enter Profession"
              {...register("profession", { required: "Profession is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.profession && <p className="text-red-500">{errors.profession.message}</p>}
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Blood Group</label>
            <input
              type="text"
              placeholder="Enter Blood Group"
              {...register("bloodGroup", { required: "Blood Group is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.bloodGroup && <p className="text-red-500">{errors.bloodGroup.message}</p>}
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Sex</label>
            <select
              {...register("sex", { required: "Sex is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.sex && <p className="text-red-500">{errors.sex.message}</p>}
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Phone</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              {...register("phone", { required: "Phone Number is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Current Address</label>
            <textarea
              rows="3"
              placeholder="Enter Current Address"
              {...register("currentAddress", { required: "Current Address is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.currentAddress && <p className="text-red-500">{errors.currentAddress.message}</p>}
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Permanent Address</label>
            <textarea
              rows="3"
              placeholder="Enter Permanent Address"
              {...register("permanentAddress", { required: "Permanent Address is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.permanentAddress && <p className="text-red-500">{errors.permanentAddress.message}</p>}
          </div>
        </div>
        <div className="block lg:flex gap-5">
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Education</label>
            <input
              type="text"
              placeholder="Enter Education"
              {...register("education", { required: "Education is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.education && <p className="text-red-500">{errors.education.message}</p>}
          </div>
          <div className="mb-5 flex-1">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Social Media</label>
            <input
              type="text"
              placeholder="Enter Social Media Handle"
              {...register("social", { required: "Social Media Handle is required" })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.social && <p className="text-red-500">{errors.social.message}</p>}
          </div>
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
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
