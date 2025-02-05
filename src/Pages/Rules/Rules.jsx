import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { FcRules } from "react-icons/fc";

const Rules = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <Helmet>
        <title>BGTS || Members</title>
        <link rel="icon" href="rules.png" type="image/png" />
      </Helmet>
      <SectionTitle
      icon={<FcRules></FcRules>}
        heading={"Rules About Bgts"}
        subHeading={"Rules To Follow To Get The Membership of our village"}
      ></SectionTitle>
      <div className="mt-6">
        <table className="rules-table w-full bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeInUp">
          <thead>
            <tr>
              <th className="text-center bg-blue-500 text-white py-4 text-xl">সংগঠনের গঠনতন্ত্র</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">১) সংগঠনের নাম : বেকী গাড়াইল তরুণ সংঘ।</td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ২) সংগঠনের ঠিকানা : গ্রাম-বেকী গাড়াইল, পো-টোপের বাড়ী,
                থানা-ধামরাই, জেলা-ঢাকা।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৩) লক্ষ্য ও উদ্দেশ্য : সংগঠনের লক্ষ্য সামাজিক উন্নায়ন এবং সকলের
                একত্রিত থেকে জীবের সেবা করা।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৪) বিভিন্ন সদস্য পদ বাতিলের বিধান : কোনো সদস্য সংগঠনের বিধি বিধান
                ও নীতি বহিভূর্ত কাজ করলে সংগঠনের সদস্য পদ হতে বাদ পরবেন।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৫) সদস্য পদ পূর্ণ বহাল : সদস্য পদ হতে বাতিল হলে কমিটির সকল সদস্য
                গনের মতামতের / সিন্ধান্তের ভিত্তিতে অনুমতিস্বাপেক্ষে পুনরায়
                আবেদনপত্র জমা দিয়ে সদস্য পদ পূর্ণ বহাল করা যাবে।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৬) কার্যকারী পরিষদের কার্যাবলী : নির্দিষ্ট সময়ের জন্য কার্যকারী
                পরিষদ নির্বাচিত হবেন। সঠিক দায়িত্ব নিয়ে সংগঠনের উন্নায়নের জন্য
                সময়-উপযোগী কাজ করবেন। ব্যর্থতায় পদত্যাগ করতে পারবেন।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৭) সাধারন সদস্যদের অধিকার : সংগঠনের সকল সদস্যই সমান অধিকার এবং
                সুবিধা ভোগ করবেন। সভায় উপস্থিত হয়ে পরামর্শ দেওয়ার অধিকার সকলের।
                সাধারনত সদস্যদের রায় এর মাধ্যমেই কার্যকরী সদস্য নির্বাচিত হবেন।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৮) নির্বাচন বিধি : কার্যকরী সদস্যদের এক বছরের জন্য নির্বাচিত করা
                হবে। প্রতি বছর সকল সদস্যগনের উপস্থিতিতে সদস্যগনের প্রত্যক্ষ রায়ের
                মাধ্যমে কার্যকরী সদস্য নির্বাচিত হবেন।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ৯) সদস্য ফ্রি/চাঁদা : বিভিন্ন উন্নায়নমূলক সামাজিক কাজ সম্পন্ন
                করার জন্য প্রত্যেক সদস্যদের মাসে ২০ (বিশ) টাকা দিতে হবে যা
                অফেরৎযোগ্য। ভবিষ্যৎতে সকলের সম্মতিক্রমে চাঁদার পরিমান বাড়তে বা
                কমতে পারে। এছাড়াও বিভিন্ন উৎসবে সামর্থ অনুযায়ী অনুদান ধার্য্য
                করা হবে সকলের সম্মতিক্রমে।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ১০) সভা আহব্বান : বৎসরে অন্তত দুইবার সদকল সদস্যদের সম্মিলিত
                উপস্থিতিতে সভা অনুষ্ঠিত হবে। এছাড়াও বিভিন্ন কর্য সম্পাদনের জন্য
                সবার মাধ্যমে আলোচনা করে সিদ্ধান্ত নিতে হবে। জরুরী প্রয়োজনে বা
                সরাসরি একত্রিত হওয়া সম্ভব না হলে মোবাইল নেটওয়ার্কের মাধ্যমে
                গ্রুপে মিটিং করা হবে।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ১১) হিসাব নিকাশ : সংগঠনের বাৎসরিক হিসাব সহ যাবতীয় হিসাব,
                হিসাব-রক্ষক/ক্যাশিয়ার সুষ্ঠভাবে হিসাবের খাতায় লিপিবদ্ধ রাখবেন।
                নগদ টাকা ব্যাকে জমা রাখা হবে। বাৎসরিক সভায় বছরের হিসাব নিকাশ তুলে
                ধরা হবে।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ১২) সংশোধণী : সংগঠনের গঠনতন্ত্রের কোন সংশোধণের প্রয়োজন হলে বা
                নতুন কোন নিয়মনীতি প্রয়োজন হলে সকল সদস্যদের আলোচনার মাধ্যমে
                সিদ্ধান্ত নিতে হবে।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ১৩) সীমাবদ্ধতা : শুধুমাত্র সার্থসিদ্ধির জন্য অসামাজিক কোন কাজ
                সংগঠনের কার্যাবলীর বর্হিভূত। যে কোন কাজের সিদ্ধান্ত সকল সদস্যদের
                অনুমতি নিয়ে করা হবে। সমাজের সার্বিক মঙ্গলের জন্য কাজ করাই সংগঠনের
                উদ্দেশ্য। রাষ্ট্র বিরোধ, ধর্ম বিরোধ,সংগঠনের নীতি বর্হিভূত কোন কাজ
                সংগঠনের কর্মসূচীর আওতায় থাকবে না।
              </td>
            </tr>
            <tr className="hover:bg-blue-100 transition duration-300 ease-in-out">
              <td className="border-t border-gray-200 py-2 px-4">
                ১৪) বিলুপ্তি : কোন বিশেষ সমস্যার সম্মুখীন হয়ে যদি সংগঠন চালানো
                সম্ভব না হয় সেক্ষেত্রে সকল সদস্যদের উপস্থিতিক্রমে আলোচনা
                স্বাপেক্ষে সংগঠনের বিলুপ্তি হতে পারে।
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rules;
