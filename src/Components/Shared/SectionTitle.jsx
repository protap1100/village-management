const SectionTitle = ({heading,subHeading,icon}) => {
    return (
        <div className="lg:w-1/3 w-full mx-auto">
            <h1 className="mt-5 text-green-600 text-3xl text-center divide-y divide-blue-200 flex justify-center gap-2 items-center">{heading} {icon}</h1>
            <div className="border border-green-500 my-5"></div>
            <h1 className="text-xl text-green-600 text-center">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;