import SectionTitle from "../../../Components/Shared/SectionTitle";
import { useState } from 'react';

const AddMember = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    fatherName: '',
    age: '',
    nid: '',
    profession: '',
    bloodGroup: '',
    sex: 'Male',
    phone: '',
    currentAddress: '',
    permanentAddress: '',
    education: '',
    social: '',
    paymentStatus: {
      January: '',
      February: '',
      March: '',
      April: '',
      May: '',
      June: '',
      July: '',
      August: '',
      September: '',
      October: '',
      November: '',
      December: '',
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMonthChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({
      ...prevData,
      paymentStatus: {
        ...prevData.paymentStatus,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentData);
  };

  return (
    <div>
      <SectionTitle
        heading={"Add Resident"}
        subHeading={"Add New Village Resident"}
      ></SectionTitle>
      <div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Resident Name"
                value={paymentData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Father Name
              </label>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                placeholder="Enter Father's Name"
                value={paymentData.fatherName}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter Age"
                value={paymentData.age}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                NID/Birth Certificate
              </label>
              <input
                type="text"
                name="nid"
                id="nid"
                placeholder="Enter NID/Birth Certificate Number"
                value={paymentData.nid}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                placeholder="Enter Profession"
                value={paymentData.profession}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Blood Group
              </label>
              <input
                type="text"
                name="bloodGroup"
                id="bloodGroup"
                placeholder="Enter Blood Group"
                value={paymentData.bloodGroup}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Sex
              </label>
              <select
                name="sex"
                id="sex"
                value={paymentData.sex}
                onChange={handleChange}
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
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                value={paymentData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Current Address
              </label>
              <input
                type="text"
                name="currentAddress"
                id="currentAddress"
                placeholder="Enter Current Address"
                value={paymentData.currentAddress}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                id="permanentAddress"
                placeholder="Enter Permanent Address"
                value={paymentData.permanentAddress}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Education
              </label>
              <input
                type="text"
                name="education"
                id="education"
                placeholder="Enter Education Level"
                value={paymentData.education}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex-1">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Social Media
              </label>
              <input
                type="text"
                name="social"
                id="social"
                placeholder="Enter Social Media Links"
                value={paymentData.social}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            {Object.keys(paymentData.paymentStatus).map((month, index) => (
              <div key={index} className="mb-5 flex-1">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  {month} 
                </label>
                <select
                  name={month}
                  value={paymentData.paymentStatus[month]}
                  onChange={handleMonthChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="py-3 px-8 bg-[#6A64F1] text-white rounded-md font-medium hover:bg-[#553BDD] transition duration-300 ease-in-out"
            >
              Add Resident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
